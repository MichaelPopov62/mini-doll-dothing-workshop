/*сторінка входу*/

"use client";
import styles from "./login.module.css";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";


interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() { 
   const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const router = useRouter();
    
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form data:", form);
      try {
      const res = await axios.post("http://localhost:9090/api/auth/login", form);
      console.log(res.data);
      setMessage(res.data.message); // показати повідомлення від сервера
      // Можеш зберегти токен, якщо він є
      if (res.data.token){
      localStorage.setItem("token", res.data.token);
     router.push("/dashboard"); }  // редірект після успішного логіну
    } catch (err) { const error= err as AxiosError<{ message: string }>;
      setMessage(error.response?.data?.message || "Помилка сервера");}
    
  };
  return (
    <div className={styles.container}>
      <h1>Вхід</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
         type="email"
         placeholder="Email"
          className={styles.input} 
          onChange={(e) => setForm({ ...form, email: e.target.value })} required/>

        <input 
        type="password" 
        placeholder="Пароль"
         className={styles.input} 
           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value })} required />

        <button
         type="submit"
         className={styles.btn}>Увійти</button>
      </form>
       {message && <p>{message}</p>}
       <p className={styles.redirect}>
        Ще немає акаунта? <Link href="/register">Зареєструватися</Link>
      </p>
    </div>
  );
}
