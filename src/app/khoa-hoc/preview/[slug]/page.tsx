import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { Divider, Typography } from "@mui/material";
import styles from "./khoaHocPreview.module.css";
import Topic from "@/components/topic/Topic";
import Image from "next/image";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const KhoaHocPreviewPage = () => {
  return (
    <div className={`section ${styles.course}`}>
      <div className={styles.leftPage}>
        <h2>C-Sharp từ cơ bản đến nâng cao</h2>
        <div role="presentation">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" className={`${styles.link} hover1`} href="/">
              Home
            </Link>
            <Link
              color="inherit"
              href="/khoa-hoc"
              className={`${styles.link} hover1`}
            >
              Khóa học
            </Link>
            <Typography
              sx={{ cursor: "pointer", fontSize: "14px", fontWeight: 600 }}
            >
              C-Sharp từ cơ bản đến nâng cao
            </Typography>
          </Breadcrumbs>
        </div>
        <h3 className={styles.contentTitle}>Giới thiệu khóa học</h3>
        <p className={styles.description}>
          Khóa học này được thiết kế đặc biệt để giúp bạn không chỉ học C# một
          cách hiệu quả mà còn thoát khỏi{" "}
          <Link href="/" className={styles.tutorialHell}>
            "tutorial hell"
          </Link>{" "}
          – tình trạng mà nhiều người học lập trình gặp phải khi chỉ biết làm
          theo các video hướng dẫn mà không hiểu rõ chức năng và lý do tại sao
          làm như vậy. Mục tiêu của khóa học là giúp bạn trở thành một lập trình
          viên C# chuyên nghiệp, tự tin xây dựng các ứng dụng mạnh mẽ và hiệu
          quả trên nền tảng .NET.
        </p>
        <p className={styles.description}>
          Hãy tự tin áp dụng những gì bạn học được vào các dự án của riêng bạn
          và trở thành một lập trình viên thực thụ, không chỉ biết làm theo mà
          còn hiểu rõ chức năng và mục đích của từng đoạn mã, đồng thời chuẩn bị
          kỹ năng để vượt qua các buổi phỏng vấn xin việc.
        </p>

        <div className="section">
          <h3>Nội dung khóa học</h3>
          <Topic />
        </div>

        <div className="section">
          <h3>Kết quả đạt được</h3>
          <ul style={{ marginTop: "20px" }}>
            <li className={styles.goal}>
              <DoneOutlinedIcon className={styles.goalIcon} />
              <span>Kiến Thức Cơ Bản Và Nâng Cao Về C#</span>
            </li>
            <li className={styles.goal}>
              <DoneOutlinedIcon className={styles.goalIcon} />
              <span>Kỹ Năng Lập Trình Hướng Đối Tượng (OOP)</span>
            </li>
            <li className={styles.goal}>
              <DoneOutlinedIcon className={styles.goalIcon} />
              <span>Kiến Thức Về Nguyên Tắc SOLID</span>
            </li>
            <li className={styles.goal}>
              <DoneOutlinedIcon className={styles.goalIcon} />
              <span>
                Thiết Kế và Triển Khai Các Mẫu Thiết Kế (Design Patterns) với C#
              </span>
            </li>
            <li className={styles.goal}>
              <DoneOutlinedIcon className={styles.goalIcon} />
              <span>Chuẩn Bị Kiến Thức Về C# Cho Buổi Phỏng Vấn</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.rightPage}>
        <Image
          src="/csharp-post.jpeg"
          width={450}
          height={243}
          className={styles.postImg}
          alt="post image"
          objectFit="cover"
          style={{ borderRadius: "8px" }}
        />
        <div className={styles.coursePrice}>
          <span className={styles.textSpan}>
            Học phí: <b>500.000đ</b>
          </span>
          <a href="/" className="btn btn-primary">
            <span className={styles.textSpan}>Đăng ký học </span>
          </a>
        </div>
        <Divider sx={{ marginTop: "20px" }} />
        <ul style={{ marginTop: "20px" }}>
          <li className={styles.courseInfo}>
            <MilitaryTechOutlinedIcon sx={{ fontSize: "15px" }} />
            <span>Trình độ cơ bản</span>
          </li>
          <li className={styles.courseInfo}>
            <LibraryBooksOutlinedIcon sx={{ fontSize: "15px" }} />
            <span>269 bài học</span>
          </li>
          <li className={styles.courseInfo}>
            <Groups3OutlinedIcon sx={{ fontSize: "15px" }} />
            <span>50 học viên đã tham gia kh học</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KhoaHocPreviewPage;
