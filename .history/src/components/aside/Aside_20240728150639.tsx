import Image from "next/image";
import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <div className={styles.topic}>
        <h3 className={styles.topicTitle}>Chủ đề</h3>
        <div className={styles.topicList}>
          <Category categoryName={"C#"} />
          <Category categoryName={".NET"} />
          <Category categoryName={"Entity Framework"} />
          <Category categoryName={"Database"} />
          <Category categoryName={"OOP"} />
          <Category categoryName={"SOLID"} />
          <Category categoryName={"Microservice"} />
          <Category categoryName={"Clean Architecture"} />
          <Category categoryName={"Domain Driven Design"} />
          <Category categoryName={"Design Pattern"} />
          <Category categoryName={"UI/UX"} />
          <Category categoryName={"Rabbit MQ"} />
          <Category categoryName={"Azure"} />
        </div>
      </div>
      <div className={styles.sidebar}>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Logo"
          objectFit="cover"
        />
        <p>
          Thứ sáu hàng tuần, rimdasilva sẽ gửi bạn email những bài viết hay nhất
          tuần qua.
        </p>
        <p>Nếu không muốn bỏ lỡ, bạn có thể đăng ký tại đây</p>
      </div>
    </div>
  );
};

export default Aside;
