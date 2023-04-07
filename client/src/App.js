// import './App.css';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Blogs from "./pages/blogs/Blogs";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">


      <Header/>
      {/* <HomePage/> */}
      <Blogs/>
      <Footer/>

    </div>
  );
}

export default App;
