import React from "react";
import {
  techIcons,
  categoryColors,
  type TechName,
  type CategoryType,
} from "@/lib/icons";
import { Code } from "lucide-react";

interface SkillData {
  name: string;
  level: number;
  category: string;
}

interface TechIconProps {
  skill: SkillData;
}

export const TechIcon: React.FC<TechIconProps> = ({ skill }) => {
  const IconComponent = techIcons[skill.name as TechName];
  const categoryColor =
    categoryColors[skill.category as CategoryType] || "text-text-primary";

  return (
    <div className="flex flex-col items-center justify-center p-3 mx-2 min-w-[80px] group cursor-pointer">
      {/* Technology Icon Container */}
      <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-xl glass-card group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 hover:bg-glass-bg/50">
        {IconComponent ? (
          <IconComponent
            className={`w-8 h-8 transition-colors duration-300 ${categoryColor} group-hover:scale-110`}
          />
        ) : (
          <Code
            className={`w-8 h-8 transition-colors duration-300 ${categoryColor} group-hover:scale-110`}
          />
        )}
      </div>

      {/* Technology Name */}
      <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center font-medium leading-tight">
        {skill.name}
      </span>
    </div>
  );
};

export default TechIcon;
