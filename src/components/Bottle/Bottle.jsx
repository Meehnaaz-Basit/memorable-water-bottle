import PropTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddCart }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button onClick={() => handleAddCart(bottle)}>Buy now</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddCart: PropTypes.func,
};

export default Bottle;
