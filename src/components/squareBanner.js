import PropTypes from "prop-types"
import React, { useLayoutEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SquareBanner = ({ data }) => {
    const Updates = data.contentfulPageUpdateSide;
    return (
        <div className="square-banner">
            {Updates.bannerSquareImage !== null
                && <a href={Updates.bannerSquare && Updates.bannerSquare} target="_blank" rel="noreferrer"><Img fluid={Updates.bannerSquareImage.fluid} alt="square bunner" className="thumbnail" /></a>
            }
        </div>
    )
}

export default function showSquareBanner(props) {
    return (
        <StaticQuery
            query={graphql`
				query BlogArticleQuerySquareBanner {
					contentfulPageUpdateSide: contentfulPageUpdate(id: {eq: "fa14f0f7-c808-5d1f-a88f-c90238cb9530"}, node_locale: {eq: "ja-JP"}) {
						bannerSquare
						bannerSquareImage {
							file {
								url
							}
							fluid(maxWidth: 300) {
								...GatsbyContentfulFluid_withWebp
							}
						}
					}
				}
			`}
            render={data => <SquareBanner data={data} {...props} />}
        />
    )
}

SquareBanner.propTypes = {
    data: PropTypes.shape({
        bannerSquare: PropTypes.string.isRequired,
        bannerSquareImage: PropTypes.shape({
            file: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}


