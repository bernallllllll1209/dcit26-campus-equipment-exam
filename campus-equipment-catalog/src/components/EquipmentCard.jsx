import React from 'react';
import { Link } from 'react-router-dom';

export default function EquipmentCard({ item }) {
  // Destructure properties from the item object
  const { id, name, category, location, condition, available } = item;

  return (
    <div className="equipment-card">
      <div className="card-top">
        <span className="badge">{category}</span>
        <span className={`status ${available ? 'available' : 'muted'}`}>
          {available ? 'Available' : 'In use'}
        </span>
      </div>

      {/* Wrap the name in a Link to navigate to the item's detail view */}
      <h3>
        <Link to={`/equipment/${id}`} className="text-link">
          {name}
        </Link>
      </h3>

      <div className="card-details">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Condition:</strong> {condition}</p>
      </div>
    </div>
  );
}
