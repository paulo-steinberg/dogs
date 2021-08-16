import { FeedModal } from "../FeedModal/feedModal";
import { FeedPhotos } from "../FeedPhotos/feedPhotos";
import { useState } from "react";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </>
  );
};
