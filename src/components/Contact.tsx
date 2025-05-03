import Link from "next/link";

import "animate.css";

import {
  LinkedinFilled,
  GithubFilled,
  MailFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Divider, ConfigProvider } from "antd";

export default function Contact() {
  return (
    <div className="flex flex-col w-full xl:mt-10 mb-5">
      <div className="w-full mt-4 mb-10 opacity-50">
        <ConfigProvider
          theme={{
            token: {
              lineWidth: 1,
            },
          }}
        >
          <Divider style={{ borderColor: "#cc5500" }}></Divider>
        </ConfigProvider>
      </div>
      <div className="flex xl:flex-row flex-col items-center justify-center w-full gap-4">
        <div className="xl:w-1/2 w-full font-mono">
          <p className="xl:text-lg text-sm">
            <LikeFilled
              style={{ color: "#cc5500", fontSize: 24 }}
              className="animate__animated animate__bounce animate__infinite animate__slow"
            />{" "}
            Envie d’en savoir plus ou de collaborer ? N’hésitez pas à me
            contacter !
          </p>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-center xl:w-1/2 w-full gap-4 font-sans">
          <Link
            href="mailto:contact@lio-dev.fr"
            target="_blank"
            className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
          >
            <MailFilled /> Me contacter
          </Link>
          <Link
            href="https://www.linkedin.com/in/lionel-dufour-00b85189"
            target="_blank"
            className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
          >
            <LinkedinFilled /> LinkedIn
          </Link>
          <Link
            href="https://github.com/LionelDuff"
            target="_blank"
            className="font-bold bg-(--color-primary) px-4 py-2 rounded-lg hover:bg-(--color-primary-dark) transition duration-300 cursor-pointer"
          >
            <GithubFilled /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
