/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import { LoadingCard } from "../../components/Loading";


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllBlog = async () => {
    try {
      setLoading(true);
      const post = await axios.get("https://mern-blogapi.vercel.app/api/post");
      if (post.status === 200) {
        let { data } = post;
        setPosts(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("err", error);
      throw new Error(error);
    }
  };
 
  const getAllCategories = async () => {
    try {
      setLoading(true);
      const getCat = await axios.get("https://mern-blogapi.vercel.app/api/categories");
      if (getCat.status === 200) {
        let { data } = getCat;
        setCategory(data.data);

        setLoading(false);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);
  useEffect(() => {
    getAllCategories();
  }, []);


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
                {loading ? (
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
