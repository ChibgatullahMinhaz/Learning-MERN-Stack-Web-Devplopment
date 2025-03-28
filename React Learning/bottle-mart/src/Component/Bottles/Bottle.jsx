import "./bottle.css";
export default function Bottle({ bottles, hanldeCount }) {
  const { name, img } = bottles;
  return (
    <>
      <div className="cart">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <div className="actions">
          <button onClick={() => hanldeCount(bottles)}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}
