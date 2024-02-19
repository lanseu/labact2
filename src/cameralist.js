import { fujifilmCameras } from "./cameradata";
import "./CameraList.css";

function CameraList() {
  return (
    <div className="camera-container">
      <h1>Fujifilm Cameras</h1>
      <ul className="camera-list">
        {fujifilmCameras.map((camera) => (
          <li key={camera.name} className="camera-item">
            <div className="card">
              <img src={camera.image} alt={camera.name} className="card-img" />
              <div className="card-body">
                <strong>{camera.name}</strong>
                <div>
                  {camera.price && (
                    <span className="price">Php {camera.price}</span>
                  )}
                  {camera.releaseYear && (
                    <span
                      className={`release-year${
                        camera.releaseYear >= 7 ? " platinum" : ""
                      }`}
                    >
                      Release Year: {camera.releaseYear}
                      {new Date().getFullYear() - camera.releaseYear <= 1 && (
                        <span className="new-box">New</span>
                      )}
                      {new Date().getFullYear() - camera.releaseYear > 1 &&
                        new Date().getFullYear() - camera.releaseYear <= 3 && (
                          <span className="bronze-box">Bronze</span>
                        )}
                      {new Date().getFullYear() - camera.releaseYear > 3 &&
                        new Date().getFullYear() - camera.releaseYear <= 5 && (
                          <span className="silver-box">Silver</span>
                        )}
                      {new Date().getFullYear() - camera.releaseYear > 5 &&
                        new Date().getFullYear() - camera.releaseYear <= 7 && (
                          <span className="gold-box">Gold</span>
                        )}
                      {new Date().getFullYear() - camera.releaseYear >= 7 && (
                        <span className="platinum-box">Platinum</span>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CameraList;
