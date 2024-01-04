import styles from './page.module.css'
import Image from "next/image";

export default function Page() {
  return <div className={styles.container}>{'Hello!'}
  <Image src={'/test.jpg'} alt={'test image'} width={200} height={200}/></div>
}