import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import { Image } from "../../types"; 
import "./ImageGallery.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
  isLoading: boolean;
}

const ImageGallery = ({
  images,
  onImageClick,
  isLoading,
}: ImageGalleryProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className="image-gallery">
        {images.map((image) => (
          <li key={image.id} className="image-card">
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
