import { render,screen } from "@testing-library/react"
import ResCardInfo from "../ResCardInfo"
import MOCK_DATA from "../mocks/ResCardInfoMock.json"
import vegResCard from "../vegRescard";
import "@testing-library/jest-dom"

it("should display restraunt card info",()=>{

    render(<ResCardInfo resInfo={MOCK_DATA}/>);
    const name= screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

it("should display veg label on card (HOC)",()=>{
    const EnhancedComponent=vegResCard(ResCardInfo);
    render(<EnhancedComponent resInfo={MOCK_DATA}/>);
    const veg=screen.getByText(/Veg/);
    expect(veg).toBeInTheDocument();
});