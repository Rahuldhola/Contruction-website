import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div >
                    <h2>Quick Links</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ marginBottom: "8px" }}>
                            <a href="/">Home</a>
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                            <a href="/about">About</a>
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                            <a href="/contact">Contact</a>
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                            <a href="/opening">Career</a>
                        </li>
                    </ul>
                </div>
{/* 
                 <div className="footer-links">
          <ul> 
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>  */}
                <div>
                    <img src={require("./image/download3.jpg")} alt="Email Icon" style={{ height: "50px", width: "60px", borderRadius: "10px" }} />
                    <p>
                        A-1, 404 SHUBHAM RESIDENCY BHOLAV Bharuch, Gujarat, 392001 India
                    </p>
                </div>
                <div className="footer-links">
                    <a href="https://www.facebook.com/Rahuldhola" target="_blank" rel="noopener noreferrer">
                        <img src={require("./image/face.png")} alt="Email Icon" style={{ height: "30px", width: "30px", borderRadius: "10px",gap:"10px" }} />
                    </a>
                    <a href="https://www.instagram.com/rahul_ahir_213" target="_blank" rel="noopener noreferrer">
                        <img src={require("./image/inst.jpg")} alt="Email Icon" style={{ height: "30px", width: "30px", borderRadius: "10px",gap:"10px" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
