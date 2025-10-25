import styles from "./Footer.module.css"
import Image from "next/image";
import { FaGoogle,FaInstagram, FaFacebook } from "react-icons/fa"; // іконка Google



export default function Footer() {
  return (
    <footer className={styles.footer}>
       <Image src="/images/logo.png" alt="Логотип" width={150} height={150} className={styles.logo}/>
       {/* Основний текст */}
     {/* <p className={styles.text} >© 2025 МініОдяГ • Handmade</p>  */}
      {/* Контакти */}
      <address className={styles.contacts}>
         <div className={styles.contactColumn}>
        <a href="mailto:popov1ms@i.ua" className={styles.contactLink}>Email: popov1ms@i.ua</a>
        <a href="tel:+380987654321" className={styles.contactLink}>Телефон: +380987654321</a>
        </div>
        <div className={styles.contactColumn}>
        <p className={styles.addressLine}>м.Васильків, Україна</p> 
        <p className={styles.addressLine}>вул. Незалежності</p>
        </div>
        </address>
        < div className={styles.social}>
        <a href="https://www.google.com/maps/search/?api=1&query=м.Васильків, Україна"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FaGoogle className={styles.iconGoogle} />
        </a>
        <a 
            href="https://www.instagram.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}>
            <FaInstagram className={styles.iconInstagram}  />
            </a>
              <a 
            href="https://www.facebook.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaFacebook className={styles.iconFacebook} />
          </a>
      </div>  
      
     
    </footer>
  );
}
