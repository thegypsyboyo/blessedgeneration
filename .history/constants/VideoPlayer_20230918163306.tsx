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
    
      <div className="w-full h-full ">
      <div className={`fixed overflow-y-auto w-full p-[20px] pt-[120px] h-full block text-white  bg-[#000] top-0 left-0  shadow-md transition-all duration-500 z-[9999]`}  />

        <div className={`fixed w-[500px]  h-full  text-white bg-transparent top-0 flex items-center justify-center transition-all duration-500 z-[9999]`}>
          <div className="w-full h-[500px] flex items-center justify-center">
            <div className="bg-transparent h-full w-full rounded-lg">
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
