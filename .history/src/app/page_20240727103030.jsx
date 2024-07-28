import styles from "./homepage.module.css";
import CardRectangleList from "@/components/cardRectangleList/CardRectangleList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="section">
      <CardRectangleList title="Khóa học PRO" size={3} isPremium={true} />
      <CardRectangleList title="Khóa học miễn phí" size={10} />
      <CardRectangleList title="Ebook miễn phí" size={10} />
    </div>
  );
}
