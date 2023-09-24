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
      <div className={`fixed overflow-y-auto w-full p-[20px] pt-[120px] h-full block text-white  bg-black opacity-[0.9] top-0 left-0 transition-all duration-500 z-[9999]`}  onClick={onClose} />

        <div className={`fixed w-full h-full  text-white left-0 top-0 flex items-center justify-center transition-all duration-500 z-[9999]`}  onClick={onClose} >
          <Layout className="flex items-center justify-center">
            <div className="lg:w-[80%] w-[90%]  flex items-center justify-center relative">
            <div className="absolute right-0 top-0 w-[30px] h-[30px] text-[20px] font-light text-white bg-black pb-[5px] pl-[5px] rounded-bl-[30px] flex items-center justify-center cursor-pointer" onClick={onClose} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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

                        </div>
              <div className="bg-transparent h-full w-full rounded-lg">
              <iframe
                width=""
                height="400"
                src={videoSrc}
                allowFullScreen
                className={`w-full h-[400px] ${className}`}
              ></iframe>
              </div>
            </div>
          </Layout>
        </div>
      </div>
      </>
  );
};

export default VideoPlayer;
