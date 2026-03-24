# Dragon Animation - React Version

A React-based interactive dragon animation that follows your cursor and breathes fire! 🐉🔥

## Files Created

- **DragonAnimation.jsx** - Main animated component with Dragon and Fire classes
- **App.jsx** - App wrapper component
- **App.css** - Global styles
- **index.js** - React entry point
- **package.json** - Project dependencies
- **public/index.html** - HTML entry point

## Setup & Installation

### Step 1: Navigate to project directory
```bash
cd /home/p21-0194/Documents/Spiderman\ animation
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start the development server
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## How It Works

The React component includes:

1. **DragonAnimation Component** - Main component using:
   - `useRef` for canvas reference
   - `useState` for modal state
   - `useEffect` for animation loop and event listeners
   - Canvas API for rendering

2. **Dragon Class** - Follows mouse cursor with:
   - Velocity-based movement
   - Smooth easing/friction
   - Automatic fire particle generation

3. **Fire Class** - Particle system with:
   - Dynamic sizing
   - Gravity effect
   - Fade-out animation

## Project Structure
```
Spiderman animation/
├── DragonAnimation.jsx     # Main animation component
├── App.jsx                 # App wrapper
├── App.css                 # Styles
├── index.js                # React entry point
├── package.json            # Dependencies
├── public/
│   └── index.html          # HTML entry point
└── index.html              # Original vanilla JS version (keep for reference)
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App (irreversible)

## Features

✅ Smooth cursor-following animation  
✅ Fire particle effects  
✅ Info modal  
✅ Responsive design  
✅ Dark theme  

## For LinkedIn

After testing:
1. Build for production: `npm run build`
2. Record the animation using ScreenToGif or OBS
3. Convert to GIF using Ezgif.com
4. Upload to LinkedIn Featured section

Enjoy your React dragon! 🐉
