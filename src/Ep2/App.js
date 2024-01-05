/* <div id="parent">
    <div id="child1">
        <h1> I'm h1 tag</h1>
        <h2> I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1> I'm h1 tag</h1>
        <h2> I'm h2 tag</h2>
    </div>
</div> */

// const heading = React.createElement("h1", {id:"heading"}, "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log('test :>> ');
// console.log(root.render(heading));

import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm Prashanth"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
const root = createRoot(document.getElementById("root"));
root.render(parent);
console.log("test :>> ");
console.log(root.render(parent));
