import React, { useEffect } from 'react';
import ExpandableContent from '../components/expandableCard/expandableCard';
import { MdOutlineFileUpload, MdTextFields } from 'react-icons/md';
import { FaRegUser, FaRegHeart, FaRegSmile } from 'react-icons/fa';
import { VscSend } from 'react-icons/vsc';
import useToggleStore from '../store/useStore';
import TestVisionSVG from '../assets/test_vision_image.svg';

const UsageGuide = () => {
  const contentData = [
    {
      icon: <FaRegUser size={20} />,
      heading: 'Login in to our website',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
    {
      icon: <MdOutlineFileUpload size={26} />,
      heading: 'Upload screenshots of your application/website',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
    {
      icon: <MdTextFields size={26} />,
      heading: 'Enter a context to explain your the user flow',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
    {
      icon: <VscSend size={24} />,
      heading: 'Click the button to generate results',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
    {
      icon: <FaRegHeart size={22} />,
      heading: 'Let the AI do it’s magic',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
    {
      icon: <FaRegSmile size={24} />,
      heading: 'Receive detailed, step-by-step test cases',
      content:
        'Enter detailed description of your website/application’s flow which will help us understand the context of the screenshots and let AI bring you more related and meaningful test cases',
      image: TestVisionSVG,
    },
  ];

  const { currentIndex, toggleIndex } = useToggleStore();

  useEffect(() => {
    const interval = setInterval(() => {
      toggleIndex(currentIndex < contentData.length ? currentIndex + 1 : 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, toggleIndex, contentData.length]);

  const validIndex = currentIndex ? currentIndex - 1 : 0;

  return (
    <div className="px-16 flex flex-col gap-7 pb-20 pt-36" id='usage-guide'>
      <div className="w-full gap-2 flex flex-col gap-10 pb-5">
        <div className="text-[#09C0A1] font-bold text-4xl">USAGE GUIDE</div>
        <div className="text-black font-bold text-6xl">How it Works?</div>
      </div>
      <div className="bg-white flex flex-row w-full">
        <div className="w-1/2 h-fit flex flex-col gap-10">
          {contentData.map((item, index) => (
            <ExpandableContent
              key={index}
              icon={item.icon}
              heading={item.heading}
              content={item.content}
              index={index + 1}
            />
          ))}
        </div>
        <div
          className="flex-1 w-full flex items-center justify-center"
          style={{ height: '430px' }}
        >
          <img
            src={contentData[validIndex].image}
            alt="Test Vision SVG"
            className="h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default UsageGuide;
