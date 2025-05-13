
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  colorClass?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, title, excerpt, date, category, imageUrl, colorClass = "bg-white" 
}) => {
  return (
    <Link to={`/blog/${id}`} className="block h-full">
      <article className={`neo-card-colored ${colorClass} h-full`}>
        <div className="relative overflow-hidden border-b-4 border-black">
          <div className="w-full pb-[56%] relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 bg-black text-white px-3 py-1">
            {category}
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-sm mb-2 font-mono">{date}</p>
          <h3 className="text-xl font-bold mb-2 font-space-grotesk">{title}</h3>
          <p className="mb-4">{excerpt}</p>
          
          <div className="font-bold inline-flex items-center underline">
            Read Article
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
