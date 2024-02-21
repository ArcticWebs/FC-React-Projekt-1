import styles from "./CrewSection.module.scss";
import { crew } from "data/crew";
import { nanoid } from "nanoid";

const CrewSection = () => {
  return (
    <section className={styles.ourCrewSection}>
      <div className="container">
        <h2 id="about">Nasi specjaliści</h2>
        <ul>
          {crew.map((person) => (
            <li key={nanoid()}>
              <img
                src={person.imgSrc}
                alt={person.name}
                className={styles.personImage}
              />

              <div className={styles.personDescription}>
                <h4>{person.name}</h4>
                <p>{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CrewSection;
