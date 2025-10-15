import Body from "../Body"
import {fireEvent, render,screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/ResListMock.json"
import { act } from "react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router"


//jest.mock("../../assets/useFetch");

global.fetch=jest.fn(()=>Promise.resolve({json:()=>Promise.resolve(MOCK_DATA)}));


describe("Body Component tests",()=>{

    // beforeAll(()=>{
    //     console.log("Before All")
    // })    
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })
    // afterAll(()=>{
    //     console.log("after All")
    // })
    // afterEach(()=>{
    //     console.log("after each")
    // })

    it("should display search bar in body",async ()=>{
    await act(async()=>{
     render(
     <BrowserRouter>
     <Body/>
     </BrowserRouter>
     )
    });
    const search=screen.getByTestId("searchInput");
    expect(search).toBeInTheDocument();
})

it("Should display search bar in body",async ()=>{
        await act(async()=>{
     render(
     <BrowserRouter>
     <Body/>
     </BrowserRouter>
     )
    });
     const cards=await screen.findAllByTestId("resCard");
     expect (cards.length).toBe(8);
})
it("should search the items with word pizza",async()=>{
            await act(async()=>{
     render(
     <BrowserRouter>
     <Body/>
     </BrowserRouter>
     )
})
    const search=screen.getByTestId("searchInput");
    fireEvent.change(search,{target:{value:"pizza"}});
    const cards=await screen.findAllByTestId("resCard");
     expect (cards.length).toBe(3);
})

it("should test the top 5 restuarant feature",async()=>{
    await act(async()=>{
        render(     
    <BrowserRouter>
     <Body/>
    </BrowserRouter>)
    })
    const btnTopFive=screen.getByRole("button",{name:"Top 5 Restuarants"});
    fireEvent.click(btnTopFive);
    expect((await screen.findAllByTestId("resCard")).length).toBe(5);
})

})




