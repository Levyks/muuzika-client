import { Elm } from "./Main.elm";

const node = document.getElementById("app");

if (!node) {
  throw new Error("Could not find #app");
}

const app = Elm.Main.init({ node });
