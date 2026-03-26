function Plant(props) {
    return (
      <div className={props.have ? "plant-card have-plant" : "plant-card want-plant"}>
        <img src={props.image} alt={props.name} className="plant-image" />
  
        <div className="plant-info">
          <h2>{props.name}</h2>
          <p><strong>Nickname:</strong> {props.nickname}</p>
          <p><strong>Do I have it?</strong> {props.have ? "Yes" : "No"}</p>
          <p><strong>Difficulty:</strong> {props.difficulty}</p>
          <p><strong>Rarity:</strong> {props.rarity}</p>
  
          <div className="button-group">
            <button onClick={() => props.duplicatePlant(props.id)}>Duplicate</button>
            <button onClick={() => props.deletePlant(props.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Plant;