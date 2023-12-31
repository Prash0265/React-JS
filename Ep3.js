import React from "react";

import { createRoot } from 'react-dom/client';

// React Element

const parent = React.createElement(
    "h1",
    { id: "heading" },
    "Test");
const root = createRoot(document.getElementById("root"));
const jsxheading = <h1 id="heading">Test1</h1>;
root.render(jsxheading);

console.log('parent :>> ', parent);
console.log('jsxheading :>> ', jsxheading);