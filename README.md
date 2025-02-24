# Screen Recorder React App

This is a simple **WebRTC-based screen recording application** built with React. It allows users to record their full screen, capture system audio, and download the recorded video.

## Features

- **Full-Screen Recording**: Capture the entire screen directly from the browser.
- **System Audio Support**: Records both system and microphone audio (if available).
- **Downloadable Video**: Saves recordings in `.webm` format.
- **Simple UI**: Built with React and Bootstrap for a clean and responsive experience.

### Steps to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/einasmadi/screen-recorder.git
   cd screen-recorder
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the app:**
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Tech Stack

- **React.js** for UI
- **WebRTC & MediaRecorder API** for screen recording
- **Bootstrap** for styling

## Usage

1. Click **Start Recording** to begin.
2. Select the screen or window to capture.
3. Click **Stop Recording** to finish.
4. Download the recorded video.

