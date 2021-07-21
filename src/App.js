import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from 'services/Api';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';

export default function App() {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    setIsLoading(true);

    Api.fetchImages({ searchQuery, page })
      .then(responseImages => {
        setImages(prevImages => [...prevImages, ...responseImages]);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchQuery, page]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  // const fetchImages = () => {
  //   setIsLoading(true);

  //   Api.fetchImages({ searchQuery: searchQuery, page })
  //     .then(responseImages => {
  //       setImages(prevImages => [...prevImages, ...responseImages]);
  //       setPage(prevPage => prevPage + 1);
  //     })
  //     .finally(() => setIsLoading(false));
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     fetchImages();
  //   }

  //   if (this.state.page !== 2 && prevState.page !== this.state.page) {

  //   }
  // }
  // useEffect(() => {fetchImages()})
  // const fetchImages = () => {
  //   toggleLoader();

  //   Api.fetchImages({ searchQuery, page })
  //     .then(hits => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...hits],
  //         page: prevState.page + 1,
  //       }));
  //     })
  //     .catch(error => this.setState({ error: true }))
  //     .finally(() => this.setState(this.toggleLoader()));
  // };

  const loadLargeImageURL = largeImageURL => {
    setSelectedImage(largeImageURL);
    toggleModal();
  };

  const handleSubmit = value => {
    setError(null);
    setImages([]);
    setPage(1);
    setSearchQuery(value);
  };

  // const toggleLoader = () => {
  //   setIsLoading(prevState => !prevState.isLoading);
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {error &&
        toast.error('there are no such pictures!', {
          position: 'top-right',
          autoClose: 3000,
        })}
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onSelect={loadLargeImageURL} />
      {images.length > 11 && <Button onClick={onLoadMore} />}
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={selectedImage} />
      )}
      {<ToastContainer position="top-right" autoClose={3000} />}
    </>
  );
}
