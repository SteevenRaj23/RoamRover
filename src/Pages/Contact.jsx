import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015113/Contact_her8is.png"
          alt=""
          style={{ width: "100%", maxHeight: "640px", objectFit: "fill" }}
        ></img>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: "250px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              fontFamily: "Poppins",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact
          </h2>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: "350px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h4
            style={{
              fontFamily: "Poppins",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Link
              to="/Home"
              style={{
                color: "white",
                fontFamily: "Poppins",
                textDecoration: "none",
              }}
            >
              Home{" "}
            </Link>
            <Link
              to="/Contact"
              style={{
                color: "white",
                fontFamily: "Poppins",
                textDecoration: "none",
              }}
            >
              > Contact
            </Link>
          </h4>
        </div>
      </div>
      <div style={{ marginTop: "50px", marginBottom: "50px",display:"flex",justifyContent:"center",gap:"50px" }}>
        <div
          style={{
            marginLeft: "50px",
            width: "300px",
            padding: "37px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  padding: "8px",
                  width: "220px",
                  fontFamily: "Poppins",
                  borderRadius: "2px",
                  border: "1px solid #8080804a",
                  fontSize: "15px",
                }}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  padding: "8px",
                  width: "220px",
                  fontFamily: "Poppins",
                  borderRadius: "2px",
                  border: "1px solid #8080804a",
                  fontSize: "15px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  padding: "8px",
                  width: "220px",
                  fontFamily: "Poppins",
                  borderRadius: "2px",
                  border: "1px solid #8080804a",
                  fontSize: "15px",
                }}
              />
            </div>
            <div>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  padding: "8px",
                  width: "220px",
                  fontFamily: "Poppins",
                  borderRadius: "2px",
                  border: "1px solid #8080804a",
                  fontSize: "15px",
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "15px",
                  width: "220px",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div style={{marginLeft:"20px",marginTop:"10px",width:"50%"}}>
          <h1 style={{ fontWeight: "600" }}>Get In Touch</h1>
          <h6 style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            placeat porro cumque minus eaque. Tenetur, maiores reiciendis?
            Exercitationem beatae ipsam consequatur quibusdam suscipit est aut
            quod eveniet autem, earum reiciendis.
          </h6>
          <div style={{display:"flex",gap:"40px"}}>
            <div style={{marginTop:"30px"}}>
              <h4>Steeven Raj</h4>
              <div>
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4846 0.77014C21.3883 0.760214 21.2912 0.760214 21.1949 0.77014H1.40679C1.27996 0.772094 1.15398 0.791111 1.03223 0.826677L11.2443 10.9964L21.4846 0.77014Z"
                  fill="black"
                />
                <path
                  d="M22.5302 1.75253L12.2404 11.9999C11.9755 12.2632 11.6173 12.411 11.2439 12.411C10.8705 12.411 10.5122 12.2632 10.2474 11.9999L0.0494703 1.83027C0.0181198 1.9455 0.00149731 2.06423 0 2.18363V16.318C0 16.6929 0.148915 17.0524 0.413986 17.3174C0.679057 17.5825 1.03857 17.7314 1.41344 17.7314H21.2015C21.5764 17.7314 21.9359 17.5825 22.201 17.3174C22.4661 17.0524 22.615 16.6929 22.615 16.318V2.18363C22.6094 2.03639 22.5807 1.89093 22.5302 1.75253ZM2.38164 16.318H1.3993V15.3074L6.53714 10.2119L7.53361 11.2084L2.38164 16.318ZM21.1874 16.318H20.198L15.046 11.2084L16.0425 10.2119L21.1803 15.3074L21.1874 16.318Z"
                  fill="black"
                />
              </svg>
              <span style={{marginLeft:"10px"}}>Steeven@gmail.com</span>
              </div>
              <div style={{marginTop:"5px"}}>
              <svg
                width="18"
                height="25"
                viewBox="0 0 18 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.02429 0 0 3.9125 0 8.75C0 15.3125 9 25 9 25C9 25 18 15.3125 18 8.75C18 3.9125 13.9757 0 9 0ZM9 11.875C8.14752 11.875 7.32995 11.5458 6.72716 10.9597C6.12436 10.3737 5.78571 9.5788 5.78571 8.75C5.78571 7.9212 6.12436 7.12634 6.72716 6.54029C7.32995 5.95424 8.14752 5.625 9 5.625C9.85248 5.625 10.67 5.95424 11.2728 6.54029C11.8756 7.12634 12.2143 7.9212 12.2143 8.75C12.2143 9.5788 11.8756 10.3737 11.2728 10.9597C10.67 11.5458 9.85248 11.875 9 11.875Z"
                  fill="black"
                />
              </svg>
              <span style={{marginLeft:"16px"}}>whitefield</span>
            </div>
            </div>
            <div style={{marginTop:"30px"}}>
              <h4>Ashish</h4>
              <div>
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4846 0.77014C21.3883 0.760214 21.2912 0.760214 21.1949 0.77014H1.40679C1.27996 0.772094 1.15398 0.791111 1.03223 0.826677L11.2443 10.9964L21.4846 0.77014Z"
                  fill="black"
                />
                <path
                  d="M22.5302 1.75253L12.2404 11.9999C11.9755 12.2632 11.6173 12.411 11.2439 12.411C10.8705 12.411 10.5122 12.2632 10.2474 11.9999L0.0494703 1.83027C0.0181198 1.9455 0.00149731 2.06423 0 2.18363V16.318C0 16.6929 0.148915 17.0524 0.413986 17.3174C0.679057 17.5825 1.03857 17.7314 1.41344 17.7314H21.2015C21.5764 17.7314 21.9359 17.5825 22.201 17.3174C22.4661 17.0524 22.615 16.6929 22.615 16.318V2.18363C22.6094 2.03639 22.5807 1.89093 22.5302 1.75253ZM2.38164 16.318H1.3993V15.3074L6.53714 10.2119L7.53361 11.2084L2.38164 16.318ZM21.1874 16.318H20.198L15.046 11.2084L16.0425 10.2119L21.1803 15.3074L21.1874 16.318Z"
                  fill="black"
                />
              </svg>
              <span style={{marginLeft:"10px"}}>Ashish@gmail.com</span>
              </div>
              <div style={{marginTop:"5px"}}>
              <svg
                width="18"
                height="25"
                viewBox="0 0 18 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.02429 0 0 3.9125 0 8.75C0 15.3125 9 25 9 25C9 25 18 15.3125 18 8.75C18 3.9125 13.9757 0 9 0ZM9 11.875C8.14752 11.875 7.32995 11.5458 6.72716 10.9597C6.12436 10.3737 5.78571 9.5788 5.78571 8.75C5.78571 7.9212 6.12436 7.12634 6.72716 6.54029C7.32995 5.95424 8.14752 5.625 9 5.625C9.85248 5.625 10.67 5.95424 11.2728 6.54029C11.8756 7.12634 12.2143 7.9212 12.2143 8.75C12.2143 9.5788 11.8756 10.3737 11.2728 10.9597C10.67 11.5458 9.85248 11.875 9 11.875Z"
                  fill="black"
                />
              </svg>
              <span style={{marginLeft:"16px"}}>whitefield</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
