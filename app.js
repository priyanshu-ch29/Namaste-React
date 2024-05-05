import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => is an object => render as a HTMLelement

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// JSX (transpiled before it reaches the JS) done by => PARCEL but not exactly by parcel but with the => BABEL

// JSX => React.createElement => object => HTMLElement (render)

// React Element

const jsxHeading = (
  <h1 className="heading" tabIndex={5}>
    Namaste React from JSX 🚀
  </h1>
);

// React Component

const Heading = () => {
  return <h1>Namaste React from JSX 🚀</h1>;
};

const HeadingComponent = () => (
  <div>
    <Heading /> // component composition 
    <h1>Welcome to Namaste React 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
