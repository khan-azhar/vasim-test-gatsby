import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  const data = this.props.data
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
        {data.allMagentoProduct.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.id}>
                <h2>{node.name}</h2>
              </Link>
              <h3>{node.sku}</h3>
            </div>
          ))}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query {
    allMagentoProduct {
        edges {
        node {
            id
            sku
            name
            
        }
        }
    }
    allMagentoStoreConfig {
    edges {
      node {
        id
        code
        website_id
        locale
        base_currency_code
      }
    }
    }
  }
`
