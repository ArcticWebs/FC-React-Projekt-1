import styles from "./Services.module.scss";
import { services } from "data/services";
import { nanoid } from "nanoid";
import ServiceTile from "./components/ServiceTile";

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="sectionHeading">Co robimy?</h2>
        <div className={styles.serviceBoxes}>
          {services.map((service) => (
            <ServiceTile service={service} key={nanoid()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
