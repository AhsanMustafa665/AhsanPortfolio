import React from "react";

const About = () => {
  return (
    <div>
      <h1
        class="text-6xl text-center font-bold text-green-600 mt-16 uppercase"
        style={{ fontFamily: "sans-serif" }}
      >
        About Me
      </h1>
      <p className="mt-6">
        <li>I am a junior full stack developer.</li>
        <li>
          {" "}
          I know about various technology tools including code, github, heroku,
          firebase, netlify etc.
        </li>
        <li>I want to learn web development with web design schema.</li>
        <li>
          Besides, I am doing a diploma from a private institute in Chittagong.
        </li>
        <li>I am hoping to study at DUET with a diploma. </li>
      </p>
    </div>
  );
};

export default About;
