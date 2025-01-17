function coverImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh", // Full viewport height
        // backgroundImage: "url(/images/Designer2.png)",
        backgroundImage: "url(/images/map2.jpg)",
        backgroundSize: "cover", // Ensures the image scales without cropping
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", // Keeps the image centered
        backgroundColor: "#000816", // Fallback color if the image does not fill the container
      }}
    ></div>
  );
}

export default coverImage;
