import { useEffect } from "react";
import data from "../data/data";

const ImagePreloader = () => {
  useEffect(() => {
    const ImagePreloader = (images) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    const imageSources = [
      ...data.destinations.map((destination) => destination.images.webp),
      ...data.crew.map((crew) => crew.images.webp),
      ...data.technology.map((tec) => tec.images.portrait),
    ];

    ImagePreloader(imageSources);
  }, []);

  return null;
};

export default ImagePreloader;
