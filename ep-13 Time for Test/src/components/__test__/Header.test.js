import Header from "../Header"
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../Redux/store"

it("should display login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    const login=screen.getByRole("button",{name:"Login"});
    expect(login).toBeInTheDocument();
});

it("should display Online on screen",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const status=screen.getByText("Online");
    expect(status).toBeInTheDocument();
});

it("should change the button text to logout on click",()=>{
        render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    
    const login=screen.getByRole("button",{name:"Login"});
    fireEvent.click(login);
    const logout=screen.getByRole("button",{name:"Logout"});
    expect(logout).toBeInTheDocument();
})