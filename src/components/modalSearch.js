import React from 'react';
import Modal from 'react-modal';
import Search from "../utils/search";

Modal.setAppElement('#___gatsby') //public/htmlのid参照
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
		this.setState({ modalIsOpen: true });
		document.getElementsByTagName('html')[0].setAttribute('style', 'overflow-y: hidden;');

	}
	afterOpenModal() {
		//this.subtitle.style.color = '#f00';
	}
	closeModal() {
		this.setState({ modalIsOpen: false });
		document.getElementsByTagName('html')[0].setAttribute('style', 'overflow-y: scroll;');
	}
	render() {
		return (
			<div>
				<button onClick={this.openModal} className="seachIcon"><i className="fas fa-search"></i></button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Example Modal"
					className="modalSearchWindow"
					overlayClassName="modalSearchOverlay"
				>
					{/*<h2 ref={subtitle => this.subtitle = subtitle}>記事を検索する</h2>*/}
					<Search />
					<button onClick={this.closeModal}><i class="fas fa-times"></i></button>
				</Modal>
			</div>
		);
	}
}
export default ModalSeach;