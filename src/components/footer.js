import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, data }) => {
	const subCategories = data.subCategory.nodes;
	return (
	<footer className="footer-common">
		<div className="container">
			<div className="flex-row">
				<div className="flex-column-2">
					<p className="font-lemonde italic demi">Voyage</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Travel') {
								return (
									<li><Link to={name_en}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2">
					<p className="font-lemonde italic demi">Vie</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Life') {
								return (
									<li><Link to={name_en}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2">
					<p className="font-lemonde italic demi">Etudes</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Study') {
								return (
									<li><Link to={name_en}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2">
					<p className="font-lemonde italic demi">Travail</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Work') {
								return (
									<li><Link to={name_en}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2">
					<p className="font-lemonde italic demi">Divertissement</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Play') {
								return (
									<li><Link to={name_en}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2 footer-contact">
					<ul>
						<li><Link to="/contact">お問い合わせ</Link></li>
						<li><Link to="/terms">利用規約</Link></li>
						<li><Link to="/advertiser">広告掲載</Link></li>
						<li><Link to="/privacy">プライバシーポリシー</Link></li>
						<li><Link to="/aboutus">VOILAについて</Link></li>
					</ul>
				</div>
			</div>
			<div className="footer-common__copyright">Copyright © 2020 Doitsu News Digest GmbH. All Rights Reserved. Do not duplicate or redistribute in any form.</div>
		</div>
	</footer>
	)
}


export default function showFooter(props) {
	return (
		<StaticQuery
			query={graphql`
				query SubCategoryQuery {
					subCategory: allContentfulSubCategory {
						nodes {
							name_en
							name_ja
							parentCategory
						}
					}
				}
			`}
			render={data => <Footer data={data} {...props} />}
		/>
	)
}

Footer.propTypes = {
	data: PropTypes.shape({
		nodes: PropTypes.shape({
			name_en: PropTypes.string.isRequired,
			name_ja: PropTypes.string.isRequired,
			parentCategory: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
}


