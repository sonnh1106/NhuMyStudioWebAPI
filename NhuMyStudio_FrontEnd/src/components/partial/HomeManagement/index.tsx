import KeenSlider from "./KeenSlider";
import styles from "./style.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <KeenSlider />
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div>f</div>

        <div className="bg-cover">g</div>
      </div>
    </div>
  );
}
