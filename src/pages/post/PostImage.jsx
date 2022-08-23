import React, { useCallback, useState } from "react";

function PostImage({ images }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  });
  if (images.length === 1) {
  }
  return (
    <>
      {/* 이미지를 클릭하면 확대해서 보여주는 걸로 */}
      {/* 시각장애인들을 위해 role과 alt 추가  */}
      <img role="presentation" src={images[0].src} alt={images[0].src}></img>
    </>
  );
}

export default PostImage;
