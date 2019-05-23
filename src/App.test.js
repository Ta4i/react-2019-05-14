import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { restaurants } from "./fixtures";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App restaurants={restaurants} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
