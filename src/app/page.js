import {
  FaReact,
  FaCertificate,
  FaGithub,
  FaLinkedin,
  FaRegImage,
} from "react-icons/fa";

import Head from "./head";

import scss from "./globals.scss";

export default function Home() {
  return (
    <>
      <Head title={"Homepage Frosts React`s Apps"} />
      <main>
        <div className="block"></div>
        <h1>Hi! Welсome to My Next.JS 13 App</h1>
        <h2>Good to see you here</h2>
        <p>
          This is my test pet project, written with the Next, In which I figured
          out the routing, Server Side Rendering, Client Site Rendering, Static
          Site Generation.
        </p>
        <h4>Here you can see:</h4>
        <ul>
          <li>
            <FaReact />
            <span>See all of my works with ReactJS</span>
          </li>
          <li>
            <FaCertificate />
            <span> See all my certificates</span>
          </li>
          <li>
            <FaGithub />
            <span> See my other works on the GitHub</span>
          </li>
          <li>
            <FaLinkedin />
            <span>Contact Me at LinkedIn</span>
          </li>
          <li>
            <FaRegImage />
            <span>Admire a beautiful gradient background</span>
          </li>
        </ul>
      </main>
    </>
  );
}
