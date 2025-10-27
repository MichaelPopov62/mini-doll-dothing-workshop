/*сторінка реєстрації*/

"use client";

import { useState, type FormEvent } from "react";
import styles from "./register.module.css";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register form data:", form);
    // Тут пізніше можна буде зробити fetch на бекенд
  };

  return (
    <div className={styles.container}>
      <h1>Реєстрація</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ім'я"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.btn}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
}
