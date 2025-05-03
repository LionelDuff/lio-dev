"use client";
import React from "react";

import Link from "next/link";

import { FloatButton, ConfigProvider } from "antd";
import { LinkedinFilled, GithubFilled, SendOutlined } from "@ant-design/icons";

export default function ButtonFloat() {
  return (
    <div className="bottom-4 right-4">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#cc5500",
            fontSizeIcon: 16,
            motionDurationSlow: "0.3s",
          },
        }}
      >
        <FloatButton.Group
          trigger="click"
          type="primary"
          placement="right"
          icon={<SendOutlined className="rotate-320 w-6" />}
          style={{ left: 20, right: "auto" }}
        >
          <FloatButton
            icon={
              <Link
                href={"https://www.linkedin.com/in/lionel-dufour-00b85189"}
                target="_blank"
              >
                <LinkedinFilled />
              </Link>
            }
          />
          <FloatButton
            icon={
              <Link href={"https://github.com/LionelDuff"} target="_blank">
                <GithubFilled />
              </Link>
            }
          />
        </FloatButton.Group>
      </ConfigProvider>
    </div>
  );
}
