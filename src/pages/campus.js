import React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'

const CampusPage = () => {
  return(
    <Layout>
      <h1>I am a part of several clubs at Clemson.</h1>
      <div>
        <h2>I am a copy editor at <a href="http://www.thetigercu.com/">The Tiger</a>, Clemson's oldest newspaper.</h2>
        <h2>Check out some of my articles!</h2>
        <h3><a href="http://www.thetigercu.com/timeout/starbucks-fall-drink-review/article_fd5917fe-f377-11e9-8514-bb53f76a2d0c.html">Starbucks Review Article</a></h3>
        <img src={require("../images/review.png")} />
        <h3><a href="http://www.thetigercu.com/news/cmetoo-movement-follow-up/article_bad7966e-6c56-11ea-9555-9342b0d85410.html">#CMeToo Follow Up Article</a></h3>
        <img src={require("../images/cmetoo.png")} />
        <h3>I am also involved with the Undergraduate Clemson Bioengineering Society (UCBS), Society of Women Engineers (SWE), and Indian Cultural Exchange (ICE) at Clemson. </h3>
      </div>
      
    </Layout>
  )
}

export default CampusPage