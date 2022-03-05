import React from "react"
import "./styles.css"
import { Icon } from "@iconify/react"

const About = () => {
  return (
    <section id="about">
      <div className="heading">
        <h1>ABOUT ME</h1>

        <img src="../images/profile.jpg" alt="Drew Perkins"/>

        <p data-aos="zoom-in">
          I'm currently a full stack developer and machine learning engineer at SoftRobot AB.
          I have been working with Python for 4 years and Typescript/React for the past 2 years.
          I received my master's degree in natural language processing (NLP) at Uppsala University.
        </p>
      </div>

      <div className="heading">
        <h1>CURRENT TECH STACK</h1>
      </div>
      <div className="skills-icons" data-aos="fade-down">
        <Icon className="icon" icon="vscode-icons:file-type-python" title="Python"/>
        <Icon className="icon" icon="logos:tensorflow" title="Tensorflow"/>
        <Icon className="icon" icon="vscode-icons:file-type-scss2" title="Saas"/>
        <Icon className="icon" icon="vscode-icons:file-type-reactjs" title="React"/>
        <Icon className="icon" icon="vscode-icons:file-type-typescript-official" title="Typescript"/>
        <Icon className="icon" icon="vscode-icons:file-type-go-gopher" title="Golang"/>
        <Icon className="icon" icon="logos:postgresql" title="Postgres"/>
        <Icon className="icon" icon="logos:kubernetes" title="Kubernetes"/>
        <Icon className="icon" icon="logos:google-cloud" title="Google Cloud Platform"/>
      </div>
    </section>
  )
}

export default React.memo(About)
