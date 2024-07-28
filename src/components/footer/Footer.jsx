import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerTop}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <h2 className={`${styles.logoText} hover3`}>rimdasilva</h2>
          </Link>
          <p className={styles.footerText}>Điện thoại: 098-333-6103</p>
          <p className={styles.footerText}>Email: rimdasilva@gmail.com</p>
          <p className={styles.footerText}>
            Địa chỉ: 234 Phan Văn Hân, Q.Bình Thạnh, HCM City
          </p>
        </div>

        <div className={styles.footerList}>
          <h3 className={`${styles.footerListTitle}`}>Về chúng tôi</h3>
          <ul>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Giới thiệu</Link>
            </li>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Liên hệ</Link>
            </li>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Điều khoản</Link>
            </li>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Bảo mật</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerList}>
          <h3 className={`${styles.footerListTitle}`}>Tiện ích</h3>
          <ul>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Đổi số tiền thành chữ</Link>
            </li>
            <li className={`${styles.footerLink} hover3`}>
              <Link href="#">Ebook hay</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerList}>
          <h3 className={styles.footerListTitle}>Liên kết</h3>
          <div className={styles.social}>
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <YouTubeIcon />
            </Link>
            <Link href="/">
              <LinkedInIcon />
            </Link>
            <Link href="/">
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear}{" "}
            <Link href="#">
              <b>rimdasilva</b>. All rights reserved.
            </Link>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Link href="/">FAQs</Link>
            <Link href="/">Giúp đỡ</Link>
            <Image width={100} height={20} src="/dmca-badge.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
