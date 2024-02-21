import styles from "./Services.module.scss";
import { services } from "data/services";

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2>Co robimy?</h2>
        <div className={styles.serviceBoxes}>
          {services.map((service) => (
            <div className={styles.serviceBox}>
              <p>{service.name}</p>
              {service.isNew && <p>(nowość)</p>}
              {service.isNew && <div className={styles.newServiceDot}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
