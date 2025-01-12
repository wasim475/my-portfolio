import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Criccast',
    description: 'Criccast is a dynamic platform that allows users to calculate and track match scores, including batter and bowler stats, extra runs, and more. Users can also share match links with others for a collaborative experience.',
    features: [
      'Score Tracking: Keep track of match scores in real-time.',
      'Batter and bowler Stats: Calculate individual runs and performance for each batter and bowler.',
      'Extra Runs Tracking: Record and calculate extras like wides, no-balls, and byes.',
    ],
    technologies: ['React','Tailwind CSS','Javascript', 'Firebase(google authentication only)','nodejs', 'mongodb', 'Express.js'],
    liveLink: 'https://criccast.netlify.app/',
    clientRepo: 'https://github.com/wasim475/cric-cast-client',
    serverRepo: 'https://github.com/wasim475/cric-cast-server',
  },
  {
    name: 'Taste Trove',
    description: 'Taste Trove is a food ordering platform where users can create accounts, buy food, set food items, and leave reviews. The website also includes a photo gallery and is fully responsive.',
    features: [
      'User authentication and account management',
      'Food ordering and review system',
      'Photo gallery for food items',
    ],
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Express.js'],
    liveLink: 'https://sunny-trifle-93dcec.netlify.app/',
    clientRepo: 'https://github.com/wasim475/taste-trove',
    serverRepo: 'https://github.com/wasim475/taste-trove-server',
  },
  {
    name: 'VisitBDLand',
    description: 'VisitBDLand is a platform where users can create accounts, request to become tourist guides, visit Bangladesh virtually, write reviews, give ratings, and access exciting tour packages. The website also features a photo gallery and allows users to update their profiles.',
    features: [
      'User authentication and profile management',
      'Tour guide request system',
      'Tour packages and virtual tours',
    ],
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    liveLink: 'https://clinquant-toffee-67a43e.netlify.app/',
    clientRepo: 'https://github.com/wasim475/visit-bd-land',
    serverRepo: 'https://github.com/wasim475/visit-bd-land-server',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-800 py-12">
        <div className='text-center mb-10'>
            <h2 className="md:text-5xl text-3xl uppercase text-white font-bold">Projects</h2>
            <p className='text-white mt-4'><Link className='text-orange-300' to="/">Home</Link> / Projects</p>
        </div>
      <div className="container mx-auto text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <h4 className="font-semibold">Core Features:</h4>
              <ul className="list-disc list-inside mb-4 text-left">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h4 className="font-semibold">Technologies Used:</h4>
              <p className="text-gray-700 mb-4">{project.technologies.join(', ')}</p>
              <div className="flex justify-center space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live</a>
                <a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Client Repo</a>
                <a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Server Repo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
