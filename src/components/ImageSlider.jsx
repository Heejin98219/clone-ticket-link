// ImageSlider.js
import { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, [images.length]);

  return (
    <div style={{ textAlign: "center", height: "450px" }}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{
          width: "1390px",
          height: "450px",
          transition: "0.3s ease",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ImageSlider;
