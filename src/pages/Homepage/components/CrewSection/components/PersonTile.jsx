import styles from "./PersonTile.module.scss";

const PersonTile = ({ person }) => {
  return (
    <li className={styles.person}>
      <img
        src={person.imgSrc}
        alt={person.name}
        className={styles.personImage}
      />

      <div className={styles.personDescription}>
        <h4 className={styles.personName}>{person.name}</h4>
        <p>{person.description}</p>
      </div>
    </li>
  );
};

export default PersonTile;
