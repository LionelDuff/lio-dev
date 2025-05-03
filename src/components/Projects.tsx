import React from "react";

import { Divider, ConfigProvider } from "antd";

import { projects } from "@/data/projectsData";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const data = projects;

  const listProjects = data.map((item, i) => {
    return <ProjectCard key={i} item={item} />;
  });

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
            Projets
          </Divider>
        </ConfigProvider>
      </div>
      <div className="flex-auto w-full">{listProjects}</div>
    </div>
  );
}
