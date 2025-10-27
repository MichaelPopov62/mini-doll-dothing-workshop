/*сторінка входу*/

"use client";
import styles from "./login.module.css";
import Link from "next/link";
import { useState, type FormEvent } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() { 
   const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form data:", form);
  };
  return (
    <div className={styles.container}>
      <h1>Вхід</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input}  onChange={(e) => setForm({ ...form, email: e.target.value })} required/>
        <input 
        type="password" 
        placeholder="Пароль"
         className={styles.input} 
           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit"className={styles.btn}>Увійти</button>
      </form>
       <p className={styles.redirect}>
        Ще немає акаунта? <Link href="/register">Зареєструватися</Link>
      </p>
    </div>
  );
}
