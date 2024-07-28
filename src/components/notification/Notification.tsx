import React, { useState, useEffect, useRef } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import styles from "./notification.module.css";
import { Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null); // Ref để tham chiếu đến notificationList

  // Giả lập số lượng thông báo
  const fakeNotifications = [
    {
      id: 1,
      message: "Exception handling trong .Net Core",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: true,
    },
    {
      id: 2,
      message: "Lập trình bất đồng bộ trong .NET",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: false,
    },
    {
      id: 3,
      message: "Middleware trong .NET Core",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: false,
    },
    {
      id: 4,
      message: "Middleware trong .NET Core",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: false,
    },
    {
      id: 5,
      message: "Middleware trong .NET Core",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: false,
    },
    {
      id: 6,
      message: "Middleware trong .NET Core",
      messageType: "đã thêm bài viết mới",
      authorName: "rimdasilva",
      authorImg: "/youtube.png",
      isUnread: false,
    },
  ];

  useEffect(() => {
    // Mô phỏng lấy dữ liệu từ API (chỉ để minh họa)
    const fetchData = async () => {
      // Giả lập delay như thực tế
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNotifications(fakeNotifications); // Cập nhật danh sách thông báo từ giả lập dữ liệu
    };

    fetchData(); // Gọi hàm giả lập ngay khi component được render

    // Đoạn mã này sẽ chạy mỗi khi notifications thay đổi (không cần thiết cho trường hợp này)
  }, []);

  // Xử lý khi click vào biểu tượng notifications
  const handleClick = () => {
    setShowNotifications((prev) => !prev); // Toggle hiển thị danh sách thông báo
  };

  // Xử lý khi click bên ngoài notificationList để đóng lại
  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false); // Đóng lại khi click bên ngoài notificationList
    }
  };

  const readNoti = () => {};

  // Đăng ký sự kiện click để xử lý đóng notificationList
  useEffect(() => {
    // Chỉ đăng ký sự kiện khi showNotifications là true
    if (showNotifications) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup effect
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showNotifications]); // Dependency là showNotifications để đảm bảo effect được gọi lại khi showNotifications thay đổi

  return (
    <>
      <Badge badgeContent={fakeNotifications.length} color="error">
        <NotificationsNoneOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={handleClick} // Sử dụng handleClick để toggle hiển thị danh sách
        ></NotificationsNoneOutlinedIcon>
      </Badge>
      <div
        ref={notificationRef}
        className={`${styles.notificationList} ${
          showNotifications ? styles.show : ""
        }`}
      >
        <div className={styles.headerNotification}>
          <h3>Thông báo</h3>
          <span onClick={readNoti} className={styles.tick}>
            Đánh dấu đã đọc
          </span>
        </div>
        <Divider />

        <div className={styles.bodyNoti}>
          {notifications.map((noti) => (
            <Link href="/" key={noti.id} className={styles.contentNoti}>
              <Image
                src={noti.authorImg}
                width={42}
                height={42}
                objectFit="cover"
                alt="Avartar"
              />
              <div className={styles.textNoti}>
                <div>
                  <span>
                    <b>{noti.authorName}</b> {noti.messageType}{" "}
                    <b>{noti.message}</b>
                    {noti.isUnread && (
                      <span className={styles.unreadDot}></span>
                    )}
                  </span>
                </div>
                <div>
                  <span className={styles.timeNoti}>3 giờ trước</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
