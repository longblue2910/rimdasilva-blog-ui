import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <div className={styles.topic}>
        <h3 className={styles.topicTitle}>Chủ đề</h3>
        <div className={styles.topicList}>
          <Category categoryName={"C#"} />
          <Category categoryName={".Net Core"} />
          <Category categoryName={"Entity Framework"} />
          <Category categoryName={"Database"} />
          <Category categoryName={"OOP"} />
          <Category categoryName={"SOLID"} />
          <Category categoryName={"Microservice"} />
          <Category categoryName={"Clean Architecture"} />
          <Category categoryName={"Domain Driven Design"} />
          <Category categoryName={"Design Pattern"} />
          <Category categoryName={"UX/UI"} />
          <Category categoryName={"Rabbit MQ"} />
          <Category categoryName={"Azure"} />
        </div>
      </div>
    </div>
  );
};

export default Aside;
