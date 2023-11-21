import styles from "./Task.module.css";

import { useId } from "react";
import { BsCheck2Square, BsSquare } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Task = ({ taskId, title, completed, handleComplete }) => {
  const ref = useId();

  return (
    <div className={styles.container} style={{ color: completed && "#008f39" }}>
      <label htmlFor={ref}>
        {completed ? <BsCheck2Square size={20} /> : <BsSquare size={16} />}
      </label>
      <input type="checkbox" id={ref} hidden onChange={handleComplete} />
      <span style={{ textDecoration: completed ? "" : "none" }}>
        {title}
      </span>
      <Link to={`/${taskId}`}>
        <BiSolidEdit size={18} />
      </Link>
    </div>
  );
};
export default Task;
