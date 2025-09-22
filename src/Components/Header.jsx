import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div><img className='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAOojE5//yaCATRZhX2wbOrDCSdvW3pKsAAADeSURBVHgBZZIFjsUwDEQdZr7/XVfW1g78J5xOzAVGSKWNsUoKeHHWMNZdltfmQgdgovkhPp5NWYicrMFQ8sK/lz9ZUFQyNapGqqHikg6VItVRDSAsShLzagYG1eMsyQ/xxUrs8x2pfEUVvj2SIJN75az+ZwGASsAxs+U5/G1WHIqJlJbGWrBZgA1J3tyAgw5yr1npenpZwuB99Q4X+FXj0LgNd3vdYjSGLojj9pbJfMAMN9KU49jytKrimwqD6MiWPBcj9k804lL3RiEUw/DJNvmwdYYX73rTuvTlgfgDBEoJnu5Lhd4AAAAASUVORK5CYII=" alt="Logo" />
      </div>
      <div className="nav_links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">services</a>
        <a href="#">Sign Up</a>
        <a href="#">Log in</a>
      </div>
    </div>
  )
}

export default Header
