import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
//import { FaSearch } from "react-icons/fa"
//import TextHighlighter from "./highlight"
//import { Wrapper, ResultWrapper } from "./style"

const SearchResult = props => {
	// 全記事データ取得 //
	const tempData = useStaticQuery(graphql`
		query SearchData {
			allContentfulBlogArticleForSearch: allContentfulBlogArticle(sort: {fields: createdAt, order: DESC}, filter: {node_locale: {eq: "ja-JP"}}) {
				edges {
					node {
						title
						slug
						category
						contentMarkdown{
							contentMarkdown
						}
						tags {
							name
						}
						createdAt(formatString: "YYYY-MM-DD")
					}
				}
			}
		}
	`)
	const [data, setData] = useState([])
	useEffect(() => {
		const temp = []
		tempData.allContentfulBlogArticleForSearch.edges.map(e => {
			temp.push(e.node)
		})
		setData(temp)
	}, [])

	// 表示非表示の切り替え //
	const [className, setClassName] = useState("")
	useEffect(() => {
		let id
		if (props.focus && props.value !== "") {
			id = setTimeout(() => {
				setClassName("active")
			}, 100)
		} else {
			id = setTimeout(() => {
				setClassName("")
			}, 100)
		}
		return () => {
			clearTimeout(id)
		}
	}, [props.focus, props.value])

	// 検索処理 //
	const [result, setResult] = useState([])
	const search = () => {
		const value = props.value.toLowerCase()
		const temp = data.filter(e => {
			const target = `
				${e.title.toLowerCase()}
				${e.contentMarkdown.contentMarkdown.toLowerCase()}
			`
			return target.indexOf(value) !== -1
		})
		setResult(temp)
	}
	const searchAll = () => {
		const value = ""
		const temp = data.filter(e => {
			const target = `
				${e.title.toLowerCase()}
				${e.contentMarkdown.contentMarkdown.toLowerCase()}
			`
			return target.indexOf(value) !== -1
		})
		setResult(temp)
	}
	useEffect(() => {
		if (props.value !== "") {
			search()
		}else{
			searchAll()
		}
	}, [props.value])

	return (
		<div className={className}>
			<div className="result-inner">
				<span className="res">
					<b>{result.length}</b>件ヒットしました
				</span>
				<ul>
					{result && result.map(e => {
						return (
							<li key={e.slug}>
								<Link to={`/post/${e.slug}/`}>
									{/*<TextHighlighter str={e.title} includes={props.value} />*/}
									{e.title}
									{/*e.contentMarkdown.contentMarkdown*/}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

const Search = props => {
	const [focus, setFocus] = useState(false)
	const [value, setValue] = useState("")
	const onFocus = () => {
		setFocus(true)
	}
	const onBlur = () => {
		setFocus(false)
	}
	const onChange = e => {
		setValue(e.target.value)
	}
	return (
		<div className={props.className} focus={focus}>
			<input
				type="text"
				placeholder="Search..."
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
			/>
			<SearchResult focus={focus} value={value} />
		</div>
	)
}

export default Search