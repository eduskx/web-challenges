import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Überschrift</h1>
      <p>Paragraph, Hier ne expression: 3+4 = {3 + 4}</p>
    </article>
  );
}
