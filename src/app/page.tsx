import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <video loop autoPlay muted>
          <source src="/tela-inicial.mp4" />
        </video>
      </div>
      <main className={styles.main} >
        <div className={styles.container}>
          <Link href={"/pages/miles"} className={`${styles.image} ${styles.box1}`} style={{ backgroundImage: 'url("https://i.pinimg.com/originals/26/d5/bc/26d5bcd58fd4070dc0e7847603847ac2.jpg")' }} data-text="Miles Morales">
          </Link>
          <Link href={"/pages/tomHoland"} className={`${styles.image} ${styles.box2}`} style={{ backgroundImage: 'url("https://i.pinimg.com/564x/cd/d8/9f/cdd89fdbc9aac8fd48d5a4b4698bd5f6.jpg")' }} data-text="Tom Holand">
          </Link>
          <Link href={"/pages/andrewGarfield"} className={`${styles.image} ${styles.box3}`} style={{ backgroundImage: 'url("https://i.pinimg.com/originals/39/56/99/395699000552efeaaa8d6e85483d4c09.jpg")' }} data-text="Andrew Garfield">
          </Link>
          <Link href={"/pages/tobeyMaguire"} className={`${styles.image} ${styles.box4}`} style={{ backgroundImage: 'url("https://i.pinimg.com/564x/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg")' }} data-text="Tobey Maguire">
          </Link>
        </div>
      </main >
    </>

  );
}
