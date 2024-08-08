import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card1 from "../Components/Card1";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";


export default function Packages() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://13.60.168.246:5000/package")
    .then((res) => {
      setdata(res.data);
      console.log(res)
     });
  }, []);

  const navi= useNavigate();

  function view(ele){
       navi(`/View/${ele._id}`)
  } 

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015095/packages_j6nwz2.png"
          alt=""
          style={{ width: "100%", maxHeight: "640px", objectFit: "fill" }}
        ></img>
        <div
          style={{
            position: "absolute",
            zIndex: "2px",
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
            Travel Packages
          </h2>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "2px",
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
              to="/Package"
              style={{
                color: "white",
                fontFamily: "Poppins",
                textDecoration: "none",
              }}

            >
              > Packages
            </Link>

          </h4>
        </div>
      </div>
      <div style={{ margin: "40px" }}>
        <h2 style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
          Popular Destination
        </h2>
        <p style={{ color: "gray", fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Hic tempore ex cupiditate, explicabo ullam repellendus odit.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >


        {data &&
          data.map((ele, index) => (
            <Card1
              img={ele.imageUrl}
              title={ele.name}
              price={ele.price}
              details={ele.details}
              date="2"
              onclick={()=>{
                view(ele)
              }}
            ></Card1>
          ))}

      </div>
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          height: "470px",
          objectFit: "fill",
        }}
      >
        <img src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015114/package2_egdxoo.png" style={{ width: "100%" }}></img>
      </div>
    </>
  );
}
