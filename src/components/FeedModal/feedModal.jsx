import styles from "./feedModal.module.css";
import { useEffect, useState } from "react";
import { GET_PHOTO } from "../../services/api";
import { Error } from "../../Helpers/Error";
import { Loading } from "../../Helpers/Loading";
import { PhotoContent } from "../PhotoContent/photoContent";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const response = await GET_PHOTO(photo.id);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Error error={error} />
      <Loading isLoading={isLoading} />
      {data && <PhotoContent data={data} />}
    </div>
  );
};
