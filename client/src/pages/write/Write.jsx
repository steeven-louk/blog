import React, { useEffect, useState } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './style.scss'
import axios from 'axios';

const Write = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [categories, setCategories] = useState([]);

  const [selectCat, setSelectCat] = useState()

    const id = JSON.parse(localStorage.getItem("id"));
    

   const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
     const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

const handleSubmit = async (e)=>{
    e.preventDefault();

    const newPost ={
      user: id,
      title,
      content,
      category: selectCat
    };

    if(file){
      const data = new FormData();
      const filename = file.name;
      data.append('name', filename);
      data.append('img-post', file);
      newPost.picture = filename;


      try {
        await axios.post("http://localhost:8080/api/upload-post", data);
      } catch (error) {
        console.log('err', error.message);
      }
    }
    
    try {
    await axios.post("http://localhost:8080/api/post", newPost);

     setTitle('');
      setContent('');
      setFile(null);
      // console.log(post)
    } catch (error) {
      console.log('err', error);
    }
  }

  const getCategories = async() =>{
    try {
      const cat = await axios.get("http://localhost:8080/api/categories")
      if(cat.status === 200){
        let {data} = cat;
        setCategories(data.data);
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
   getCategories();
  }, []);


    return (
    <>
       <div className="write container my-3">
       <form onSubmit={handleSubmit} className='flex-column d-flex gap-3' encType="multipart/form-data">
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title' className='p-2' />
            <input type="file" name='img-post'  onChange={(e)=> setFile(e.target.files[0])} />
            <select name="categories" onChange={(e)=>setSelectCat(e.target.value)}  className='w-25 p-1 border border-2 fw-semibold rounded border-success text-capitalize'>
              {categories?.map((category)=>(

              <option key={category._id} value={category._id}>{category.name}</option>
              ))}
              <option value="react.js">react.js</option>
              <option value="javascript">javascript</option>
              <option value="other">javascript</option>
            </select>
            <ReactQuill theme="snow" className='content' formats={formats} modules={modules} value={content} onChange={(newValue)=> setContent(newValue)}/>
            <button className='btn btn-success'>Create post</button>
        </form>
       </div>
    </>
  )
}

export default Write