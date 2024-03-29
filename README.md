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

## Exercise 4: Advanced React Patterns and Performance Optimization

**Task:** Create a complex form in React that includes multiple input fields (text, dropdown, checkbox, etc.), and implement custom validation logic.

**Requirements:**

- The form should have at least five different types of inputs.
- Implement custom validation logic that triggers on form submission.
- Use advanced React patterns (like compound components, render props, or higher-order components) to build the form.
- Optimize the form for performance, ensuring minimal re-renders.
- (Bonus) Implement a feature to save and load form data from local storage.

## Exercise 5: React and Web Technologies Integration

**Task:** Create a React application that integrates with WebSockets to provide real-time data updates.

**Requirements:**

- Set up a WebSocket connection to a public WebSocket server (e.g., a cryptocurrency price ticker).
- Display real-time data received from the WebSocket server in a React component.
- Ensure that the component updates its display whenever new data is received without causing unnecessary re-renders.
- Handle connection errors and attempt to reconnect if the WebSocket connection is lost.
- (Bonus) Allow the user to select specific data (e.g., a particular cryptocurrency) they want to track in real-time.

## Exercise 7: React Application Architecture and State Management

**Task**: Design the architecture for a medium-sized React application, such as a task management tool, focusing on state management and component structure.

**Requirements:**

1. **Describe the overall component structure of the application.**
2. **Choose a state management approach** (Context API, Redux, MobX, etc.) and explain how you would manage the application's state.
3. **Discuss how you would handle side effects** (like data fetching, WebSocket connections).
4. **Outline your strategy for optimizing application performance and managing state updates.**
5. *(Bonus)* **Explain how you would integrate routing in this application.**
