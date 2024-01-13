# Coding exercises for Senior Software Engineer with ReactJS

## Exercise 1: React Component Design

**Task**: Design a reusable DataTable React component that displays data in a tabular format. The component should be able to:

- Take an array of objects as a prop, where each object represents a row in the table.
- Accept another prop that defines the columns for the table. Each column definition should include the key of the data in the objects and a label for the column header.
- Optionally, sort the data based on a specified column when clicked.

**Requirements**:

- Use functional components and hooks.
- Ensure the component is efficient and re-renders only when necessary.
- Implement basic styling to distinguish between headers and rows.
- (Bonus) Add pagination support with a configurable number of rows per page.

## Exercise 2: State Management and Component Interaction

**Task:** Create a small React application with the following components:

- **UserList**: Displays a list of users. Each user has a name and an active/inactive status.
- **UserStatusToggle**: A component that allows users to toggle their active/inactive status.
- **ActiveUserCount**: Displays the number of users currently active.

**Requirements:**

- Use a central state management approach (Context API or any state management library you're comfortable with).
- The **UserList** component should display all users and their current status.
- The **UserStatusToggle** should allow changing the status of a user. This change should reflect in the **UserList** component.
- The **ActiveUserCount** should always show the correct number of active users.

## Exercise 3: API Integration and Error Handling

**Task:** Build a React component that retrieves and displays a list of posts from a public API (like JSONPlaceholder's `/posts` endpoint).

**Requirements:**

- Make an API call to retrieve posts when the component mounts.
- Display the list of posts, each with its title and body.
- Implement loading and error states for the API call.
- (Bonus) Add functionality to filter posts by title.
