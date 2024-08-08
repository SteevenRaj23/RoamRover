import React from "react";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015828/Home_nt303w.png"
          alt=""
          style={{ width: "100%", maxHeight: "640px", objectFit: "fill" }}
        ></img>
        <div
          style={{
            position: "absolute",
            zIndex: "2px",
            top: "200px",
            left: "70px",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              fontFamily: "Poppins",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Make in
          </h2>
          <h2
            style={{
              fontSize: "70px",
              fontFamily: "Poppins",
              color: "white",
              fontWeight: "bold",
            }}
          >
            your journey
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "500px", marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily:"poppins"
            }}
          >
            Explore new worlds with exotic natural scenery
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015003/01_e6jtzl.png" alt="Card image cap" />
        </div>
        <div class="card" style={{ width: "22rem" }}>
          <img
            class="card-img-top"
            src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015018/02_o4qndu.png"
            alt="Card image cap"
            style={{ objectFit: "cover", height: "286px" }}
          />
        </div>
        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015081/03_hrpb70.png" alt="Card image cap" />
        </div>
      </div>
      <div style={{ position: "relative", marginBottom: "130px" }}>
        <img
          src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015117/home2_ugporq.png"
          style={{ width: "100%", maxHeight: "525px", objectFit: "fill" }}
        ></img>
         <div
             style={{
              display: "flex",
              position: "absolute",
              flexDirection:"row",
              top: "50px",
              gap: "50px",
              justifyContent: "center",
              width: "100%",
            }}
         >
            <h1 style={{color:"white",fontWeight:"bold",fontSize:"50px",textAlign:"center",width:"100%",fontFamily:"poppins"}}>Why choose Us?</h1>
          </div>
            <div
             style={{
              display: "flex",
              position: "absolute",
              flexDirection:"row",
              top: "130px",
              gap: "50px",
              justifyContent: "center",
              width: "100%",
            }}
         >
            <p style={{color:"white",fontWeight:"500",fontFamily:"poppins"}}>our services have been trusted by world travelers.</p>
          </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            flexDirection:"row",
            top: "276px",
            gap: "50px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div class="card" style={{ width: "16rem", height: "21rem" }}>
            <div class="card-body">
              <svg
                width="76"
                height="78"
                viewBox="0 0 96 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "20px" }}
              >
                <rect
                  x="0.238037"
                  y="0.165405"
                  width="95.5655"
                  height="96.9954"
                  rx="10"
                  fill="black"
                />
                <path
                  d="M74.2072 36.1381H61.114C59.3782 36.1398 57.7141 36.8404 56.4868 38.0861C55.2594 39.3318 54.5691 41.0208 54.5674 42.7825V56.0714C54.5685 57.2459 55.0287 58.3719 55.847 59.2024C56.6652 60.0328 57.7746 60.4999 58.9318 60.5011V76.0048C58.9329 77.1793 59.3931 78.3053 60.2114 79.1357C61.0296 79.9662 62.139 80.4333 63.2962 80.4344H72.025C73.1821 80.4333 74.2916 79.9662 75.1098 79.1357C75.928 78.3053 76.3882 77.1793 76.3894 76.0048V60.5011C77.5465 60.4999 78.656 60.0328 79.4742 59.2024C80.2924 58.3719 80.7526 57.2459 80.7538 56.0714V42.7825C80.7521 41.0208 80.0618 39.3318 78.8344 38.0861C77.6071 36.8404 75.9429 36.1398 74.2072 36.1381ZM76.3894 56.0714H72.025V76.0048H63.2962V56.0714H58.9318V42.7825C58.9318 42.1951 59.1617 41.6318 59.5709 41.2164C59.9802 40.801 60.5352 40.5677 61.114 40.5677H74.2072C74.7859 40.5677 75.341 40.801 75.7502 41.2164C76.1595 41.6318 76.3894 42.1951 76.3894 42.7825V56.0714Z"
                  fill="white"
                />
                <path
                  d="M58.9318 25.064C58.9318 23.3117 59.4437 21.5988 60.4028 20.1419C61.362 18.685 62.7252 17.5494 64.3202 16.8789C65.9152 16.2083 67.6703 16.0329 69.3635 16.3747C71.0567 16.7166 72.612 17.5603 73.8328 18.7994C75.0535 20.0384 75.8849 21.617 76.2217 23.3356C76.5585 25.0541 76.3856 26.8355 75.725 28.4543C75.0643 30.0732 73.9455 31.4569 72.5101 32.4304C71.0746 33.4039 69.387 33.9235 67.6606 33.9235C65.3463 33.9211 63.1274 32.987 61.4909 31.326C59.8545 29.665 58.9341 27.4129 58.9318 25.064ZM63.2962 25.064C63.2962 25.9401 63.5521 26.7965 64.0317 27.525C64.5113 28.2535 65.1929 28.8212 65.9904 29.1565C66.7879 29.4918 67.6654 29.5795 68.512 29.4086C69.3586 29.2377 70.1363 28.8158 70.7467 28.1963C71.3571 27.5768 71.7727 26.7875 71.9411 25.9282C72.1095 25.0689 72.0231 24.1782 71.6928 23.3688C71.3624 22.5593 70.803 21.8675 70.0853 21.3808C69.3676 20.894 68.5238 20.6342 67.6606 20.6342C66.5034 20.6354 65.394 21.1025 64.5758 21.933C63.7575 22.7634 63.2973 23.8895 63.2962 25.064Z"
                  fill="white"
                />
                <path
                  d="M45.8386 49.4269V42.7825C45.8368 41.0208 45.1465 39.3318 43.9192 38.0861C42.6918 36.8404 41.0277 36.1398 39.2919 36.1381H26.1987C24.463 36.1398 22.7988 36.8404 21.5715 38.0861C20.3441 39.3318 19.6539 41.0208 19.6521 42.7825V49.4269H15.2877V53.8566H50.203V49.4269H45.8386ZM24.0165 42.7825C24.0165 42.1951 24.2464 41.6318 24.6557 41.2164C25.0649 40.801 25.62 40.5677 26.1987 40.5677H39.2919C39.8707 40.5677 40.4258 40.801 40.835 41.2164C41.2442 41.6318 41.4741 42.1951 41.4741 42.7825V49.4269H24.0165V42.7825Z"
                  fill="white"
                />
                <path
                  d="M24.0166 25.064C24.0166 23.3117 24.5285 21.5988 25.4877 20.1419C26.4468 18.685 27.8101 17.5494 29.405 16.8789C31 16.2083 32.7551 16.0329 34.4483 16.3747C36.1416 16.7166 37.6969 17.5603 38.9176 18.7994C40.1384 20.0384 40.9697 21.617 41.3065 23.3356C41.6433 25.0541 41.4705 26.8355 40.8098 28.4543C40.1491 30.0732 39.0303 31.4569 37.5949 32.4304C36.1594 33.4039 34.4718 33.9235 32.7454 33.9235C30.4311 33.9211 28.2122 32.987 26.5758 31.326C24.9393 29.665 24.0189 27.4129 24.0166 25.064ZM28.381 25.064C28.381 25.9401 28.637 26.7965 29.1165 27.525C29.5961 28.2535 30.2777 28.8212 31.0752 29.1565C31.8727 29.4918 32.7503 29.5795 33.5969 29.4086C34.4435 29.2377 35.2211 28.8158 35.8315 28.1963C36.4419 27.5768 36.8576 26.7875 37.026 25.9282C37.1944 25.0689 37.1079 24.1782 36.7776 23.3688C36.4473 22.5593 35.8879 21.8675 35.1702 21.3808C34.4524 20.894 33.6086 20.6342 32.7454 20.6342C31.5883 20.6354 30.4788 21.1025 29.6606 21.933C28.8424 22.7634 28.3822 23.8895 28.381 25.064Z"
                  fill="white"
                />
              </svg>
              <h5
                class="card-title"
                style={{ fontWeight: "bold", marginTop: "30px" }}
              >
                Best Service
              </h5>
              <p class="card-text" style={{color:"gray",fontFamily:"poppins"}}>
                our service is reliable and convenient, our service is quality.
              </p>
              <a href="#" class="card-link" style={{ color: "black",fontWeight:"600",fontSize:"14px" }}>
                Learn more
              </a>
              <svg
                width="29"
                height="13"
                viewBox="0 0 31 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{marginLeft:"5px"}}
              >
                <path
                  d="M30.122 6.63269L20.122 0.859188V12.4062L30.122 6.63269ZM0.446411 7.63269H21.122V5.63269H0.446411V7.63269Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div class="card" style={{ width: "16rem", height: "21rem" }}>
            <div class="card-body">
              <svg
                width="76"
                height="78"
                viewBox="0 0 96 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "20px" }}
              >
                <rect
                  y="0.026001"
                  width="95.5654"
                  height="96.9954"
                  rx="10"
                  fill="black"
                />
                <path
                  d="M47.5 57.1147C42.21 57.1147 41.75 54.569 41.75 54.1546H36C36 56.8779 37.8975 61.703 44.625 62.7983V65.9952H50.375V62.7983C56.125 61.7918 59 57.9732 59 54.1546C59 50.8392 57.505 45.2741 47.5 45.2741C41.75 45.2741 41.75 43.4092 41.75 42.3139C41.75 41.2187 43.7625 39.3538 47.5 39.3538C51.2375 39.3538 51.4962 41.2483 51.525 42.3139H57.275C57.2361 40.2973 56.5317 38.3544 55.2776 36.8049C54.0235 35.2554 52.2945 34.1917 50.375 33.7887V30.4733H44.625V33.6998C38.875 34.6767 36 38.4953 36 42.3139C36 45.6293 37.495 51.1944 47.5 51.1944C53.25 51.1944 53.25 53.2073 53.25 54.1546C53.25 55.1018 51.4675 57.1147 47.5 57.1147Z"
                  fill="#F8F8F8"
                />
                <path
                  d="M27.7 19.309H19V25.1955H24.8V75.2309C24.8 76.0115 25.1055 76.7602 25.6494 77.3121C26.1932 77.8641 26.9309 78.1742 27.7 78.1742H68.3C69.0691 78.1742 69.8068 77.8641 70.3506 77.3121C70.8945 76.7602 71.2 76.0115 71.2 75.2309V25.1955H77V19.309H27.7ZM65.4 72.2877H30.6V25.1955H65.4V72.2877Z"
                  fill="#F8F8F8"
                />
              </svg>

              <h5
                class="card-title"
                style={{ fontWeight: "bold", marginTop: "30px" }}
              >
                Price Guarantee
              </h5>
              <p class="card-text" style={{color:"gray",fontFamily:"poppins"}}>
                our service is reliable and convenient, our service is quality.
              </p>
              <a href="#" class="card-link" style={{ color: "black",fontWeight:"600",fontSize:"14px" }}>
                Learn more
              </a>
              <svg
                width="29"
                height="13"
                viewBox="0 0 31 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{marginLeft:"5px"}}
              >
                <path
                  d="M30.122 6.63269L20.122 0.859188V12.4062L30.122 6.63269ZM0.446411 7.63269H21.122V5.63269H0.446411V7.63269Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div class="card" style={{ width: "16rem", height: "21rem" }}>
            <div class="card-body">
              <svg
                width="76"
                height="78"
                viewBox="0 0 96 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "20px" }}
              >
                <rect
                  y="0.026001"
                  width="95.5654"
                  height="96.9954"
                  rx="10"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.6547 18.1549H29.0156V22.602H15.9286V43.4615C15.9286 51.5233 24.7634 58.1572 33.4331 58.8474C36.2792 61.953 41.2853 64.2089 45.7408 65.1708V70.6229C41.4801 71.9558 33.8693 75.0873 33.4331 78.4992H62.6735C62.2331 75.0873 53.8472 71.9515 49.578 70.6229V65.1708C54.0505 64.2089 59.2811 61.953 62.1314 58.8474C70.7968 58.1572 79.242 51.5233 79.242 43.4615V22.602H66.6547V18.1549ZM19.9479 26.5531H28.7107V44.5226C28.7107 48.0682 29.6086 51.4413 31.1884 54.4779C24.6321 52.3514 19.9479 46.8734 19.9479 40.4637V26.5531ZM54.2707 48.4694L47.7314 44.7987L41.1836 48.4694L42.4331 40.7053L37.1389 35.21L44.4533 34.0756L47.7314 27.0189L51.0011 34.0756L58.3154 35.21L53.0213 40.7053L54.2707 48.4694ZM63.9907 55.0516C65.5789 51.877 66.4895 48.3659 66.4895 44.652V26.6695H75.2735V40.412C75.2735 47.1107 70.5681 52.8302 63.9907 55.0516Z"
                  fill="#F8F8F8"
                />
              </svg>

              <h5
                class="card-title"
                style={{ fontWeight: "bold", marginTop: "30px" }}
              >
                Handpicked Hotels
              </h5>

              <p class="card-text" style={{color:"gray",fontFamily:"poppins"}}>
                our service is reliable and convenient, our service is quality.
              </p>
              <a href="#" class="card-link" style={{ color: "black",fontWeight:"600",fontSize:"14px" }}>
                Learn more
              </a>
              <svg
                width="29"
                height="13"
                viewBox="0 0 31 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{marginLeft:"5px"}}
              >
                <path
                  d="M30.122 6.63269L20.122 0.859188V12.4062L30.122 6.63269ZM0.446411 7.63269H21.122V5.63269H0.446411V7.63269Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"center"}}>Our tour partner</h1>
        <p style={{textAlign:"center",color:"gray"}}>There are many variation of passage of lorem ipsum available but <br/> the majority have suffered alteration </p>
         <div style={{display:"flex",justifyContent:"center",marginTop:"40px",marginBottom:"40px"}}>
        <img src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015079/partner_xqc8uo.png" alt="" style={{width:"60%"}}></img>
        </div>
      </div>
      <Footer/>
    </>
  );
}
