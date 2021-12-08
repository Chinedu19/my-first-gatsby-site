import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following gatsby Docs. Wow I'm learing from documentation</p>
      <StaticImage
      src="https://ateenprogrammer.com/wp-content/uploads/2021/12/photo1638584119-e1638584296462-768x1076.jpeg"
      alt="A nice image of chinedu"
      />
    </Layout>
  )
}

export default IndexPage
