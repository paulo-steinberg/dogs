import styles from "./photoComments.module.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
import { PhotoCommentsForm } from "../PhotoCommentsForm/photoCommentsForm";

export const PhotoComments = (props) => {
  const { isLogged } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}:</b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {isLogged && (
        <PhotoCommentsForm id={props.id} setComments={setComments} />
      )}
    </>
  );
};
