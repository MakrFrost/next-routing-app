import {
  FaReact,
  FaCertificate,
  FaGithub,
  FaLinkedin,
  FaRegImage,
} from "react-icons/fa";

import Head from "./head";

export default function Home() {
  return (
    <>
      <Head title={"Homepage Frosts React`s Apps"} />
      <main className="main">
        <h1 className="main-title">Hi! Welсome to My Next.JS 13 App</h1>
        <h2 className="main-second">Good to see you here</h2>
        <p className="main-text">
          This is my test pet project, written with the Next, In which I figured
          out the routing, Server Side Rendering, Client Site Rendering, Static
          Site Generation.
        </p>
        <h4 className="main-descrip">Here you can see:</h4>
        <div className="main-block">
          <FaReact className="main-react" />
          <ul className="main-list">
            <li className="main-item">
              <FaReact className="main-icon" />
              <span>See all of my works with ReactJS</span>
            </li>
            <li className="main-item">
              <FaCertificate className="main-icon" />
              <span> See all my certificates</span>
            </li>
            <li className="main-item">
              <FaGithub className="main-icon" />
              <span> See my other works on the GitHub</span>
            </li>
            <li className="main-item">
              <FaLinkedin className="main-icon" />
              <span>Contact Me at LinkedIn</span>
            </li>
            <li className="main-item">
              <FaRegImage className="main-icon" />
              <span>Admire a beautiful gradient background</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
