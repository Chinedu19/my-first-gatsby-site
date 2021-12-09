import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My blog page">
            <p>My blog post will go here</p>
                {
                    data.allMdx.nodes.map(node =>(
                        <article key={node.name}>
                        <h2>
                          <Link to={`/blog/${node.slug}`}>
                          {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p>{node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`

export default BlogPage
