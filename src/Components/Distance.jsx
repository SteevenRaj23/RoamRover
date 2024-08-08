import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import Number from "./Number";
import MapWithDirections from "./MapWithDirections";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const DistanceCalculator = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);
  const [numericDistance, setNumericDistance] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [startlat, setstartlat] = useState();
  const [endlat, setendlat] = useState();
  const [error, seterror] = useState(false);

  const handleCalculateDistance = async () => {
    setstartlat(null);
    try {
      const distanceResponse = await axios.get(
        `http://13.60.168.246:5000/distance?origin=${origin}&destination=${destination}`
      );
      const distanceText =
        distanceResponse.data.rows[0].elements[0].distance.text;
      setDistance(distanceText);

      const numericValue = parseFloat(distanceText.replace(/[^0-9.]/g, ""));
      setNumericDistance(numericValue);

      const geocodeResponse = await axios.get(
        `http://13.60.168.246:5000/geocode?address=${origin}`
      );
      const location = geocodeResponse.data.results[0].geometry.location;
      setMapCenter(location);

      const res = await axios.get(
        `http://13.60.168.246:5000/directions?origin=${origin}&destination=${destination}`
      );
      if(res){
        seterror(false)
      }
      console.log(res.data.routes[0].legs[0].end_location);
      console.log(res.data.routes[0].legs[0].start_location);
      setstartlat(res.data.routes[0].legs[0].start_location);
      setendlat(res.data.routes[0].legs[0].end_location);
    } catch (error) {
      console.error("Error fetching data:", error);
      seterror(true);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            top: "550px",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            gap: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Start"
            style={{
              border: "none",
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            style={{
              border: "none",
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button
            style={{
              border: "none",
              padding: "10px",
              width: "100px",
              backgroundColor: "#97f397",
              fontFamily: "Poppins",
              color: "white",
              fontWeight: "700",
              borderRadius: "5px",
            }}
            onClick={handleCalculateDistance}
          >
            Search
          </button>
        </div>
        <div
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {error && <h1>Route Unavailable</h1>}
         {!error && <>
          {numericDistance !== null ? ( 
            <>
              <h1>Distance</h1>
              <div style={{ display: "flex", gap: "5px" }}>
                <CountUp
                  end={numericDistance}
                  duration={2}
                  style={{
                    color: "#32a932",
                    fontSize: "50px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                />
                <span
                  style={{
                    color: "#32a932",
                    fontSize: "50px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Kms
                </span>
              </div>
            </>
            
          ) : (
            ""
          )}
          </>
        }
        </div>
      </div>
      {startlat && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <MapWithDirections startlat={startlat} endlat={endlat} />
        </div>
      )}
    </>
  );
};

export default DistanceCalculator;
