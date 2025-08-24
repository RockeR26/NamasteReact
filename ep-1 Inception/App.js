        // Task1
        // const heading = React.createElement("h1",{},"Hello World from React JS h1")
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // const heading2=React.createElement("h2",{id:"heading"},"Hello World from React JS h2")
        

        //Task 2 
        const parent =  React.createElement("div",{id:"parent",},
                        React.createElement("div",{id:"child"},
                        [React.createElement("h1",{},"I am h1"),React.createElement("h2",{},"I am h2")]
                        ))
        const root = ReactDOM.createRoot(document.getElementById("root"));        

        console.log(parent);//object
        root.render(parent);
        //ReactDOM.createRoot(document.getElementById("root")).render(React.createElement("h1",{},"Hello! Just trying"));
