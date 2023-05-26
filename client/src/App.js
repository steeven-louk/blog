import { Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import SinglePost from "./pages/singlePost/singlePost";
import Register from "./pages/authentification/register";
import Login from "./pages/authentification/Login";
import Write from "./pages/write/Write";
import Profile from "./pages/profil/Profile";
import Favories from "./pages/favories/favories";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./admin/Dashboard";

import DashboardLayout from "./layouts/DashboardLayouts";
import UserLayout from "./layouts/UserLayout";
import { UserScreen } from "./admin/userScreen";
import { CategoryScreen } from "./admin/CategoryScreen";
import EditAdmin from "./admin/EditAdmin";


function App() {

  let token =localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'));

  return (

    <div className="App">
      <ToastContainer />


      <Routes>
        <Route path="/admin/" element={<DashboardLayout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="users" element={<UserScreen/>} />
          <Route path="category" element={<CategoryScreen/>} />
          <Route path="edit" element={<EditAdmin/>} />
        </Route>
        
        <Route path="/" exact element={<UserLayout/>}>
        
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="*" element={<HomePage />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="singlePost/:id" element={<SinglePost token={token}/>} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />

        {token? 
          <>
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="Write" element={<Write token={token} />} />
            <Route exact path=":id/favoris" element={<Favories />} />
          </>
          :
          <>
            <Route exact path="register" element={<Register />} />
            <Route exact path="login" element={<Login />} />
          </>
        }
        </Route>
      </Routes>

    </div>
  );
}

export default App;
