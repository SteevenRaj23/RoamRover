import React from "react";

export default function Card({img,title,details,price,date,onclick}) {
  return (
    <>
      <div class="card" onClick={onclick}  style={{ width: "21rem",borderRadius:"20px" }}>
        <img class="card-img-top" src={img} alt="Card image cap" />
        <div class="card-body">
          <div style={{display:"flex", justifyContent: "space-between"}}>
          <h5 class="card-title" style={{fontWeight:"bold"}}>{title}</h5>
          <h5>${price}.00/{date}days</h5>
          </div>
          <p class="card-text" style={{color:"gray",marginTop:"10px"}}>
              {details}
          </p>
          <img src="star.png" alt="" style={{width:"100px",marginRight:"70px"}}></img>
          <a href="#" class="btn btn-primary" style={{backgroundColor:"black",border:"none",borderRadius:"20px",fontWeight:"bold"}}> 
            Booking now
          </a>
        </div>
      </div>
    </>
  );
}
