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
import Profile from "./pages/profil/Profile";
import Favories from "./pages/favories/favories";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
  <ToastContainer/>
      <UserContextProvider>
      <Header/>

        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/singlePost/:id" element={<SinglePost/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/write" element={<Write/>}/>
        <Route exact path="/:id/favoris" element={<Favories/>}/>

      </Routes>
      </UserContextProvider>
      
      
      <Footer/>

    </div>
  );
}

export default App;
