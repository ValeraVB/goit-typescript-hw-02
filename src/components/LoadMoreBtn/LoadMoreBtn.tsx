import "./LoadMoreBtn.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
