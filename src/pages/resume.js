import React from "react"
import Layout from "../components/layout"
import './resume.css'

const ResumePage = () => {
  return(
    <Layout>
      <div className='resumeContainer'>
                <a className='resumetitle' href='https://drive.google.com/file/d/1Qn9KngNcfV5sFvYi239KY3ymedwE-QxT/view?usp=sharing' target='_blank'>Click Here for PDF Version</a>
                <img className='resumeImage' src={require("../images/resume.png")} />
      </div>
    </Layout>
  )
}

export default ResumePage