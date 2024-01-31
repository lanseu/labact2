import ButtonLearn from "./buttonlearn";

function Camera(props) {
  return (
    <div className="camera">
      <img
        src={props.cameraData.photoName}
        alt={props.name}
        className="cameraimg"
      />
      <div className="text-overlay">
        <h1>{props.cameraData.name}</h1>
        <h3>{props.cameraData.description}</h3>
        <div className="button-container">
          <ButtonLearn link={props.cameraData.link} />
        </div>
      </div>
    </div>
  );
}

export default Camera;
