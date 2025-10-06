import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <ProjectList />
    </main>
  );
}
