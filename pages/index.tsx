import { NextPage } from "next";
import Head from "next/head";
import ScheduleGrid from "../components/ScheduleGrid/ScheduleGrid";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClassTime!</title>
      </Head>
      <ScheduleGrid />
    </div>
  );
};

export default Home;
