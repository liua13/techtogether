import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Dropdown from "./subcomponents/dropdown";
import byteViolet from "../images/byteViolet.png";
import bytePurple from "../images/bytePurple.png";
import byteTan from "../images/byteTan.png";
import byteBlue from "../images/byteBlue.png";
import byteLilac from "../images/byteLilac.png";
import bytePink from "../images/bytePink.png";

const byteData = [
    {
        "image": byteViolet,
        "header": "Become a Sponsor",
        "body": ""
    },
    {
        "image": bytePurple,
        "header": "Register to Hack",
        "body": ""
    },
    {
        "image": byteTan,
        "header": "Resource Request",
        "body": ""
    },
    {
        "image": byteBlue,
        "header": "Mentor Hackers",
        "body": ""
    },
    {
        "image": byteLilac,
        "header": "Host a Workshop",
        "body": ""
    },
    {
        "image": bytePink,
        "header": "Judge Projects",
        "body": ""
    }
];

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      className={className}
      fluid={imageData}
    //   backgroundColor={`#040e18`}
    >
        <section id="getInvolved">
            <div className="getInvolvedSubcontainer">
                <h2>Get Involved</h2>

                <div className="getInvolvedBody">
                    {byteData.map((data) => (
                        <div className="getInvolvedComponent">
                            <div className="byteImages">
                                <img src={data.image} alt="byte-images" style={{width: 80}}/>
                            </div>
                            <Dropdown
                                header={data.header}
                                body={data.body}
                                key={data.header}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    </BackgroundImage>
  )
}

const GetInvolved = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default GetInvolved;