import styles from "./button.module.css";

export const Button = ({
  isLoading,
  messageIsLoading = "Loading...",
  messageIsNotLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      type="submit"
      className={styles.button}
      disabled={isLoading}
    >
      {isLoading ? messageIsLoading : messageIsNotLoading}
    </button>
  );
};
