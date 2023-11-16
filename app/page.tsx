"use client";

import { imageTool, editOnline, mediaTool } from ".contentlayer/generated";
import { useEffect, useState } from "react";
// import "github-markdown-css/github-markdown-light.css"

const Tabs = [
  {
    title: "图片",
    key: "image",
  },
  {
    title: "视频音频",
    key: "media",
  },
  {
    title: "在线编辑器",
    key: "onlineEdit",
  },
];

export default function Home() {
  const [tabKey, setTabKey] = useState<string>(Tabs[0].key);

  const handleAddLinkAtt = () => {
    const parentEle = document.getElementById("markdown-main");
    const aTags: any = parentEle?.getElementsByTagName("a");
    for (let i = 0; i < aTags?.length; i++) {
      aTags[i].setAttribute("target", "_blank");
    }
  };

  const handlerRenderMain = (tab: string) => {
    switch (tab) {
      case "image":
        return (
          <main
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: imageTool.body.html }}
          />
        );
      case "media":
        return (
          <main
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: mediaTool.body.html }}
          />
        );
      case "onlineEdit":
        return (
          <main
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: editOnline.body.html }}
          />
        );
      default:
    }
  };

  useEffect(() => {
    handleAddLinkAtt();
  }, []);

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto p-2">
      <div className="py-2 text-center">
        {Tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setTabKey(tab.key)}
            className={`select-none inline-block cursor-pointer px-3 py-2 text-[#6874A3] ${
              tabKey === tab.key ? "text-[#0D2464] font-bold" : ""
            }`}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div id="markdown-main">{handlerRenderMain(tabKey)}</div>
    </div>
  );
}
