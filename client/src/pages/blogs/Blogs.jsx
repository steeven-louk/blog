/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import { LoadingCard } from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loadingSlice";


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const {isLoading} = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBlog = async () => {
      try {
        dispatch(showLoading)
        const post = await axios.get("https://mern-blogapi.vercel.app/api/post");
        if (post.status === 200) {
          let { data } = post;
          setPosts(data.data);
          dispatch(hideLoading)
        }
      } catch (error) {
        console.log("err", error);
        throw new Error(error);
      }
    };
    getAllBlog();
  }, [dispatch]);
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        dispatch(showLoading)
  
        const getCat = await axios.get("https://mern-blogapi.vercel.app/api/categories");
        if (getCat.status === 200) {
          let { data } = getCat;
          setCategory(data.data);
  
          dispatch(hideLoading)
  
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getAllCategories();
  }, [dispatch]);


  return (
    <div className="blogs pb-4">
      <div className="px-2">
        <div className=" d-flex  gap-4 justify-content-end my-4">
          <select
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="text-capitalize fw-semibold p-1 rounded"
          >
            <option value="">all</option>
            {category?.map((cat) => (
              <option key={cat?._id} value={cat?._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="card-container d-flex gap-3">
          {posts
            ?.filter((data) => {
              if (selectCategory === "all") {
                return data;
              } else if (data.category?._id.includes(selectCategory)) {
                return data;
              }
            })
            .map((items, index) => (
              <>
                {isLoading ? (
                  <LoadingCard key={index} />
                ) : (
                  <Card key={items?._id} items={items} />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
