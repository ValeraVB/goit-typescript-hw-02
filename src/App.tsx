import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import unsplashService from "./services/unsplashService";
import { Toaster } from "react-hot-toast";
import { Image } from "./App.types";
import "./App.css";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);

  const fetchImages = async (searchQuery: string, pageNumber: number) => {
    setLoading(pageNumber === 1);
    setLoadingMore(pageNumber > 1);
    try {
      const data = await unsplashService.fetchImages(searchQuery, pageNumber);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage(pageNumber);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    fetchImages(query, page + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && !images.length && (
        <div className="loader-container center-loader">
          <Loader />
        </div>
      )}
      <div className="gallery-container">
        <ImageGallery
          images={images}
          onImageClick={handleImageClick}
          isLoading={loading} // Додаємо пропс isLoading
        />
        {!loading && images.length > 0 && !loadingMore && (
          <div className="load-more-container">
            <LoadMoreBtn onClick={handleLoadMore} />
          </div>
        )}
      </div>
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      <Toaster />
    </div>
  );
};

export default App;
