import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <div className={styles.topic}>
        <h3 className={styles.topicTitle}>Chủ đề</h3>
        <div>
          
        </div>
        <Category categoryName={"Dataabase"} />
        <Category categoryName={".Net Core"} />
        <Category categoryName={"Entity Framework"} />
      </div>
    </div>
  );
};

export default Aside;
