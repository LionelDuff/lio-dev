import React from "react";
import Image from "next/image";

import { Tooltip } from "antd";

interface Skill {
  icon: string;
  name: string;
}

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Tooltip title={skill.name} placement="top" color="#cc5500">
      <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-[#cc5500] hover:shadow-lg transition-shadow duration-300 cursor-pointer dark:bg-[#d5d6df]">
        <Image src={skill.icon} alt={skill.name} width={60} height={60} />
      </div>
    </Tooltip>
  );
}
