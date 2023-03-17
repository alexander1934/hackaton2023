import React from "react";
import classNames from "classnames";
import s from "./Input.module.css";

const Input = ({ className, ...props }) => {
  let inputClass = classNames(
    {
      [s.input]: true,
    },
    className
  );

  return (
    <input {...props} className={inputClass} type="text" value={props.value} />
  );
};

export default Input;
