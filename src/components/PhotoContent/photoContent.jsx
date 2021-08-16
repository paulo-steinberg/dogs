import styles from "./photoContent.module.css";
import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments/photoComments";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { PhotoDelete } from "../PhotoDelete/photoDelete";

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}

          <span className={styles.views}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};
