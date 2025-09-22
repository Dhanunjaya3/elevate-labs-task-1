import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <section >
            <div className='F_logo' ><img className='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAOojE5//yaCATRZhX2wbOrDCSdvW3pKsAAADeSURBVHgBZZIFjsUwDEQdZr7/XVfW1g78J5xOzAVGSKWNsUoKeHHWMNZdltfmQgdgovkhPp5NWYicrMFQ8sK/lz9ZUFQyNapGqqHikg6VItVRDSAsShLzagYG1eMsyQ/xxUrs8x2pfEUVvj2SIJN75az+ZwGASsAxs+U5/G1WHIqJlJbGWrBZgA1J3tyAgw5yr1npenpZwuB99Q4X+FXj0LgNd3vdYjSGLojj9pbJfMAMN9KU49jytKrimwqD6MiWPBcj9k804lL3RiEUw/DJNvmwdYYX73rTuvTlgfgDBEoJnu5Lhd4AAAAASUVORK5CYII=" alt="Logo" />
            <h2>Elevate Labs</h2>
            </div>
            <p>We elevate your business with Ai</p>
        </section>
        <section>
            <h2>Navogation</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Sign up </li>
                <li>Log in</li>
            </ul>
        </section>
      <section>
        <h2>Social</h2>
      </section>
      <section>
        <h2>Legal</h2>
      </section>
    </div>
  )
}

export default Footer;
