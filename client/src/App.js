// import './App.css';

import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import SinglePost from "./pages/singlePost/singlePost";
import Register from "./pages/authentification/register";
import Login from "./pages/authentification/Login";
import { UserContextProvider } from "./services/userProvider";
import { Redirect } from "./services/redirection";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">

      <UserContextProvider>
      <Header/>

        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/singlePost/:id" element={<SinglePost/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/register" element={<Redirect> <Register/></Redirect>}/>
        <Route exact path="/login" element={<Redirect><Login/></Redirect>}/>
        <Route exact path="/write" element={<Write/>}/>

      </Routes>
      </UserContextProvider>
      
      
      <Footer/>

    </div>
  );
}

export default App;
