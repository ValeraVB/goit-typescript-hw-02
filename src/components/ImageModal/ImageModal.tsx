import Modal from "react-modal";
import "./ImageModal.css";

interface Image {
  urls: { regular: string };
  alt_description: string;
  user: { name: string };
  description: string | null;
  likes: number;
  views: number;
  downloads: number;
}

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className="modal-info">
        <p>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p>
          <strong>Description:</strong> {image.description || "No description"}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
        <p>
          <strong>Views:</strong> {image.views}
        </p>
        <p>
          <strong>Downloads:</strong> {image.downloads}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
