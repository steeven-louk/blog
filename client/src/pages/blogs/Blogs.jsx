import React from "react";
import Card from "../../components/card/Card";

const Blogs = () => {
  return (
    <div className="blogs pb-4">
      <div className="px-2">
        <h3 className="text-capitalize text-center fw-bold mt-3">categories</h3>
        <div className="category-group d-flex flex-wrap align-items-center gap-4 justify-content-center mb-5">
          <span>categorie 1</span>
          <span>categorie 2</span>
          <span>categorie 3</span>
          <span>categorie 4</span>
          <span>categorie 5</span>
        </div>

        <div className="card-container d-flex gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
