import logo from '../assets/TestVisionAILogo.png';
import { WebIcon } from '../assets/icons/Web';
import { GithubIcon } from '../assets/icons/Github';
import { InstagramIcon } from '../assets/icons/instagram';
import { LinkedInIcon } from '../assets/icons/linked-in';

export const Footer = () => {
  return (
    <footer className="bg-card p-12 space-y-16">
      <div className="grid grid-rows-1 grid-cols-2 max-w-[150rem] mx-auto">
        <div className='flex flex-col gap-12'>
          <img src={logo} alt="Test Vision AI Logo" className='h-12 w-fit' />
          <ul className="text-4xl flex gap-8">
            <li>
              <a href="/">
                <WebIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col gap-12">
            <ul className="text-card-foreground text-3xl flex flex-col md:flex-row gap-4 md:gap-12 whitespace-nowrap">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Usage Guide</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <button className="bg-primary text-card-foreground text-2xl px-9 py-5 rounded-xl w-fit">
              Try for free
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl text-center text-card-foreground">
        &copy; 2024 TestVisionAI. All rights reserved.
      </p>
    </footer>
  );
};
