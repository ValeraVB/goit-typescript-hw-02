import { Image } from "../../types"; 
import "./ImageCard.css";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
  return (
    <div className="image-card-content">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
