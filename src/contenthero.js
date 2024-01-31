function ContentHero() {
  return (
    <div className="content-hero">
      <div className="image-container">
        <p class="breadcrumb">
          <span className="breadcrumb-home">Home</span>>{" "}
          <span className="breadcrumb-consumer">Consumer</span> >{" "}
          <span className="breadcrumb-bold"> Digital Cameras</span>
        </p>
        <img
          src="./assets/digitalcameras-fuji.jpg"
          alt="Fujifilm Digital Hero"
          className="digitalCameras"
        ></img>
      </div>
    </div>
  );
}

export default ContentHero;
