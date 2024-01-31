import logo from "./logo.svg";
import Header from "./header.js";
import ContentHero from "./contenthero.js";
import "./App.css";
import ContentBody from "./contentbody.js";
import ContentCamera from "./contentcamera.js";
import Footer from "./footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentHero />
      <ContentBody />
      <ContentCamera />
      <Footer />
    </div>
  );
}

export default App;
