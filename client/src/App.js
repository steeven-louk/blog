// import './App.css';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Heros from "./components/heros/Heros";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">


      <Header/>
      <Heros/>
      <HomePage/>
      <Footer/>

    </div>
  );
}

export default App;
