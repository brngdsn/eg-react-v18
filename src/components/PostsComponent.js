import React, { useState, useEffect } from 'react';

// PostsComponent Component
const PostsComponent = () => {

  // State
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  // Side-effects handler
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [])

  // Filter Posts
  const filteredPosts = posts.filter((post) => {
    return post
      .title
      .toLowerCase()
      .includes(filter.toLowerCase());
  });

  // View
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter posts by title"
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );

};

// Export PostsComponent
export default PostsComponent;
