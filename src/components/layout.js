/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider }from "styled-components";

import SEO from "./seo"

// Styled components theme
import theme from '../utils/theme';
import GlobalStyles from '../utils/globals';


import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Header/>
          <SEO title="React test"/>
          <div>{children}</div>
         <GlobalStyles/>
       </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
