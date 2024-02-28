import styles from "./CrewSection.module.scss";
import { crew } from "data/crew";
import { nanoid } from "nanoid";
import PersonTile from "./components/PersonTile";

const CrewSection = () => {
  return (
    <section id="about" className={styles.ourCrewSection}>
      <div className="container">
        <h2 className="sectionHeading">Nasi specjaliści</h2>
        <ul className={styles.ourCrewList}>
          {crew.map((person) => (
            <PersonTile person={person} key={nanoid()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CrewSection;
