// import './App.css';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">


      <Header/>
      {/* <HomePage/> */}
      {/* <Blogs/> */}
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
