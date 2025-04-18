// import "./home.css";
import "./about.css"; // Import the CSS file for styling

function About() {
  return (
    <div className="content-container">
      <div className="about-container"> 
        <div className="about-content">
        <h1>About P S Vadhiya Construction</h1>
        <p>
          We are a trusted construction company providing top-notch services in industrial,
          residential, and commercial projects with a commitment to excellence.
        </p>
      </div><br/>
      <div style={{border:"2px solid black"}}>
      <h2 >We work With</h2><br/>
      <div className="multiple-floating-logos">
        <img src={require("./image/logo2.jpg")}  alt="Logo 1" className="floating-logo delay-0" />
        <img src={require("./image/MRF1.png")}  alt="Logo 2" className="floating-logo delay-1" />
        <img src={require("./image/upl.png")}  alt="Logo 3" className="floating-logo delay-2" />
        <img src={require("./image/logo.jpg")}  alt="Logo 3" className="floating-logo delay-2" />
        <img src={require("./image/logo.jpg")}  alt="Logo 3" className="floating-logo delay-2" />
        <img src={require("./image/logo.jpg")}  alt="Logo 3" className="floating-logo delay-2" />
        <img src={require("./image/logo.jpg")}  alt="Logo 3" className="floating-logo delay-2" />
        <img src={require("./image/logo.jpg")}  alt="Logo 3" className="floating-logo delay-2" />

      </div>
      </div>
     
    </div>
      <div >
       
      <h1 className="title">Certificate</h1>

      

          <div style={{display:"flex",gap:"20px",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            
            <div>
              <img
          src={require("./image/images.jpg")} // Replace with your logo path
          alt="Logo"
          className="loge-img"
        />
            </div>
            <div>
              <img
          src={require("./image/images.jpg")} // Replace with your logo path
          alt="Logo"
          className="loge-img"
        />
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
