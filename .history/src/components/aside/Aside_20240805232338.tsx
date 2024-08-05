import Image from "next/image";
import Category from "../category/Category";
import styles from "./aside.module.css";
import { Button, TextField } from "@mui/material";

const Aside = () => {
  return (
    <div className={`${styles.aside} section`}>
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
        <h3>
          Để không bỏ lỡ bất kỳ bài viết nào của chúng mình, được gửi vào mỗi
          sáng T7!
        </h3>
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Logo"
          objectFit="cover"
          loading="lazy"
          style={{ justifyContent: "center", alignItems: "center" }}
        />
        <p>Bạn có thể đăng ký để được nhận thông báo qua mail tại đây:</p>
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Nhập email của bạn"
          sx={{ width: "100%" }}
          size="small"
        />
        <Button sx={{ width: "100%" }} variant="contained">
          ĐĂNG KÝ NGAY
        </Button>
      </div>
    </div>
  );
};

export default Aside;
