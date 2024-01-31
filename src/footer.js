import ButtonVisit from "./buttonvisit";

function Footer() {
  return (
    <div>
      <div className="specialsite-container">
        <div className="specialsite">
          <ButtonVisit />
        </div>
      </div>
      <div className="footer-bread">
        <p class="breadcrumb">
          <span className="breadcrumb-home">Home</span>>{" "}
          <span className="breadcrumb-consumer">Consumer</span> >{" "}
          <span className="breadcrumb-bold"> Digital Cameras</span>
        </p>

        <div class="footer-container">
          <div class="footer-section">
            <h3>Consumer</h3>
            <ul class="footer">
              <li>Digital Cameras</li>
              <li>instax (Instant Photo System)</li>
              <li>Films & Quicksnap</li>
              <li>Photoprinting</li>
              <li>Binoculars</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Healthcare</h3>
            <ul class="footer">
              <li>X-ray Imaging Devices</li>
              <li>Endoscopy</li>
              <li>Ultrasound Devices</li>
              <li>In Vitro Diagnostics</li>
              <li>Veterinary Medicine</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Products & Services</h3>
            <ul class="footer">
              <li>Semiconductor Materials</li>
              <li>Graphic Arts & Printing</li>
              <li>Photofinishing Products</li>
              <li>Optical Devices</li>
              <li>Cine & Broadcast Products</li>
              <li>Security Protections</li>
              <li>Manufacturing Process</li>
              <li>Inspectional Products</li>
              <li>Data Management</li>
              <li>Materials</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>About Us</h3>
            <ul class="footer">
              <li>Events & Seminars</li>
              <li>About FUJIFILM Corporation</li>
              <li>Brand</li>
              <li>Sustainability</li>
              <li>Research & Development</li>
              <li>Fujifilm in Philippines</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a
            className="c-sns-links__item"
            href="https://www.facebook.com/fujifilmphilippines/"
            rel="noopener"
          >
            <img
              src="https://asset.fujifilm.com/www/global/files/sns-image/11/icn_facebook_footer_0.png"
              width="50"
              height="50"
              alt="Facebook"
            ></img>
          </a>
          <a
            className="c-sns-links__item"
            href="https://www.instagram.com/fujifilmph/"
            rel="noopener"
          >
            <img
              src="https://asset.fujifilm.com/www/global/files/sns-image/16/icn_instagram_footer_0.png"
              width="50"
              height="50"
              alt="Instagram"
            ></img>
          </a>
          <a
            className="c-sns-links__item"
            href="https://www.youtube.com/c/FUJIFILMPHILIPPINESOFFICIAL"
            rel="noopener"
          >
            <img
              src="https://asset.fujifilm.com/www/global/files/sns-image/36/icn_youtube_footer_1.png"
              width="50"
              height="50"
              alt="YouTube"
            ></img>
          </a>
        </div>
        <div class="m-footer-links">
          <h3 class="c-headline">Fujifilm Group</h3>
          <div class="m-footer-links__body">
            <a
              class="m-footer-links__link"
              href="https://holdings.fujifilm.com/en"
            >
              <span>FUJIFILM Holdings</span>
            </a>
            <a
              class="m-footer-links__link"
              href="https://www.fujifilm.com/fbglobal/eng"
            >
              <span>FUJIFILM Business Innovation Corp.</span>
            </a>
          </div>
        </div>
        <div class="m-site-footer__bottom">
          <a
            class="m-site-footer__logo"
            href="/ph/en"
            aria-label="Link to homepage"
          >
            <img
              src="./assets/fujifilm_corporate_logo.svg"
              width="152"
              height="42"
              alt="Fujifilm Value from Innovation"
              className="fujilogo"
            ></img>
          </a>
          <div class="m-site-footer__bottom__body">
            <div class="m-site-footer__nav">
              <a href="/ph/en/privacy">Privacy Policy |</a>
              <a href="/ph/en/terms">Terms of Use |</a>
              <a href="/ph/en/contact">Contact us |</a>
              <a href="/ph/en/socialmedia">Social Media |</a>
              <a href="/ph/en/apps">Mobile Apps |</a>
              <a href="/ph/en/cookie-policy">Cookie Policy</a>
            </div>
            <div class="m-site-footer__global">
              <a href="https://global.fujifilm.com/">
                <img
                  src="./assets/global.png"
                  width={30}
                  height={30}
                  alt="global sign"
                ></img>
                <span className="globaltxt">Global site</span>
              </a>
            </div>
            <div class="m-site-footer__copyright">
              <small>©FUJIFILM Asia Pacific Pte. Ltd.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
