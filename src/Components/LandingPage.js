import "../App.css";
// import Navbar from "./Components/Navbar";
// import rameaeraLogo from "./logo-removebg-preview.svg";
// import profileIcon from "./images/Profile.png";
import profileIcon from "../images/Profile.png";
import finance from "../images/finance.png";
import project from "../images/project.png";
import support from "../images/support.png";
import hotelImg from "../images/hotel.png";
import garammasala from "../images/garam-masala.png";
import technologyImg from "../images/technology.jpg";
import fmcgImg from "../images/fmcg.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const navigateToGaramMasala = () => {
    navigate("/garammasala");
  };

  return (
    <>
      <header>
        <div className="header-image"></div>
        <h1 className="header-title">Ramaera industries</h1>
      </header>
      <div className="border"></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <aside>
          <nav className="menu">
            <ul>
              <li>
                <div className="listItem">
                  <img src={profileIcon} alt="profile-icon" />
                  Profile
                </div>
              </li>
              <li>
                <div className="listItem">
                  <img src={project} alt="project" />
                  Project
                </div>
              </li>
              <li>
                <div className="listItem">
                  <img src={finance} alt="finance" height="20px" width="20px" />
                  Finance
                </div>
              </li>
              <li>
                <div className="listItem">
                  <img src={support} alt="support" />
                  Support
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="middle-border"></div>
        <main>
          <h1>Projects</h1>
          <table className="projects">
            <thead>
              <tr>
                <th>Name</th>
                <th>About</th>
                <th width="20%">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="entity-row">
                <td className="listItem">
                  <div className="container" onClick={navigateToGaramMasala}>
                    <img
                      className="project-image"
                      src={garammasala}
                      alt="Garam Masala"
                    ></img>
                    <div className="project-name">Garam Masala</div>
                  </div>
                </td>
                <td className="typography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  nisi, mi, ornare aliquet.{" "}
                </td>
                <td className="typography">Active</td>
              </tr>
              <tr className="empty-row"></tr>
              <tr className="entity-row">
                <td className="listItem">
                  <div className="container">
                    <div className="image">
                      <img
                        className="project-image"
                        src={hotelImg}
                        alt="Hotel-img"
                      ></img>
                    </div>
                    <div className="project-name"> Hotels </div>
                  </div>
                </td>
                <td className="typography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  nisi, mi, ornare aliquet.{" "}
                </td>
                <td className="typography">Active</td>
              </tr>
              <tr className="empty-row"></tr>
              <tr className="entity-row">
                <td className="listItem">
                  <div className="container">
                    <img
                      className="project-image"
                      src={technologyImg}
                      alt="technology-img"
                    ></img>
                    <div className="project-name">Technology </div>
                  </div>
                </td>
                <td className="typography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  nisi, mi, ornare aliquet.{" "}
                </td>
                <td className="typography">Upcoming</td>
              </tr>
              <tr className="empty-row"></tr>
              <tr className="entity-row">
                <td className="listItem">
                  <div className="container">
                    <img src={fmcgImg} alt="fmcg-img"></img>
                    <div className="project-name">Fmcg </div>
                  </div>
                </td>
                <td className="typography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  nisi, mi, ornare aliquet.{" "}
                </td>
                <td className="typography">Finished</td>
              </tr>
              <tr className="empty-row"></tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
