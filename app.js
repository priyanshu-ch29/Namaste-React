// create a element in react using React.createElement

// const heading = React.createElement("h1",
// {id : "heading"},
// "Hello World from React");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// create a root inside a react

const root = ReactDOM.createRoot(document.getElementById("root"));

// render the heading in web browser in react using root.render

root.render(parent);
