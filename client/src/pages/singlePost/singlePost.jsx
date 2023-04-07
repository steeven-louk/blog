import React from "react";
import Card from "../../components/card/Card";

const SinglePost = () => {
  return (
    <div className="p-5">
      <h1 className="text-dark">
        There is no one who loves pain itself, who seeks after it and wants to
        have it, because it is pain
      </h1>
      <div className="user_group text-dark my-4 d-flex justify-content-between align-items-center">
        <div className="user d-inline-flex align-items-center">
          <img src="" alt="user" />
          <span className="fw-bold text-capitalize ms-2">el ishi</span>
        </div>
        <span>25/02/2023</span>
      </div>

      <div className="post-img">
        <img
          src="./assets/singlePost.png"
          alt="post-img"
          style={{ height: "25em", width: "100%", objectFit: "cover" }}
          className="img-fluid rounded w-full object-fit-cover"
        />
      </div>

      <div className="post-desc mt-5">
        <p className="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra
          arcu imperdiet lectus pharetra, at scelerisque augue ultrices. Ut in
          condimentum turpis. Nunc pulvinar quis nisi sed fermentum. Nulla
          facilisi. Aenean at augue quis elit rutrum sollicitudin. Quisque
          congue et magna vel condimentum. In quis sem ut magna dictum feugiat
          eu vel ex. Mauris elementum diam eu tempus aliquet. Mauris tempor, ex
          eget auctor molestie, orci justo commodo orci, sit amet placerat
          tellus massa sed augue. Donec non fermentum leo, at tincidunt tellus.{" "}
          <br /> <br />
          Maecenas ac pharetra justo. Sed commodo, ligula vel aliquam varius,
          enim metus eleifend felis, id interdum purus nunc non lectus. Sed
          blandit porttitor nibh fermentum pretium. Phasellus sagittis nisl
          vitae lectus feugiat, aliquam facilisis eros semper. Sed pharetra
          iaculis risus, sed faucibus dolor vulputate in. Duis sed ipsum
          interdum, facilisis odio vel, pharetra odio. Suspendisse fermentum sed
          augue cursus porta. Aenean nec neque mauris. Pellentesque malesuada
          dictum fermentum. Suspendisse aliquet ante enim, at varius arcu
          aliquet id. Etiam a ex id augue fringilla interdum eget vestibulum
          lectus. Sed in arcu quis tellus venenatis maximus. Integer accumsan
          est enim, id elementum metus aliquam eu. Nam in sapien porta, dictum
          arcu nec, dapibus urna. Quisque et metus varius, rhoncus nunc a,{" "}
          <br /> <br />
          vestibulum lacus. Aliquam eget malesuada quam. Nulla eget sapien
          convallis, tristique nulla et, imperdiet lorem. Quisque sed lacus
          tellus. Proin tincidunt sapien euismod libero aliquet, nec vulputate
          turpis condimentum. Sed pellentesque nibh ac fermentum venenatis.
          Aenean a magna aliquam, pulvinar elit consectetur, consectetur eros.
          Morbi laoreet eu enim eu ultricies. Cras rutrum sit amet tortor sed
          mollis. Donec non enim efficitur, porta mauris vitae, ultrices velit.
          Quisque et lacus mollis nibh sollicitudin tristique ut vitae nunc.
          Vestibulum eu est arcu. Phasellus quis neque orci. Cras vel consequat
          tellus, sit amet congue neque.
        </p>
      </div>

      <div className="h2 text-center text-capitalize my-5">
        Read Related Blogs
      </div>

      <div className="card-container d-flex wrap gap-3 w-full">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SinglePost;
