// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Create a component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Freedom Rugs Home</p>
      <StaticImage
        alt="Freedom Rugs"
        src="../images/freedom-rugs-coming-soon.png"
      />
    </Layout>
  )
}

export default IndexPage;