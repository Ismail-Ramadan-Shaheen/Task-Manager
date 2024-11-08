import Image from "next/image";
import styles from "./page.module.css";
import Tasks from "./components/Tasks"

export default function Home() {
  return (
    <div>
     <Tasks></Tasks>
     </div>
  );
}
