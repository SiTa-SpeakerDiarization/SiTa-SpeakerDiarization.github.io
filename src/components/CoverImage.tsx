import image from "../assets/map2.jpg";

function CoverImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${image})`, // Use imported image here
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundColor: "#000816",
      }}
    ></div>
  );
}

export default CoverImage;
