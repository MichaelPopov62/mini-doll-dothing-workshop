import styles from './Contener.module.css';
import {ChildrenProps} from "@/types/types"

export default function Contener({children}:ChildrenProps) {
  return <div className={styles.contener}>{children}</div>;
}