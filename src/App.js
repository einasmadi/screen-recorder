import React, { useState, useRef } from "react";

function ScreenRecorder() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: "video/webm" });
        setVideoURL(URL.createObjectURL(blob));
        recordedChunks.current = [];
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting screen recording:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Screen Recorder</h2>
      {recording ? (
        <button onClick={stopRecording} className="btn btn-danger">
          Stop Recording
        </button>
      ) : (
        <button onClick={startRecording} className="btn btn-success">
          Start Recording
        </button>
      )}
      {videoURL && (
        <div className="mt-4">
          <video src={videoURL} controls className="w-100"></video>
          <a href={videoURL} download="recorded-video.webm" className="btn btn-primary mt-2">
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}

export default ScreenRecorder;
