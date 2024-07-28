import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./topic.module.css";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import QuizIcon from "@mui/icons-material/Quiz";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

const Topic = () => {
  return (
    <div className={styles.topic}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h4>1. Net Core & C#</h4>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Tổng quan về .Net Core
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Làm quen với C# và Visual Studio Code
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Visual Studio Code – Làm việc với C#
              </span>
            </li>
            <li className={styles.lesson}>
              <QuizIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Quiz] - Biến, kiểu dữ liệu và toán tử
              </span>
            </li>
            <li className={styles.lesson}>
              <LaptopChromebookOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Thực hành] - Kiểm tra năm nhuận
              </span>
            </li>
            <li className={styles.lesson}>
              <PlayCircleOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>[Video] - Sửa bài tập</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h4>2. Mảng và Phương thức trong C#</h4>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Tổng quan về .Net Core
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Làm quen với C# và Visual Studio Code
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Visual Studio Code – Làm việc với C#
              </span>
            </li>
            <li className={styles.lesson}>
              <QuizIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Quiz] - Biến, kiểu dữ liệu và toán tử
              </span>
            </li>
            <li className={styles.lesson}>
              <LaptopChromebookOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Thực hành] - Kiểm tra năm nhuận
              </span>
            </li>
            <li className={styles.lesson}>
              <PlayCircleOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>[Video] - Sửa bài tập</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h4>3. Lớp và Đối tượng trong C#</h4>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Tổng quan về .Net Core
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Làm quen với C# và Visual Studio Code
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Visual Studio Code – Làm việc với C#
              </span>
            </li>
            <li className={styles.lesson}>
              <QuizIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Quiz] - Biến, kiểu dữ liệu và toán tử
              </span>
            </li>
            <li className={styles.lesson}>
              <LaptopChromebookOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Thực hành] - Kiểm tra năm nhuận
              </span>
            </li>
            <li className={styles.lesson}>
              <PlayCircleOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>[Video] - Sửa bài tập</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h4>4. Interview</h4>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Tổng quan về .Net Core
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Làm quen với C# và Visual Studio Code
              </span>
            </li>
            <li className={styles.lesson}>
              <StickyNote2Icon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Lý thuyết] - Visual Studio Code – Làm việc với C#
              </span>
            </li>
            <li className={styles.lesson}>
              <QuizIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Quiz] - Biến, kiểu dữ liệu và toán tử
              </span>
            </li>
            <li className={styles.lesson}>
              <LaptopChromebookOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>
                [Thực hành] - Kiểm tra năm nhuận
              </span>
            </li>
            <li className={styles.lesson}>
              <PlayCircleOutlinedIcon sx={{ fontSize: "15px" }} />
              <span className={styles.lessonTitle}>[Video] - Sửa bài tập</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Topic;
