
import React from 'react';

interface SkillsListProps {
  title: string;
  skills: Array<{
    name: string;
    level?: number; // 1-5 where 5 is highest
    icon?: React.ReactNode;
  }>;
  colorClass?: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ title, skills, colorClass = "bg-pastel-blue" }) => {
  return (
    <div className={`${colorClass} border-4 border-black p-6 shadow-neo`}>
      <h3 className="text-xl font-bold mb-4 font-space-grotesk">
        {title}
      </h3>
      
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {skill.icon && <span>{skill.icon}</span>}
              <span>{skill.name}</span>
            </div>
            
            {skill.level && (
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 border border-black ${
                      i < skill.level! ? 'bg-black' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
