// // "use client";
// // import styles from "./register.module.css";
// // import Link from "next/link";
// // import { useState, type FormEvent } from "react";
// // import { useRouter } from "next/navigation"; 
// // import axios, { AxiosError } from "axios";


// // interface RegisterForm {
// //   name: string;
// //   email: string;
// //   password: string;
// // }

// // export default function RegisterPage() {
// //   const router = useRouter(); // <-- створюємо змінну router
// //   const [form, setForm] = useState<RegisterForm>({ name: "", email: "", password: "" });
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post("http://localhost:9090/api/auth/register", form);
// //        console.log(res.data); // тут бачимо, що відповів сервер
// //       setMessage(res.data.message);
// //         // якщо реєстрація успішна — переходимо на логін
// //       if (res.data.success) {
// //         router.push("/login");
// //       }

// //     } catch (err) {{
// //   const error = err as AxiosError<{ message: string }>;
// //   setMessage(error.response?.data?.message || "Помилка сервера");
// // }
      
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h1>Реєстрація</h1>
// //       <form className={styles.form} onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Ім'я"
// //           className={styles.input}
// //           onChange={(e) => setForm({ ...form, name: e.target.value })}
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className={styles.input}
// //           onChange={(e) => setForm({ ...form, email: e.target.value })}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Пароль"
// //           className={styles.input}
// //           onChange={(e) => setForm({ ...form, password: e.target.value })}
// //           required
// //         />
// //         <button type="submit" className={styles.btn}>
// //           Зареєструватися
// //         </button>
// //       </form>
// //       {message && <p>{message}</p>}
// //       <p className={styles.redirect}>
// //         Вже є акаунт? <Link href="/login">Увійти</Link>
// //       </p>
// //     </div>
// //   );
// // }

// "use client";
// import styles from "./register.module.css";
// import Link from "next/link";
// import { useState, type FormEvent } from "react";
// // import { useRouter } from "next/navigation"; 
// import axios, { AxiosError } from "axios";
// import { useRouter } from "next/router";


// interface RegisterForm {
//   name: string;
//   email: string;
//   password: string;
// }

// export default function RegisterPage() {
//   const router = useRouter();
//   const [form, setForm] = useState<RegisterForm>({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:9090/api/auth/register", form);
//       console.log(res.data); // бачимо відповідь від сервера
//       setMessage(res.data.message);

//       // Перевірка на success
//       if (res.data.success === true) {
         
//         router.push("/login");
      
//       }
//       else {
//   console.log("Registration not successful");
// }
         
//       }

//    catch (err) {
//       const error = err as AxiosError<{ message: string }>;
//       setMessage(error.response?.data?.message || "Помилка сервера");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Реєстрація</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ім'я"
//           className={styles.input}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className={styles.input}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Пароль"
//           className={styles.input}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <button type="submit" className={styles.btn}>
//           Зареєструватися
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//       <p className={styles.redirect}>
//         Вже є акаунт? <Link href="/login">Увійти</Link>
//       </p>
//     </div>
//   );
// }
