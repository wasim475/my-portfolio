import React from 'react';

const projects = [
  {
    name: 'Forest Canvas',
    description: 'Forest Canvas is a platform where users can create accounts, buy and sell their crafts. The website is fully responsive and offers a seamless user experience.',
    features: [
      'User authentication and account management',
      'Marketplace for buying and selling crafts',
      'Responsive design for all devices',
    ],
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Express.js'],
    liveLink: 'https://grand-jelly-06773e.netlify.app/',
    clientRepo: 'https://github.com/wasim475/forest-canvas',
    serverRepo: 'https://github.com/username/forest-canvas-server',
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
    serverRepo: 'https://github.com/username/taste-trove-server',
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
    serverRepo: 'https://github.com/username/visitbdland-server',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
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
