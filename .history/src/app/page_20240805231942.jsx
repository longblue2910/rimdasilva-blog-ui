import BlogCardList from "@/components/blogCardList/BlogCardList";
import styles from "./homepage.module.css";
import CardRectangleList from "@/components/cardRectangleList/CardRectangleList";
import Aside from "@/components/aside/Aside";
import Hero from "@/components/hero/Hero";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="section">
      <Hero />
      <CardRectangleList title={"Khóa học Bootcamp 2.0 🚀"} size={2} />
      <div className={styles.blog}>
        <BlogCardList />
        <Aside />
      </div>
    </div>
  );
}
