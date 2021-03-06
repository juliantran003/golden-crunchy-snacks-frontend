// Components
import Map from "../components/Utility/Map";

const About = () => {
  return (
    <div>
      <div className="about-info">
        <h1>Company Name:</h1>
        <h2>HF International Marketing Ltd</h2>
        <h1>Registered Address:</h1>
        <h2>861 Plymouth Road</h2>
        <h2>Slough SL1 4LP</h2>
        <h2>Berkshire </h2>
        <h2>United Kingdom</h2>
        <h1>E-mail:</h1>
        <h2>sales@hfinternationalmarketing.co.uk</h2>
        <h3>Company Registered in England & Wales No: 09829079</h3>
      </div>

      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default About;
