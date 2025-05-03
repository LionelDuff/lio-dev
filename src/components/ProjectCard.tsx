"use client";
import "@ant-design/v5-patch-for-react-19";

import React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  LeftOutlined,
  RightOutlined,
  GithubFilled,
  QrcodeOutlined,
} from "@ant-design/icons";
import { Image as AntImage, Modal, ConfigProvider } from "antd";

interface Item {
  name: string;
  description: string;
  stacks: {
    name: string;
    icon: string;
  }[];
  pictures: string[];
  github: string;
  githubFrontend: string;
  githubBackend: string;
  url: string;
  qrcode: string;
}

export default function ProjectCard({ item }: { item: Item }) {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + item.pictures.length) % item.pictures.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.pictures.length);
  };

  return (
    <div className="flex flex-auto xl:flex-row flex-col-reverse justify-between items-center m-4 p-2 font-sans">
      <div className="xl:w-2/3 w-full m-6">
        <h2 className="pt-2 pb-2 text-xl font-mono">{item.name}</h2>
        <div className="flex flex-row flex-wrap gap-4 pt-2 pb-2">
          {item.github !== "" ? (
            <Link
              href={item.github}
              target="_blank"
              className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
            >
              <GithubFilled /> GitHub
            </Link>
          ) : (
            <>
              <Link
                href={item.githubFrontend}
                target="_blank"
                className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
              >
                <GithubFilled /> Front-end
              </Link>
              <Link
                href={item.githubBackend}
                target="_blank"
                className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
              >
                <GithubFilled /> Back-end
              </Link>
            </>
          )}
          {item.url !== "" ? (
            <Link
              href={item.url}
              target="_blank"
              className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
            >
              Visiter le site
            </Link>
          ) : (
            <button
              className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
              onClick={showModal}
            >
              <QrcodeOutlined /> QrCode
            </button>
          )}
          <ConfigProvider
            theme={{
              token: {
                colorText: "#cc5500",
                colorPrimary: "#cc5500",
                colorPrimaryHover: "rgba(204, 85, 0, 0.7)",
                colorBgBase: "#d5d6df",
                colorIconHover: "#cc5500",
              },
            }}
          >
            <Modal
              title="Scannez ce QR code avec l'application Expo Go pour tester la démo sur votre appareil mobile"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <div className="flex flex-col items-center justify-center">
                <AntImage
                  src={item.qrcode}
                  alt="QrCode"
                  preview={false}
                  width={200}
                  height={200}
                />
              </div>
            </Modal>
          </ConfigProvider>
        </div>
        <p className="pt-2 pb-2">{item.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-5 pt-2 pb-2">
          {item.stacks.map((stack, i) => {
            return (
              <Image
                key={i}
                src={stack.icon}
                alt={stack.name}
                width={40}
                height={40}
              />
            );
          })}
        </div>
      </div>
      <div className="relative">
        <div className="relative mx-12 w-[400] h-[300] group">
          <div className="flex items-center justify-center w-full h-full">
            <AntImage
              src={item.pictures[currentIndex]}
              alt={item.name}
              preview={{
                maskClassName: "rounded-xl",
              }}
              className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
            />
          </div>
        </div>
        <button
          className="absolute left-12 top-1/2 transform rounded-xl hover:bg-[rgba(204,85,0,0.7)] mx-1 -mt-[10px] -translate-y-1/2 bg-[rgba(0,0,0,0.8)] text-white p-2 group"
          onClick={prevSlide}
        >
          <LeftOutlined />
        </button>
        <button
          className="absolute right-12 top-1/2 transform rounded-xl hover:bg-[rgba(204,85,0,0.5)] mx-1 -mt-[10px] -translate-y-1/2 bg-[rgba(0,0,0,0.8)] text-white p-2 group"
          onClick={nextSlide}
        >
          <RightOutlined />
        </button>
        <div className="flex justify-center mt-4">
          {item.pictures.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-[#cc5500] rounded-xl"
                  : "dark:bg-gray-300 bg-[#292c38] rounded-xl"
              } transition-all duration-500 ease-in-out cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
