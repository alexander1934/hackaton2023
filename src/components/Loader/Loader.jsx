import cn from "classnames";
import s from "./Loader.module.css";

const Loader = ({
  size = "m",
  loading = true,
  className = "",
}) => {
  if (loading) {
    return <div className={cn([s.loader], s[size], className)}></div>;
  } else {
    return null;
  }
};

export default Loader;
