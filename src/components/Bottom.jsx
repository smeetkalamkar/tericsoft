import React from "react";
import { useSelector } from "react-redux";
import "./Bottom.css";
const Bottom = () => {

    const cat = useSelector((store) => store.category);
    console.log(cat)

    

  return (
    <div className="bottom">
      <div className="bottom__header">
        <a href="">BMX</a>
        <a href="">Mountain</a>
        <a href="">Track</a>
        <a href="">Road</a>
      </div>
      <div className="bottom__border"></div>
      <h2>Highlights</h2>

      <div className="bottom__cards">
        <div className="card">
          <img src="https://media.istockphoto.com/id/108225261/photo/bmx-bike-stunt-at-skateboard-park.jpg?s=612x612&w=0&k=20&c=SMo0Y4Gy2w4su4cCEydKNjAVJOXGZstXBNkXs7KEOMo=" />
        </div>

        <div className="card">
          <img src="https://media.istockphoto.com/id/108225261/photo/bmx-bike-stunt-at-skateboard-park.jpg?s=612x612&w=0&k=20&c=SMo0Y4Gy2w4su4cCEydKNjAVJOXGZstXBNkXs7KEOMo=" />
        </div>

        <div className="card">
          <img src="https://media.istockphoto.com/id/108225261/photo/bmx-bike-stunt-at-skateboard-park.jpg?s=612x612&w=0&k=20&c=SMo0Y4Gy2w4su4cCEydKNjAVJOXGZstXBNkXs7KEOMo=" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
