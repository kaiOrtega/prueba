import React, {Fragment} from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import background from "../images/background.jpg"
import '../styles/general.css'


const Image = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${background});
   background-size: cover;
   background-position: center;
   position: absolute;
   z-index: -1;
`

const Titulo = styled.div`
   color: white;
   font-weight: 200;
   font-family: sans-serif;
   font-size: 2em;
   padding-bottom: 10px;
   line-height: 1em;
`

const Main = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  padding: 40px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-family: Roboto;
  font-size: 1em;
  line-height: 1em;
  a {
    margin-top: 10px;
    color: white;
  }
  @media (max-width: 400px) {
    width: 90% !important;
    background: red;
  }
`

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Image />
    <Main>
      <Titulo>Blog design for Music</Titulo>
      <Link to="/page-2/">Go to page 2</Link>
    </Main>
  </Fragment>
)

export default IndexPage
