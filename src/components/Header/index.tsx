import React from 'react'

const Header = () => {
  return (
    <div id="app-header">
      <div className="header">
        <h1>
          <span className="name">Drew Perkins</span>
          <span className="position">
            Fullstack Developer and Machine Learning Engineer @{' '}
            <a
              className="company"
              href="https://softrobot.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoftRobot
            </a>
          </span>
        </h1>
        <div className="header-icons">
          <a
            aria-label="My Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/drewperk"
          >
            <i className="icon fab fa-linkedin" aria-hidden="true" />{' '}
          </a>
          <a
            aria-label="My StackOverflow"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/13548002/drew-perkins"
          >
            <i className="icon fab fa-stack-overflow" aria-hidden="true" />{' '}
          </a>
          <a
            aria-label="My Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/perkdrew"
          >
            <i className="icon fab fa-github-alt" aria-hidden="true" />{' '}
          </a>
          <a
            aria-label="My Medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@drewperk"
          >
            <i className="icon fab fa-medium" aria-hidden="true" />{' '}
          </a>
          <a aria-label="Send email" href="mailto:drewperkins@protonmail.com">
            <i className="icon fa fa-envelope" />{' '}
          </a>
        </div>
      </div>
      <a className="down" href="#about" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true" />{' '}
      </a>
    </div>
  )
}
export default React.memo(Header)
