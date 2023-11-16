# Chat Application - Components Explanation

This Chat Application is designed to facilitate real-time communication between multiple users. Below are the main components used in this application:

## Components:

### App Component:
- **Description:** The main component serving as the entry point of the application.
- **Responsibilities:**
  - Manages the state for different components' visibility.
  - Handles user input for sending messages.
  - Fetches messages from the server and renders them.
  
### Home Component:
- **Description:** Represents the home page of the application.
- **Responsibilities:**
  - Displays information about the application.

### About Component:
- **Description:** Represents the 'About' page of the application.
- **Responsibilities:**
  - Displays information about the application or the team.

### Contact Component:
- **Description:** Represents the 'Contact' page of the application.
- **Responsibilities:**
  - Provides contact information or a contact form.

### Chat Component:
- **Description:** Represents the main chat interface.
- **Responsibilities:**
  - Renders the chat window and message inputs.
  - Displays messages from different users.
  - Handles sending and deleting messages.

### Other Supporting Components:
- **Header, Footer, Navigation:** Additional components providing structure and navigation within the application.
- **Message, MessageList:** Components to display individual messages and message lists.

## Usage:
- Clone or download the repository.
- Install necessary dependencies using `npm install`.
- Start the development server with `npm start`.
- Access the application through the provided URL.

## Technologies Used:
- React.js for building user interfaces.
- React Router for managing application routes.
- Fetch API for making requests to the server.
- JSON Server to simulate a backend API.
