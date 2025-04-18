import "./card.css"; // Import the CSS file for styling
import sampleImg from "./image/mrf.jpg"; // Replace with your actual image path

function Card() {
  return (
    <div className="card">
      <img src={sampleImg} alt="Card Visual" className="card-img" />
      <div className="card-details">
        {/* <p className="text-title">MRF tyres </p> */}
        {/* <p className="text-body">Here are the details of the card</p> */}
      </div>
      <button className="card-button">
        <a href="info " style={{textDecoration:"none",color:"white"}}>More info</a>
      </button>
    </div>
  );
}

export default Card;