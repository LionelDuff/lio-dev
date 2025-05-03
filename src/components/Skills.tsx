import React from "react";

import { skills } from "@/data/skillsData";
import SkillCard from "./SkillCard";

import { Divider, ConfigProvider } from "antd";

export default function Skills() {
  const data = skills;

  return (
    <div className="flex flex-col w-full xl:mt-10">
      <div className="w-3/4 mt-4 mb-10">
        <ConfigProvider
          theme={{
            token: {
              colorText: "--ant-primary-color",
              fontSize: 30,
              lineWidth: 7,
              fontFamily: "Rubik",
            },
          }}
        >
          <Divider orientation="left" style={{ borderColor: "#cc5500" }}>
            Compétences
          </Divider>
        </ConfigProvider>
      </div>
      <div className="flex flex-col gap-4 w-full p-4">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-full items-center justify-center"
            >
              <label className="w-full">{item.type}</label>
              <div className="flex flex-wrap gap-4 pt-6 pb-4 w-full items-center lg:justify-start justify-center">
                {item.list.map((skill, j) => {
                  return <SkillCard key={j} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
