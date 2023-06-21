import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
      <p className="text-title">
        Drew Perkins &copy; {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default React.memo(Footer)
