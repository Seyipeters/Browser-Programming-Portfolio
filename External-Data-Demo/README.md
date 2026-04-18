# External Data Demo - Portfolio Assignment

## Overview
This project demonstrates the use of async/await, fetch(), and error handling to load external data from an API and display it dynamically on a portfolio website.

## Features
- **Dynamic Data Loading**: Click "Load Data" button to fetch user information from an external API
- **Async/Await**: Uses modern JavaScript async/await syntax for clean asynchronous code
- **Error Handling**: Comprehensive try/catch blocks to handle network and parsing errors
- **Response Validation**: Checks response.ok to verify successful HTTP responses
- **Responsive Design**: Mobile-friendly layout
- **Dark Theme Toggle**: Switch between light and dark themes
- **Click Counter**: Interactive button with state management

## Technical Requirements Met
✓ Uses async/await for asynchronous operations
✓ Uses fetch() to retrieve data from JSONPlaceholder API
✓ Includes try/catch for error handling
✓ Checks response.ok before processing data
✓ DOM updates dynamically (no hardcoded HTML)
✓ Displays Name, Email, and Company name from API response
✓ Shows "Loading…" message while fetching
✓ Shows "Error loading data" on failure
✓ Includes explanatory comments

## API Endpoint
- **URL**: https://jsonplaceholder.typicode.com/users/1
- **Method**: GET
- **Response**: JSON object containing user data

## Files
- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - JavaScript with API integration
- `README.md` - This file

## How to Use
1. Open `index.html` in a web browser
2. Navigate to the "External Data Demo" section
3. Click the "Load Data" button
4. Watch as the page fetches and displays user data

## Code Comments
The JavaScript file includes detailed comments explaining:
- Why we use async/await
- Why we check response.ok
- Why we use try/catch

