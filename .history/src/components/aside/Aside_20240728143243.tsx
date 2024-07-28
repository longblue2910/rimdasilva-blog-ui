import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <div className={styles.topic}>
        <h3 style={}>Chủ đề</h3>

        <Category categoryName={"Dataabase"} />
        <Category categoryName={".Net Core"} />
        <Category categoryName={"Entity Framework"} />
      </div>
    </div>
  );
};

export default Aside;
