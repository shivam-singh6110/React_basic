// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
export default function App() {
  return (
    <>
      <Navbar title="Portfolio" aboutText="Here is about text" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
   </>
     );
}

// export default App;
