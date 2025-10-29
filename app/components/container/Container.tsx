import styles from '@/app/components/container/Container.module.css';
import {ChildrenProps} from "@/types/types"

export default function Container({children}:ChildrenProps) {
  return <div className={styles.container}>{children}</div>;
}