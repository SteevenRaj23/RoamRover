import React from "react";
import Distance from "../Components/Distance";
import { useState } from "react";

export default function TourPlanner() {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
          <img
            style={{
              width: "100%",
              position: "relative",
              height: "100%",
              objectFit: "cover",
            }}
            src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015101/man1_l3shxo.png"
            alt="about_us_image"
          />

          <h1
            style={{
              color: "white",
              fontSize: "60px",
              position: "absolute",
              fontFamily: "Poppins",
            }}
          >
            Travel Planner
          </h1>
        </div>
      </div>
      <Distance/>    
    </>
  );
}
