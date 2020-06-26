import React from "react";
import css from "./position.module.css";

export default function Position({ children }) {
  return <div className={css.style}>{children}</div>;
}
