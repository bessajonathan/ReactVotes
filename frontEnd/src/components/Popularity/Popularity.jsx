import React from "react";
import css from "./popularity.module.css";

const STARTS = {
  empty: "☆",
  full: "★",
};
const MAX_STARS = 10;

export default function Popularity({ value }) {
  const fullStars = STARTS.full.repeat(value);
  const emptyStars = STARTS.empty.repeat(MAX_STARS - value);
  return (
    <div className={css.style}>
      {fullStars}
      {emptyStars}
    </div>
  );
}
