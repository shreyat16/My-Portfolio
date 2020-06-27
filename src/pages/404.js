import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// import './404.css'

const LostPage = () => {
    return (
        <Layout>
            <h1 className="LostPage-title">Page Not Found</h1>
            <p>
                <Link className="LostPage-link" to='/'>Return to site</Link>
            </p>
        </Layout>
    )
}

export default LostPage