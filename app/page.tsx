"use client"

import { navigation } from ".contentlayer/generated";
import { useEffect } from "react";
// import "github-markdown-css/github-markdown-light.css"

export default function Home() {
  
  const handleAddLinkAtt = () => {
    const parentEle = document.getElementById("markdown-navigation");
    const aTags: any = parentEle?.getElementsByTagName("a");
    for (let i = 0; i < aTags?.length; i++) {
      aTags[i].setAttribute("target", "_blank");
    }
  };

  useEffect(() => {
    handleAddLinkAtt();
  }, []);

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto p-2">
      <main
        // className="markdown-body max-w-none"
        id="markdown-navigation"
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: navigation.body.html }}
      ></main>
    </div>
  );
}
