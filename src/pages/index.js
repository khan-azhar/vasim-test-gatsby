import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
 
  <Layout>
    <Seo title="Home" />
    <h1>FlipFlops USA</h1>
    <p>Welcome to your new Gatsby ecommmerce site.</p>
    
    <p>
      //<Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Products Page"</Link>
    </p>
  </Layout>
)

export default IndexPage
