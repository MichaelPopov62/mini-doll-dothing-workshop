import styles from "../page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1>Вхід</h1>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Пароль" /><br />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}
