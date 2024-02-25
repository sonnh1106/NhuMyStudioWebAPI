import style from "./style.module.scss";

export default function Home() {
  return (
    <div className={style.main}>
      <div>
        <div className="bg-fixed" >a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div className="bg-cover">g</div>
      </div>
    </div>
  );
}
