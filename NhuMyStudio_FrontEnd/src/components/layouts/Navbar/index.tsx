import style from "./style.module.scss";
export default function Navbar() {
  return (
    <div className={style.main}>
      <div>
        <div>Logo</div>
        <div>
          <a>TRANG CHỦ</a>
          <a>VỀ NHUMY</a>
          <a>KHOẢNH KHẮC</a>
          <a>DỊCH VỤ</a>
          <a>BLOG</a>
          <a>ĐÁNH GIÁ</a>
          <a>LIÊN HỆ</a>
        </div>
        <div>Eng|Vie</div>
      </div>
    </div>
  );
}
