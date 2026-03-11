import Image from "next/image";
import styles from "./page.module.css";
import WorkoutApp from "./component/WorkoutApp";

export default function Home() {
  return (
    <div>
      <h1 id="title">Welcome to the Workout Tracker</h1>
      <WorkoutApp />
    </div>
  );
}
