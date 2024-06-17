import { App } from "./components/App/app.js";
import { CardList } from "./components/CardList/cardList.js";
import { Bookmark } from "./components/Bookmark/bookmark.js";
import * as form from "./components/Form/form.js";
import { Header } from "./components/Header/header.js";
import * as card from "./components/Card/card.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
