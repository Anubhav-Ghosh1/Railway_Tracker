﻿# Railway_Tracker

A React.js project that helps users find trains between stations using the Indian Railways API. This app provides information about trains, including train schedules, routes, and availability between stations.

![Railway_Tracker](https://socialify.git.ci/Anubhav-Ghosh1/Railway_Tracker/image?forks=1&issues=1&language=1&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

## Features

- Search for trains between two stations.
- View train details such as schedules, routes, and availability.
- User-friendly interface with React.js.
- Real-time data fetched from the Indian Railways API.

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A valid API key for the Indian Railways API.

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Anubhav-Ghosh1/Railway_Tracker.git
    cd train-finding-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your API key:
    ```
    REACT_APP_API_KEY=your_api_key_here
    ```

4. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter the names or codes of the departure and destination stations.
3. Click on the "Search" button to find available trains.
4. View the list of trains with their details such as departure time, arrival time, and route.

## API Integration

This app uses the Indian Railways API to fetch real-time data. To use the API:

1. Obtain an API key from the Indian Railways API
