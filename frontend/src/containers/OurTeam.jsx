import React from 'react';

const teamMembers = [
  {
    name: 'Yashaswini',
    designation: 'Team Lead',
    imageUrl: 'https://avatars.githubusercontent.com/u/122783078?v=4', // Actual img will replace
    socialLinks: {
      website: '#',
      github: 'https://github.com/yoshjayn',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Kiron',
    designation: 'Backend Dev',
    imageUrl: 'https://avatars.githubusercontent.com/u/100477738?v=4',
    socialLinks: {
      website: '#',
      github: 'https://github.com/JuxtNorth',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Arpit',
    designation: 'Graphics Design',
    imageUrl: 'https://avatars.githubusercontent.com/u/56201652?v=4',
    socialLinks: {
      website: '#',
      github: 'https://github.com/Arpit2401',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Binit',
    designation: 'Frontend Dev',
    imageUrl: 'https://avatars.githubusercontent.com/u/128616465?v=4',
    socialLinks: {
      website: '#',
      github: 'https://github.com/Binit06',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sarthak',
    designation: 'Frontend Dev',
    imageUrl: 'https://avatars.githubusercontent.com/u/102925712?v=4',
    socialLinks: {
      website: '#',
      github: 'https://github.com/Stk-79',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const OurTeam = () => {
  return (
    <div className="container max-w-screen-xl mx-auto py-12">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Meet our <span className="text-primary">Team</span> at TestVisionAI
      </h2>
      <div className="flex flex-wrap justify-around">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-72 h-96 rounded-2xl overflow-hidden shadow-xl bg-white m-4"
          >
            <div className="flex justify-center mt-6">
              <img
                className="w-40 h-40 rounded-full border-4 border-primary"
                src={member.imageUrl}
                alt={member.name}
              />
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-3xl mb-2">{member.name}</div>
              <p className="text-gray-500 font-medium text-2xl">
                {member.designation}
              </p>
            </div>
            <div className="flex justify-center pt-5 gap-2">
              <a
                href={member.socialLinks.website}
                className="text-primary mx-2"
              >
                <img
                  src="./src/assets/socials/web.png"
                  className="w-8 h-8 filter-teal"
                ></img>
              </a>
              <a href={member.socialLinks.github} className="text-primary mx-2">
                <img
                  src="./src/assets/socials/github.png"
                  className="w-8 h-8 filter-teal"
                ></img>
              </a>
              <a
                href={member.socialLinks.linkedin}
                className="text-primary mx-2"
              >
                <img
                  src="./src/assets/socials/linkedin.png"
                  className="w-8 h-8 filter-teal"
                ></img>
              </a>
              <a
                href={member.socialLinks.instagram}
                className="text-primary mx-2"
              >
                <img
                  src="./src/assets/socials/instagram.png"
                  className="w-8 h-8 filter-teal"
                ></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
