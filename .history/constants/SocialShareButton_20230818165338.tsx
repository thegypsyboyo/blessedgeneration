import React, { ReactNode } from 'react';

interface SocialShareButtonProps {
  platform: 'twitter' | 'facebook' | 'linkedin' | 'youtube' | 'instagram' | 'gmail'; // Add more platforms as needed
  url: string;
  title?: string; // Used for email subject
  body?: string; // Used for email body
  icon: ReactNode;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({ platform, url, title, body, icon }) => {
  const getShareUrl = () => {
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      case 'youtube':
        return `https://www.youtube.com/share?url=${encodeURIComponent(url)}`;
      case 'instagram':
        return `https://www.instagram.com/share?url=${encodeURIComponent(url)}`;
      case 'gmail':
        const subject = encodeURIComponent(title || '');
        const emailBody = encodeURIComponent(body || '');
        return `mailto:?subject=${subject}&body=${emailBody}`;
      // Add more cases for other platforms
      default:
        return '';
    }
  };

  return (
    <a
      href={getShareUrl()}
      target="_blank"
      rel="noreferrer"
      className="text-primaryDark bg-[#f7f7f7] relative gap-[10px] h-[40px] w-[40px] flex items-center justify-center text-center text-[14px] rounded-full z-[1] hover:text-white group overflow-hidden transition-all duration-500"
    >
      <span className="absolute content-[] top-0 left-0 right-0 h-full bg-orangeDefault delay-[0.1s] ease-in-out transition-all duration-500 opacity-100  transform origin-top scale-y-0 -z-[1] group-hover:opacity-100 group-hover:transform group-hover:scale-y-100" />
      {icon}
    </a>
  );
};

export default SocialShareButton;
