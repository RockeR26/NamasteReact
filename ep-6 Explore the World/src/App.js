import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <>
    <Header/>
    <Body/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)