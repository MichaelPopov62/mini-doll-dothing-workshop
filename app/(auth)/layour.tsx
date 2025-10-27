/*спільний макет для login/register*/
import styles from "./auth.module.css"
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children:ReactNode }) {
  return <div className={styles.container}>{children}</div>
}