import React from "react";
import "./dataNull.css";

const DataNull = ({ data }) => {
  const imgUrl =
    "https://images.velog.io/images/jkzombie/post/347c5994-f870-490a-adbd-9e08120aa37e/1200px-React-icon.svg.png";
  return (
    <div className="dataNull">
      <div>
        <img src={imgUrl} className="reactImg" alt="react" />
        <p>{data}의 값이 비어있습니다. 값을 입력해 주세요</p>
      </div>
    </div>
  );
};

export default DataNull;
