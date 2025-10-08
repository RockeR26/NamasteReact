import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact Test cases",()=>{
    it("should render the contact heading",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("should render the contact button",()=>{
        render(<Contact/>);
        const button=screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should render the contact input",()=>{
        render(<Contact/>);
        const input=screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });

    it("should render all the input elements", ()=>{
        render(<Contact/>);
        const inputs=screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    });

});