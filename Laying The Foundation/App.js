import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 id="heading">Hello World!</h1>

//React Component
//React Component Composition 
const Heading = () => {
        /*
         *We can component (Title) in 3 follwing ways 
         *We can call react element inside element 
         *...react component inside element.
         *...and obviously element inside component.
        */

        return (
                <div className="container">
                        <Title />
                        <Title></Title>
                        {Title()}
                        <h1 className="heading"> Hello World! Functional compo </h1>
                        {heading2}
                </div>
        )
}

const Title = () => <h1 className="title">This is my title</h1>
const spanning = <span>I am span inside h2</span>
const heading2 = <h2>I am h2 - {spanning}</h2>


ReactDOM.createRoot(document.getElementById("root")).render(<Heading />);