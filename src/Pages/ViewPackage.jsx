import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ViewPackage() {
    const [data,setdata]=useState();
    const [paymentStatus, setPaymentStatus] = useState(''); 
    const [amount,setamount]=useState();
   
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        axios.get(`http://13.60.168.246:5000/package/${id}`)
        .then((res)=>{
            setamount(res.data.price)
            setdata(res.data)
        })
    },[])


    function handlePayment() {
        if (!amount) {
            console.log("Amount is empty or undefined");
            return;
        }

        console.log("Amount:", amount);

        var options = {
            key: "rzp_test_tk6FyCpRdK9ajI",
            key_secret: "Vbo6d5nIPdYaLo13L6ffJabl",
            amount: amount * 100, 
            currency: "INR",
            name: "Exclusive",
            description: "testing",
            handler: function (response) {
                
                console.log("Payment ID:", response.razorpay_payment_id);
                setPaymentStatus('success');
            },
            prefill: {
                name: "steeven",
                email: "steevenraj.sr23@gmail.com",
                contact: "8618128693"
            },
            notes: {
                address: "Razorpay"
            },
            theme: {
                color: "#3399cc"
            }
        };

        var paymentObject = new window.Razorpay(options);

        paymentObject.on('payment.failed', function (response) {
            console.log("Payment Failed:", response.error);
            setPaymentStatus('failed');
            handleOrderCancellation(); 
        });

        paymentObject.open();
    }
    function handleOrderCancellation() {
        console.log("Order cancelled due to payment failure");
     
    }

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="../view.png"
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
            View Package
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
              > View Package
            </Link>
          </h4>
        </div>
      </div>
    {data && 
    <div style={{marginTop:"60px",marginBottom:"30px",display:"flex"}}>
        <div style={{marginLeft:"50px"}}>
        <img src={data.imageUrl} style={{width:"500px",height:"400px",borderRadius:"20px"}}></img>
        </div>
        <div style={{marginLeft:"50px",width:"450px"}}>
            <div style={{display:"flex"}}>
            <h2 style={{fontSize:"50px"}}>{data.name}</h2>
            <span style={{fontWeight:"400",fontSize:"30px",marginTop:"10px"}}>(${data.price}/days)</span>
            </div>
            <p style={{marginLeft:"10px"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse laborum sapiente quidem omnis dolore quae, natus fugit inventore aliquam, culpa neque odio id eaque similique dolor deleniti expedita possimus laudantium.
            </p>
            <img src="../star.png"></img>
            <div style={{marginTop:"30px"}}>
            <button style={{border:"none",backgroundColor:"black",color:"white",borderRadius:"30px",padding:"15px", fontFamily: "Poppins"}} onClick={handlePayment}>Proceed to Payment</button>
        </div>
        </div>
      </div>
    }
    </>
  )
}
