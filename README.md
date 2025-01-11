# Back to the Future (of Collecting)

**Back to the Future (of Collecting)** is a React-based web application that serves as a platform for exploring the future of collecting practices. The app showcases an innovative approach to digital collecting, where users can discover and save unique items to their digital wallets as wallet passes. It fosters creativity and interaction by encouraging users to share their wallet passes and attempt to collect all available passes.

## Bill of Materials (BoM)
This project includes both hardware and software components to create a complete experience.

### Hardware
1. **Raspberry Pi** (version 3 or later)
2. **Waveshare 7" Touch Display**
3. **4 Cherry MX Switches**
4. **Arduino Pro Micro**
5. **Wires**
6. **Micro USB Cable**
7. **HDMI Cable**
8. **USB-C Cable**
9. **M2.5 Screws and Standoffs**
10. **Acrylic Plates** (see files in the repository for dimensions and cutting guides)

### Software Tools and Dependencies
1. **React** - Frontend framework for building the user interface
2. **Node.js** - JavaScript runtime for the backend and development environment
3. **Git** - Version control system for collaborative development

### React Dependencies
- **react**: Core React library
- **react-dom**: DOM bindings for React
- **react-router-dom**: For routing within the app
- **react-helmet**: For injecting dynamic properties like the current item name and parent into the HTML header

### Development Tools
1. **VS Code** - Preferred code editor for writing and debugging
2. **npm** - Package manager for installing dependencies
3. **Browser Developer Tools** - For testing and debugging the web app

## Tech Stack
The project leverages the following technologies:

### Frontend
- **React** (with Hooks and Context API for state management)
- **React Router** for routing

### Backend
- **Node.js** with simple static serving for deployment

## Installation and Setup

### Prerequisites
1. Install **Node.js** and **npm** on your local machine.
2. Clone the repository from GitHub.

### Steps to Install
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/back-to-the-future-collecting.git
   cd back-to-the-future-collecting
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000` by default.

### Deployment
1. Build the production version of the app:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `build` folder to your preferred hosting service.

#### Hosting on GitHub Pages
1. Install the `gh-pages` package as a development dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following scripts to your `package.json` file:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Configure the `homepage` field in your `package.json` with your GitHub repository URL:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```
4. Deploy the app to GitHub Pages:
   ```bash
   npm run deploy
   ```
   Your app will be live at `https://your-username.github.io/your-repo-name`.

## How to Use
1. Open the application in your browser at `http://localhost:3000` (or your deployed URL).
2. Refresh the page to discover a new unique item.
3. Save the item to your digital wallet as a wallet pass.
4. Share your wallet passes with others and try to collect all available passes.
5. Feel free to fork the project and create your own future items or entirely different collections by leveraging the easy scaffolding in the `items.js` file.

---

Feel free to contribute by submitting issues, feature requests, or pull requests! Check out the repository's issues tab for ways to get involved.
