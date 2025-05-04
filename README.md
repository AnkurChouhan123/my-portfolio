# Ankur Chouhan's Portfolio

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🌓 Dark/Light mode
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📝 Contact form with MongoDB integration
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast development with Vite

## Tech Stack

- Frontend:
  - React.js
  - Tailwind CSS
  - Framer Motion
  - Material-UI
  - React Icons
  - React Scroll

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - CORS
  - Dotenv

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the development servers:
   ```bash
   # Start the backend server (from the server directory)
   npm run dev

   # Start the frontend development server (from the client directory)
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the website.

## Project Structure

```
portfolio/
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── App.jsx    # Main application component
│   │   └── index.css  # Global styles
│   └── package.json
├── server/            # Backend Node.js application
│   ├── index.js      # Express server setup
│   └── package.json
└── README.md
```

## Deployment

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the backend to your preferred hosting service (e.g., Heroku, DigitalOcean)

3. Set up environment variables on your hosting platform

4. Deploy the frontend to a static hosting service (e.g., Vercel, Netlify)

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the ISC License. # personal-portfolio
# personal-portfolio
# ankur-personal-portfolio
