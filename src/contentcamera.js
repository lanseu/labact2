import { cameraData } from "./data";
import Camera from "./camera.js";

function ContentCamera() {
  return (
    <div className="camera-container">
      <ul className="cameras">
        {cameraData.map((camera) => (
          <Camera cameraData={camera} />
        ))}
      </ul>
    </div>
  );
}

export default ContentCamera;
