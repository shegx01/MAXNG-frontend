import Image from "next/image"
import styles from "./Index.module.css"
const RightSideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
         <Image src="/home/undraw_Astronaut.svg" width="150" height="150"  />
      </div>

    </div>
  )
}


export default RightSideBar
