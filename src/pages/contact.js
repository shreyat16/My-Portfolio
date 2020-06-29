import React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'
import mailtoLink from 'mailto-link'
import "./contact.css"

const ContactPage = () => {
  return(
    <Layout>
      <h1>Contact Me!</h1>
      <div>
        <h2><a href="https://www.facebook.com/shreya.thammana/">Link to my FaceBook</a></h2>
        <h2><a href="https://www.instagram.com/shreya_thammana/">Link to my Instagram</a></h2>
        <h2><a href="https://www.youtube.com/channel/UCV928BgjhuiNglyFRSYQYuw?pbjreload=101">Link to my YouTube</a></h2>
        <h2><a href="https://github.com/shreyat16">Link to my GitHub</a></h2>
        <h2 className="emailname"><a href={mailtoLink({to: 'shreyat@clemson.edu'})}>Send me an email</a></h2>
      </div>
      
    </Layout>
  )
}

export default ContactPage