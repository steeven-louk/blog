// import './App.css';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import SinglePost from "./pages/singlePost/singlePost";

function App() {
  return (
    <div className="App">


      <Header/>
      {/* <HomePage/> */}
      {/* <Blogs/> */}
      {/* <Contact/> */}
      {/* <SinglePost/> */}
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
