import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My blog page">
            <p>My blog post will go here</p>
            <ul>
                {
                    data.allFile.nodes.map(node =>(
                        <li key={node.name}>{node.name}</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
