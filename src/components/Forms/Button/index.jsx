import styles from "./button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} type="submit" className={styles.button}>
      {children}
    </button>
  );
};
