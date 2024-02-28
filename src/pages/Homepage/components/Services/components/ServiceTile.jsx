import styles from "./ServiceTile.module.scss";

const ServiceTile = ({ service }) => {
  return (
    <div className={styles.serviceBox}>
      <p className={styles.serviceDescription}>{service.name}</p>
      {service.isNew && <p>(nowość)</p>}
      {service.isNew && <div className={styles.newServiceDot}></div>}
    </div>
  );
};

export default ServiceTile;
