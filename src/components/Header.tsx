"use client";
import React from "react";

import Link from "next/link";

import { MenuOutlined } from "@ant-design/icons";

import { Popover } from "antd";

export default function Header() {
  const content = (
    <div className="popover-theme flex flex-col items-center justify-center gap-4 font-sans">
      <Link href={"#home"} className="text-xl link-theme cursor-pointer">
        Accueil
      </Link>
      <Link href={"#competences"} className="text-xl link-theme cursor-pointer">
        Compétences
      </Link>
      <Link href={"#projets"} className="text-xl link-theme cursor-pointer">
        Projets
      </Link>
      <Link href={"#contact"} className="text-xl link-theme cursor-pointer">
        Contact
      </Link>
    </div>
  );

  return (
    <div className="flex items-center justify-between w-9/10 border-b">
      <h1 className="xl:text-4xl text-2xl font-mono">
        <span className="text-(--color-primary)">[</span>LIO-DEV
        <span className="text-(--color-primary)">]</span>
      </h1>
      <nav className="xl:flex items-center justify-center hidden font-mono">
        <Link
          href={"#home"}
          className="text-xl hover:text-(--color-primary) cursor-pointer mr-6"
        >
          Accueil
        </Link>
        <Link
          href={"#competences"}
          className="text-xl hover:text-(--color-primary) cursor-pointer mr-6"
        >
          Compétences
        </Link>
        <Link
          href={"#projets"}
          className="text-xl hover:text-(--color-primary) cursor-pointer mr-6"
        >
          Projets
        </Link>
        <Link
          href={"#contact"}
          className="text-xl hover:text-(--color-primary) cursor-pointer mr-6"
        >
          Contact
        </Link>
      </nav>
      <div className="xl:hidden flex items-center font-mono">
        <Popover
          content={content}
          placement="bottomLeft"
          arrow={false}
          color={"var(--color-background)"}
        >
          <MenuOutlined style={{ fontSize: 30 }} />
        </Popover>
      </div>
    </div>
  );
}
