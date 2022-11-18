import React from "react";
import profileIcon from "../images/Profile.png";
import finance from "../images/finance.png";
import project from "../images/project.png";
import support from "../images/support.png";
import garammasala from "../images/garam-masala.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import "../App.css";
// import Progress from "./Progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Masala() {
  ///////

  ///////
  const header = "Garam Masala";

  const discription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et.\n" +
    "Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ";
  const HeroImage = garammasala;
  return (
    <>
      <header>
        <div className="header-image"></div>
        <h1 className="header-title">Ramaera industries</h1>
      </header>
      <div className="border"></div>
      <div className="header-title" style={{ marginTop: "90px" }}>
        <h1>{header}</h1>
        <div className="title-underline"></div>
      </div>
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
        {/* <div> */}
        <main>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <article>{discription}</article>
          </div>
        </main>
        <div>
          <img src={HeroImage} alt="HeroImage" />
          <div
            className="interested"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img src={person1} alt="person1" />
              <img src={person2} alt="person3" />
              <img src={person3} alt="person3" />
            </div>
            <div style={{ margin: "auto" }}>
              <p className="interested-people">500+</p>
              <p style={{ margin: "0px" }}>people interested</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar variant="info" now={60} label="60%" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <button type="button"> Place bid</button>
      </div>{" "}
    </>
  );
}
