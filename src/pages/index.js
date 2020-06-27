import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import "./index.css"

const IndexPage = () => {
  return(
    <div>
      <Layout>
        <div className="intro">
          <h1>Hello! My name is Shreya.</h1>
          <h2>I'm a student at the Clemson University Honors College pursuing a B.S. in Bioengineering (Biomaterials Concentration) with a minor in Computer Science.</h2>
          <img className='me' src={require("../images/me.jpg")} />
        </div>
        
        <div className="links">
          <h2>GET TO KNOW ME:</h2>
          <h3><Link to="/research">My Research</Link></h3>
          <h3><Link to="/campus">Campus Involvement</Link></h3>
          <h3><Link to="/blog">View my Projects</Link></h3>
          <h3><Link to="/contact">View my Resume</Link></h3>
          <h3><Link to="/contact">Contact me!</Link></h3>
        </div>
        
      </Layout>
    </div>
  )
}

export default IndexPage