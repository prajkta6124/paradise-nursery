export default function PlantCard({ plant, onAdd }) {
    return (
      <div className="plant-card">
        <img src={plant.image} alt={plant.name} />
        <h3>{plant.name}</h3>
        <p>${plant.price}</p>
        <button onClick={onAdd}>Add to Cart</button>
      </div>
    );
  }
  