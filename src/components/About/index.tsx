import React from 'react';
import { Icon } from '@iconify/react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const linkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const About = () => {
  const currentYear = new Date().getFullYear();
  
  const pythonStartYear = 2018; 
  const jsTsStartYear = 2020; 
  const goStartYear = 2022; 
  
  const pythonExperience = currentYear - pythonStartYear;
  const jsTsExperience = currentYear - jsTsStartYear;
  const goExperience = currentYear - goStartYear;

  return (
    <section id="about">
      <Fade left>
        <div className="heading">
          <h1>About Me</h1>
          <div className="description">
            <img src="../images/portfolio-min.jpeg" alt="Drew Perkins" />
            <p>
              I'm an American expat currently living in Uppsala, Sweden. I
              received my bachelor's degree in Linguistics at the University of
              California, Berkeley before moving to Europe to receive my
              master's degree in natural language processing (NLP) at Uppsala
              University. In my spare time, I will often be
              <a
                href="https://www.goodreads.com/user/show/5594694-drew-perkins"
                {...linkProps}
              >
                {' '}
                reading
              </a>{' '}
              a book,
              <a href="https://letterboxd.com/drewperk/" {...linkProps}>
                {' '}
                watching
              </a>{' '}
              a movie, or attending the local pub for competitive trivia.
            </p>
          </div>
          <h1>Publications and Work</h1>
          <div className="description">
            <img src="../images/softrobot.jpeg" alt="SoftRobot" />
            <p>
              I have a published{' '}
              <a
                href="https://uu.diva-portal.org/smash/get/diva2:1437921/FULLTEXT01.pdf"
                {...linkProps}
              >
                thesis{' '}
              </a>
              and am also featured in{' '}
              <a
                href="http://www.semantic-web-journal.net/content/survey-english-entity-linking-wikidata"
                {...linkProps}
              >
                Survey on English Entity Linking on Wikidata
              </a>
              . Right now, I work for{' '}
              <a href="https://softrobot.io/our-story/" {...linkProps}>
                SoftRobot
              </a>
              , a software company that specializes in AI. Our flagship product,
              known as{' '}
              <a
                href="https://aiida.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aiida
              </a>
              , manages accounting workflows and performs interpretation and
              extraction often on, but not limited to, receipts and invoices.
              Our current R&D has been on document layout analysis using
              multimodal transformers in this same domain. My concerns at the
              company often encompass frontend development with Typescript, 
              backend development with Python or Go, and cloud operations in
              Azure. However, I do not shy away from broaching new tools and
              technologies with the company, and we look at a variety of
              solutions, new and old, to get us closer to our company goals. 
              I have been working with Python for {pythonExperience} years, 
              Javascript/Typescript for the past {jsTsExperience} years, 
              and Go for the past {goExperience} years. My CV can be found{' '}
              <a
                href="https://drive.google.com/file/d/18slIooCW_hMZFT0nNcMYfkXYdQg-1i8K/view?usp=sharing"
                {...linkProps}
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="heading">
            <h1>Tech Stack</h1>
          </div>
          <div className="skills-icons" data-aos="fade-down">
            <Icon className="icon" icon="vscode-icons:file-type-python" />
            <Icon className="icon" icon="logos:pytorch-icon" />
            <Icon className="icon" icon="vscode-icons:file-type-reactjs" />
            <Icon className="icon" icon="devicon:nextjs" />
            <Icon className="icon" icon="devicon:tailwindcss" />
            <Icon
              className="icon"
              icon="vscode-icons:file-type-typescript-official"
            />
            <Icon className="icon" icon="vscode-icons:file-type-go-gopher" />
            <Icon className="icon" icon="logos:postgresql" />
            <Icon className="icon" icon="logos:kubernetes" />
            <Icon className="icon" icon="logos:google-cloud" />
            <Icon className="icon" icon="logos:terraform-icon" />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default React.memo(About);
