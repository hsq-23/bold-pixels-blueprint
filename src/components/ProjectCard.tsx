
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  colorClass?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl, tags, colorClass = "bg-white" }) => {
  return (
    <Link to={`/projects/${id}`} className="block h-full">
      <div className={`neo-card-colored ${colorClass} h-full group`}>
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
        
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 font-space-grotesk">{title}</h3>
          <p className="mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-black text-white text-xs px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
