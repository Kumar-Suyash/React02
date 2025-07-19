
/**
 * <div id="Parent">
 *      <div id="child">
 *          <h1 id="child2">I'm an h1 tag</h1>
 *          <h2 id="child2">I'm an h1 tag</h2>
 *      </div>
 * 
 * </div>
 * 
*/
const Parent = React.createElement("div", {id: "Parent"} ,
    React.createElement("div",
         {id: "child"},
         [React.createElement("h1",{id: "child2"},"I'm an h1 tag"),
          React.createElement("h1",{id: "child2"},"I'm an h1 tag")
         ]
        
    )
);
console.log(Parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);