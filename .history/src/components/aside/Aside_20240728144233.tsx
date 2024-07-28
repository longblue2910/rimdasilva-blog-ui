import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <div className={styles.topic}>
        <h3 className={styles.topicTitle}>Chủ đề</h3>
        <div className={styles.topicList}>
          <Category categoryName={"Database"} />
          <Category categoryName={".Net Core"} />
          <Category categoryName={"Entity Framework"} />
          <Category categoryName={"Dapper"} />
        </div>
      </div>
    </div>
  );
};

export default Aside;
