import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)
  return(
    <header className={headerStyles.header}>
      <h1>
        <Link className = {headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
          <ul className={headerStyles.navlist}>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/">Home</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/introduction">Introduction</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/research">Research</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/campus">Campus Involvement</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/blog">Projects</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/resume">Resume</Link></li>
              <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activenavItem} to="/contact">Contact</Link></li>    
          </ul>
      </nav>
    </header>
  )
}

export default Header