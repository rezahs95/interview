import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card-container">
      <img
        className="card-image"
        alt="Oops!"
        src="https://cdn.vox-cdn.com/thumbor/zGml9fN-j36tDjdN8MBheYbSpxw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19260681/rev_1_JOK_14104r_High_Res_JPEG.jpeg"
      />
      <div className="card-texts">
        <div className="card-text1">Trending</div>
        <div className="card-text2">JOKER</div>
        <div className="card-text3">24 Stories</div>
      </div>
    </div>
  );
}

export default Card;
