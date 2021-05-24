// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  },
  allMagentoProduct:{
    edges
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>FlipFlops USA</h1>
    
     {data.allMagentoProduct.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.id}>
                <h2>{node.name}</h2>
              </Link>
              <h3>{node.sku}</h3>
            </div>
          ))}
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
}
