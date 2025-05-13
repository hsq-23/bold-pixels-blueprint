
import React from 'react';

interface SkillsListProps {
  title: string;
  skills: Array<{
    name: string;
    level?: number; // keeping this in the interface for backward compatibility
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
          <li key={index} className="flex items-center gap-2">
            {skill.icon && <span>{skill.icon}</span>}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
