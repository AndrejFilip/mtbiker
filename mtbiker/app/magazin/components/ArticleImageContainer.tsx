import React from "react";

export const ArticleImageContainer = ({
  images,
}: {
  images: { src: string }[];
}) => {
  if (images.length === 1) {
    return (
      <div>
        <img {...{ src: images[0].src, alt: "paragraph" }} />
      </div>
    );
  } else {
    return (
      <div {...{ className: "grid grid-cols-2 gap-3" }}>
        {images.map((image, index) => (
          <img {...{ key: index, src: image.src, alt: "paragraph" }} />
        ))}
      </div>
    );
  }
};
