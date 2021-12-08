import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My blog page">
            <p>My blog post will go here</p>
                {
                    data.allMdx.nodes.map(node =>(
                        <article key={node.name}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>{node.frontmatter.date}</p>
                        <MDXRenderer>{node.body}</MDXRenderer>
                        </article>
                    ))
                }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
        }
        id
        body
      }
    }
  }
`

export default BlogPage
