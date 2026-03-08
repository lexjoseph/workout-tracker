import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./component/Counter"

export default function Home() {
  return (
    <div>
      <h1 id="title">Welcome to the Workout Tracker</h1>
      <Counter />
    </div>
  );
}
