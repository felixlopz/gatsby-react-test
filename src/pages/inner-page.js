import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from '../utils/grid';


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />    
    <Container>
     	<h1>this is second page </h1>
     	<p>This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description.
     	</p>
     	<Link to="/">Go back to the homepage</Link>
  	</Container>
  </Layout>
)

export default SecondPage
