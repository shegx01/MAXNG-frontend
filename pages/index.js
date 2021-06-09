import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftSideBar from "../components/home/LeftSideBar/Index"
import MiddleContent from "../components/home/MiddleContent/Index"
import RightSideBar from "../components/home/RightSideBar/Index"

const headerText = "welcome to the star wars the clone wars";
const formHeaderText = "Sign in to continue to your account"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | The clone wars</title>
        <meta name="description" content="star wars, clone wars" />
      </Head>
      <div>
        <LeftSideBar headerText={headerText} />
      </div>
      <div>
        <MiddleContent formHeaderText={formHeaderText} />
      </div>
      <div>
        <RightSideBar />
      </div>
    </div>
  );
}
