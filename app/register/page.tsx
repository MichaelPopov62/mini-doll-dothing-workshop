import styles from "../page.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h1>Реєстрація</h1>
      <form>
        <input type="text" placeholder="Ім'я" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Пароль" /><br />
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}
