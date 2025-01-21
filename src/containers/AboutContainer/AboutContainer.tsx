import { useEffect, useState } from "react";
import AboutText from "./About.md";
import ReactMarkdown from "react-markdown";

export const AboutContainer = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(AboutText)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};