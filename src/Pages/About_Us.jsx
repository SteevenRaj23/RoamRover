import Footer from "../Components/Footer";

function About_Us() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              position: "relative",
              height: "100%",
              objectFit: "cover",
            }}
            src="https://s3-alpha-sig.figma.com/img/dd8d/f0db/fa4f27b6ab388306bef52c65a8a3da36?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWVb7My~w8naYqw079Cdeo3JY4sD6WlFccAtzvCh-jpDJPBO2i2xK52nGy9CQdvTbrUW2HQ3iUw38wwh8JNIpvKNr3vP02pvUcoj~X55OtLHjFkKhjfM8bVks~g~5zlSFfvH6hFon4jclj3I~~-yIrxU-m2QJ9XxQQRrF3CFtiAnsi~K23cfoyPzTvXtJeHBybAnsOfvAmKU4kkLQPEzZ6cHnx2XSrEnaWY2VXDy-EAisnAuJAZ~kEMSt0GweDI~Pobz4F4tXdqW4gfPvkPSQFOripiy~c69nF3oj8ZGWGgMxKFPf9tGB-da7HoMLK9cYRFnI9Upqrv5qjtdZwpdfA__"
            alt="about_us_image"
          />

          <h1
            style={{
              color: "white",
              fontSize: "60px",
              position: "absolute",
            }}
          >
            About Us
          </h1>

          <h1
            style={{
              color: "white",
              fontSize: "60px",
              position: "absolute",
            }}
          ></h1>
          <h1
            style={{
              color: "white",
              fontSize: "20px",
              position: "absolute",
              top: "400px",
            }}
          >
            Home &#62; About Us
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5rem",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "300px",
            }}
          >
            <img
              style={{
                width: "83px",
                height: "83px",
              }}
              src="team.png"
              alt=""
            />
            <h2>Great team work</h2>
            <p style={{ textAlign: "center", color: "#808080" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maxime cupiditate corporis nam. Recusandae voluptatem
              placeat dignissimos nostrum. Accusamus ut nemo sint illo
              architecto suscipit ex a distinctio inventore vel.
            </p>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "300px",
            }}
          >
            <img
              style={{
                width: "83px",
                height: "83px",
              }}
              src="rocket.png"
              alt=""
            />
            <h2>Great team work</h2>
            <p style={{ textAlign: "center", color: "#808080" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maxime cupiditate corporis nam. Recusandae voluptatem
              placeat dignissimos nostrum. Accusamus ut nemo sint illo
              architecto suscipit ex a distinctio inventore vel.
            </p>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "300px",
            }}
          >
            <img
              style={{
                width: "83px",
                height: "83px",
              }}
              src="uptrend.png"
              alt=""
            />
            <h2>Great team work</h2>
            <p style={{ textAlign: "center", color: "#808080" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maxime cupiditate corporis nam. Recusandae voluptatem
              placeat dignissimos nostrum. Accusamus ut nemo sint illo
              architecto suscipit ex a distinctio inventore vel.
            </p>
          </div>
        </div>

        {/* Man with text on right side */}
        <div
          style={{
            marginTop: "6rem",
            display: "flex",
            justifyContent: "space-around",
            gap: "2rem",
          }}
        >
          <img
            style={{ width: "557px", height: "549px", marginLeft: "2rem" }}
            src="man.png"
            alt=""
          />
          <div
            style={{
              width: "40rem",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
            }}
          >
            <img
              style={{ height: "65px", width: "80px" }}
              src="bigarrow.png"
              alt=""
            />
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quasi minus iure in similique dolorum quae illo nemo. Deleniti
              ipsam mollitia impedit fuga incidunt, necessitatibus perferendis.
              Amet molestiae recusandae aut? Recusandae assumenda dolore
              officiis unde, quos facilis eum sit facere dolorem atque eveniet
              accusantium quidem fugiat quia iste ducimus a nesciunt at, magni
              ipsam saepe vitae minima sequi. Eaque, deserunt.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quasi minus iure in similique dolorum quae illo nemo. Deleniti
              ipsam mollitia impedit fuga incidunt, necessitatibus perferendis.
              Amet molestiae recusandae aut? Recusandae assumenda dolore
              officiis unde, quos facilis eum sit facere dolorem atque eveniet
              accusantium quidem fugiat quia iste ducimus a nesciunt at, magni
              ipsam saepe vitae minima sequi. Eaque, deserunt.
            </p>
            <div>
              <h1>Ashish Gangwar / Steeven Raj</h1>
              <p style={{ color: "#808080" }}>Founders RomeRomio</p>
            </div>
          </div>
        </div>
        {/* Traveller standing with stats */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            marginTop: "5rem",
          }}
        >
          <img
            src="traveller_standing.png"
            alt="traveller_standing"
            style={{ width: "100%", height: "auto" }}
          />
          <img
            src="stats.png"
            alt="stats"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "70%",
            }}
          />
        </div>
        {/* Images library  */}
        <div style={{ marginTop: "5rem", marginBottom: "7rem" }}>
          <h2 style={{ color: "#808080", textAlign: "center" }}>Gallery</h2>
          <h1 style={{ textAlign: "center" }}>Unforgettable Moment</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <img style={{ width: "80%" }} src="library_images.png" alt="" />{" "}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default About_Us;
