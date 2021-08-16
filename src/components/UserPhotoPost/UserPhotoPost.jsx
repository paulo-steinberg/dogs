import styles from "./userPhotoPost.module.css";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useEffect, useState } from "react";
import { SEND_PHOTO } from "../../services/api";
import { Error } from "../../Helpers/Error";
import { useNavigate } from "react-router-dom";

export const UserPhotoPost = (event) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadSuccessful) navigate("/account");
  }, [navigate, uploadSuccessful]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    let formData = new FormData();

    formData.append("nome", name);
    formData.append("peso", weight);
    formData.append("idade", age.toString());
    formData.append("img", img.raw);

    try {
      const token = window.localStorage.getItem("token");
      if (!token) console.error("No token found!");
      const response = await SEND_PHOTO(token, formData);
      setUploadSuccessful(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animateLeft`}>
      <form onSubmit={handleSubmit}>
        <Input
          label="name"
          type="text"
          name="name"
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          label="weight"
          type="number"
          name="weight"
          onChange={({ target }) => setWeight(target.value)}
        />
        <Input
          label="age"
          type="number"
          name="age"
          onChange={({ target }) => setAge(target.value)}
        />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        <Button
          messageIsNotLoading="Submit"
          messageIsLoading="Submitting..."
          isLoading={isLoading}
        />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          />
        )}
        <Error error={error} />
      </div>
    </section>
  );
};
