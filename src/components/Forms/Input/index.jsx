import styles from "./input.module.css";

export const Input = ({ label, type, name, value, onChange, ...rest }) => {
  return (
    <div className={styles.label}>
      <label htmlFor={name} className={styles.label}>
        {label}
        <input
          id={name}
          type={type}
          name={name}
          className={styles.input}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </label>
    </div>
  );
};
