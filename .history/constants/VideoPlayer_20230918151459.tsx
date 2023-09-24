import Layout from '@/components/Home/Layout';
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  className: string;
  isOpen: boolean; // New prop to control visibility
  onClose: () => void; // Function to close the modal

}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, className, isOpen, onClose }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  if (!isOpen) {
    return null; // Render nothing if isOpen is false
  }

  return (

      <>
      {/* <div className="fixed inset-0 top-[50%] bottom-[50%] w-full max-h-[500px] flex justify-center items-center z-[99999] ">
        <div className="absolute inset-0 bg-dark opacity-50"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
          <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
          </button>
          <iframe
            width="560"
            height="315"
            src={videoSrc}
            allowFullScreen
            className={`w-full h-[350px] ${className}`}
          ></iframe>
        </div>
      </div> */}
      <div className="relative w-full h-full bg-yellowColor">
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center bg-dark opacity-50">
          <div className="max-w-[500px] h-[400px] ">
            <div className="bg-white h-full w-full rounded-lg p-4 ">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
            </button>
            <iframe
              width="560"
              height="315"
              src={videoSrc}
              allowFullScreen
              className={`w-full h-[350px] ${className}`}
            ></iframe>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default VideoPlayer;
