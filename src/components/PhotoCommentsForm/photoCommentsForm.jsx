import { useEffect, useState } from "react";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import { SEND_COMMENT } from "../../services/api";
import { Error } from "../../Helpers/Error";
import { Loading } from "../../Helpers/Loading";
import styles from "./photoCommentsForm.module.css";

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) setToken(token);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);
      const { data, status } = await SEND_COMMENT(id, { comment }, token);
      if (status !== 200) {
        setError(`Error with status: ${status}`);
        return;
      }
      setComment("");
      setComments((comments) => [...comments, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Error error={error} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          placeholder="Write your comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button className={styles.button}>
          <Send />
        </button>
      </form>
    </>
  );
};
