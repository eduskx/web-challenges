import React from "react";
import "./styles.css";

export default function App() {
  return TestArticle();
}

function TestArticle() {
  return (
    <article>
      <h2 className="article__title">Das ist eine h2</h2>
      <label htmlFor="testID">
        Vorname: <input type="text" id="testID"></input>
      </label>
      <a href="https://www.google.de" className="article__link">
        Link zu Google
      </a>
    </article>
  );
}
