
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  colorClass?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  tags, 
  colorClass = "bg-white",
  githubUrl,
  demoUrl
}) => {
  return (
    <div className={`neo-card-colored ${colorClass} h-full group`}>
      <Link to={`/projects/${id}`} className="block">
        <div className="relative overflow-hidden border-b-4 border-black">
          <div className="w-full pb-[66%] relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/projects/${id}`}>
          <h3 className="text-xl font-bold mb-2 font-space-grotesk">{title}</h3>
          <p className="mb-4">{description}</p>
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-black text-white text-xs px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-button bg-black text-white py-2 px-4 flex items-center gap-2"
              aria-label="View GitHub Repository"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-button bg-neon-pink text-white py-2 px-4 flex items-center gap-2"
              aria-label="View Live Demo"
            >
              <Eye size={16} />
              <span>View</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
