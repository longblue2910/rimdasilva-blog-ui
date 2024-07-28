"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLinks/AuthLink";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ProgressBar from "../progressBar/ProgressBar";
import { useProgress } from "../../context/ProgressContext"; // Import useProgress
import Notification from "../notification/Notification";
import { Divider } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  /* ---------------- Change background header ------------------ */
  const { isNavigating, startNavigation } = useProgress(); // Sử dụng context

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY >= 80) {
        header.classList.add(styles.scrollHeader);
      } else {
        header.classList.remove(styles.scrollHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------- Toggle menu ------------------ */
  const [Toggle, showMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = Toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Khôi phục khi component bị unmount
    };
  }, [Toggle]);

  return (
    <header className={styles.header}>
      <ProgressBar isVisible={isNavigating} /> {/* Thêm ProgressBar */}
      <nav className={`${styles.nav} wrapper`}>
        <div style={{ display: "flex", alignItems: "center", gap: "" }}>
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="logo"
            objectFit="cover"
            style={{ cursor: "pointer" }}
          />
          <h5>rimdasilva</h5>
        </div>
        <div
          className={
            Toggle
              ? `${styles.navMenu} ${styles.showMenu}`
              : `${styles.navMenu}`
          }
        >
          <div className={styles.navLinks}>
            <ul className={`${styles.navList} ${styles.grid}`}>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-estate ${styles.navIcon}`}></i>
                <Link
                  href="/"
                  className={`${styles.link} hover1`}
                  onClick={startNavigation}
                >
                  Giới thiệu
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-user ${styles.navIcon}`}></i>
                <Link
                  href="#about"
                  className={`${styles.link} hover1`}
                  onClick={startNavigation}
                >
                  Khóa học
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>
                <Link
                  href="#skills"
                  className={`${styles.link} hover1`}
                  onClick={startNavigation}
                >
                  Blog
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>
                <Link
                  href="#skills"
                  className={`${styles.link} hover1`}
                  onClick={startNavigation}
                >
                  Series
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>
                <Link
                  href="#skills"
                  className={`${styles.link} hover1`}
                  onClick={startNavigation}
                >
                  Tiện ích
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.navClose}>
            <CloseIcon onClick={() => showMenu(!Toggle)} />
          </div>
        </div>
        <div className={styles.auth}>
          <ThemeToggle />
          <Divider orientation="vertical" flexItem />

          <AuthLink />
        </div>
        <div className={styles.navToggle} onClick={() => showMenu(!Toggle)}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
