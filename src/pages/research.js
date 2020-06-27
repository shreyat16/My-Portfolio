import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import "./research.css"

const ResearchPage = () => {
  return(
    <Layout>
      <h1>During my time at Clemson University, I have taken part in a couple of research initiatives.</h1>
      <div className="eureka2020">
        <h1 className="title">Clemson University EUREKA! 2020 Program</h1>
        <h3>I am one of the counselors for EUREKA! 2020. This summer, I will be developing and running EUREKA! 2020 in collaboration with faculty and staff for 30 participants. I will also be conducting computational cardiovascular research through the Mechanical Engineering Deptartment.</h3>
        <img className='bio' src={require("../images/bio.png")} />
      </div>
      <div className="eureka2019">
        <h1 className="title">Clemson University EUREKA! 2019 Program</h1>
        <h3>As part of the EUREKA 2019 program, I conducted research in the Chemical and Biomolecular Engineering Deptartment at Clemson where I synthesized cellulose nanocrystals and investigated their liquid phase properties.</h3>
        <h3>This is the poster that I created and presented at the annual EUREKA! poster forum:</h3>
        <a className='postertitle' href='https://drive.google.com/file/d/1Qn9KngNcfV5sFvYi239KY3ymedwE-QxT/view?usp=sharing' target='_blank'>Click Here for PDF Version</a>
        <img className='posterImage1' src={require("../images/poster.jpg")} />
        <img className='posterImage2' src={require("../images/research.jpg")} />
      </div>
      <div className="creativeinquiry">
        <h1 className="title">Clemson Creative Inquiry Program</h1>
        <h3>During my first semester at Clemson, I participated in the Creative Inquiry program. I was a team member of the Creative Inquiry group working at the Bob and Betsy Campbell Museum of Natural History. As part of this research group, I identified and collected data and photographs of taxidermy specimens so that this data could be made available to future researchers.</h3>
        <img className='birdsimage1' src={require("../images/birdsimage1.jpg")} />
        <img className='birdsimage2' src={require("../images/birdsimage2.jpg")} />
      </div>
    </Layout>
  )
}

export default ResearchPage