import { FeedPhotosItem } from "../FeedPhotosItem/feedPhotosItem";
import { GET_PHOTOS } from "../../services/api";
import { useEffect, useState } from "react";
import { Error } from "../../Helpers/Error";
import { Loading } from "../../Helpers/Loading";
import styles from "./feedPhotos.module.css";

export const FeedPhotos = ({ setModalPhoto }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const { data, status } = await GET_PHOTOS({
          page: 1,
          total: 6,
          user: 0,
        });
        if (status !== 200) console.error("Error in GET_PHOTOS");
        setData(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <ul className={`${styles.feed} animateLeft`}>
      <Error error={error} />
      {data &&
        data.map((photo) => {
          return (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
    </ul>
  );
};
