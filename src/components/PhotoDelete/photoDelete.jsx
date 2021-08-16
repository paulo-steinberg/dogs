import styles from "./photoDelete.module.css";
import { useEffect, useState } from "react";
import { DELETE_PHOTO } from "../../services/api";
import { Loading } from "../../Helpers/Loading";

export const PhotoDelete = ({ id }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) setToken(token);
  }, []);

  async function handleClick() {
    const confirm = window.confirm(
      "Are you sure you would like to delete this photo?"
    );
    if (!confirm) return;
    setIsLoading(true);
    try {
      const { status } = await DELETE_PHOTO(id, token);
      if (!status === 200) setError("Error deleting photo");
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Loading isLoading={isLoading} />
      <button onClick={handleClick} className={styles.delete}>
        Delete
      </button>
    </div>
  );
};
