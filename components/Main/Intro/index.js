import styles from "./styles.module.css";

export default function Intro() {
  return (
    <div className={styles.csstyping}>
      <p>Fullstack React</p>
      <p>Ethereum Blockchain</p>
      <p>Developer...</p>
      <a href="https://github.com/anasshad" className={styles.button}>
        <img src="/github-icon-1.svg" className={styles.icon} />
        <div style={{ marginLeft: "1em" }}>Github</div>
      </a>
    </div>
  );
}
