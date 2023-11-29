# Event Management App

The Event Management App is a React-based web application designed to help users create and manage events seamlessly. It offers a user-friendly interface for event creation with various customizable options.

## Features

- **Event Creation**: Easily create events by providing event titles, dates, locations, ticket rates, and other essential details.
- **Customizable Options**: Customize event themes, colors, typefaces, and avatars to suit individual preferences.
- **Event Settings**: Set event visibility, capacity, and approval requirements as per event needs.
- **Local Storage Support**: Automatically saves event data to local storage for easy retrieval and continuity.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Ant Design**: UI components library for React applications.
- **Moment.js and Day.js**: Date manipulation libraries for handling dates and times.
- **UUID**: Library for generating unique identifiers.
- **Fetch API**: Used for asynchronous operations (sampled in the README).

## Getting Started

1. **Installation**: Clone the repository and run `npm install` to install dependencies.
2. **Running the App**: Execute `npm start` to start the development server.
3. **Usage**: Access the app via the provided URL and start creating and managing events.

## Usage Example

```javascript
// Sample code snippet showcasing usage of the Event Management App
import React from 'react';
import ReactDOM from 'react-dom';
import FormApp from './components/FormApp';

ReactDOM.render(
  <React.StrictMode>
    <FormApp />
  </React.StrictMode>,
  document.getElementById('root')
);
