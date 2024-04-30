import Accordion from 'react-bootstrap/Accordion';
import '../css/Accordion.css'

function Accord() {
  const alphabelts = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <Accordion defaultActiveKey={[""]} alwaysOpen>
      <Accordion.Item eventKey="0" className="accord">
        <Accordion.Header>
          <span className="accord-text">Gender</span>
        </Accordion.Header>
        <Accordion.Body className="accord-gender">
          <label>
            <input type="checkbox" name="male" />
            Male
          </label>
          <label>
            <input type="checkbox" name="female" />
            Female
          </label>
          <label>
            <input type="checkbox" name="unisex" />
            Unisex
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accord">
        <Accordion.Header>
          <span className="accord-text">Brand</span>
        </Accordion.Header>
        <Accordion.Body className="accord-brand">
          {alphabelts.map((alphabelt, i) => {
            return <span key={i}>{alphabelt.toUpperCase()}</span>;
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accord">
        <Accordion.Header>
          <span className="accord-text">Fragrance Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox" />
            Body Spray
          </label>
          <label>
            <input type="checkbox" />
            Deodorant
          </label>
          <label>
            <input type="checkbox" />
            Eau De Cologue
          </label>
          <label>
            <input type="checkbox" />
            Eau De Parfum
          </label>
          <label>
            <input type="checkbox" />
            Eau De Toilette
          </label>
          <label>
            <input type="checkbox" />
            Perfum Oil
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accord">
        <Accordion.Header>
          <span className="accord-text">Scent Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox" />
            Cedar
          </label>
          <label>
            <input type="checkbox" />
            Citrus
          </label>
          <label>
            <input type="checkbox" />
            Floral
          </label>
          <label>
            <input type="checkbox" />
            Fresh
          </label>
          <label>
            <input type="checkbox" />
            Lemon
          </label>
          <label>
            <input type="checkbox" />
            Mush, Amber
          </label>
          <label>
            <input type="checkbox" />
            Rose
          </label>
          <label>
            <input type="checkbox" />
            Vanilla
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accord">
        <Accordion.Header>
          <span className="accord-text">Price</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox" />
            Under $10,000
          </label>
          <label>
            <input type="checkbox" />
            $10,000 - $50,000
          </label>
          <label>
            <input type="checkbox" />
            $50,000+
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="accord">
        <Accordion.Header>
          <span className="accord-text">Availability</span>
        </Accordion.Header>
        <Accordion.Body className="accord-availability">
          <ul>
            <li>In Stock</li>
            <li>Out of Stock</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
