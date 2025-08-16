
        import React from "react";
        import ReactDOM from "react-dom/client"
        const parent =  React.createElement("div",{id:"parent",},
                        React.createElement("div",{id:"child"},
                        [React.createElement("h1",{key:"1"},"I am h1"),React.createElement("h2",{key:"2"},"I am h2"),React.createElement("h3",{key:"3"},"I am Sagnik")]
                        ))
        const root = ReactDOM.createRoot(document.getElementById("root"));        

        root.render(parent);
        