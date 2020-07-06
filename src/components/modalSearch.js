import React from 'react';
import Modal from 'react-modal';
import Search from "../utils/search";
const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
 }
};

Modal.setAppElement('#___gatsby') //任意のアプリを設定する　create-react-appなら#root
class ModalSeach extends React.Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({modalIsOpen: true});
	}
	afterOpenModal() {
		this.subtitle.style.color = '#f00';
	}
	closeModal() {
		this.setState({modalIsOpen: false});
	}
	render() {
		return (
			<div>
				<button onClick={this.openModal} className="seachIcon"><i className="fas fa-search"></i></button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<h2 ref={subtitle => this.subtitle = subtitle}>記事を検索する</h2>
					<Search />
					<button onClick={this.closeModal}>close</button>
				</Modal>
			</div>
		);
	}
}
export default ModalSeach;