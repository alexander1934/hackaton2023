import Loader from "../Loader/Loader";
import s from "./Button.module.css";

const Button = ({ className = "", ...props }) => {
  return (
    <button
      data-testid="button"
      className={s.button}
      disabled={props.disabled || props.loading}
      {...props}
    >
      {props.loading && <Loader size="s" />}
      {props.children}
    </button>
  );
};

export default Button;
