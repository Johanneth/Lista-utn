import styles from "./Controllers.module.css";
import { Link } from "react-router-dom";

const Controllers = ({ onDelete }) => {
  return (
    
    <div className={styles.container}>
      <h5 className={styles.titulo}>Todo list</h5>
      <Link className={styles.createButton} to="/new">
        +
      </Link>
      {/* <button onClick={onDelete}>-</button> */}
    </div>
  );
};

export default Controllers;
