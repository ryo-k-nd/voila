import React from 'react';
import Modal from 'react-modal';
import { Link } from "gatsby"
import icon_mail_w from '../images/top/icon-newsletter-w.svg';

Modal.setAppElement('#___gatsby') //public/htmlのid参照

class SpMenu extends React.Component {

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
        document.getElementsByClassName('ReactModalPortal')[0].classList.add('is-show');
        //document.getElementsByClassName('ReactModal__Overlay')[0].classList.add('is-showL');

    }
    afterOpenModal() {
        //this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
        document.getElementsByTagName('html')[0].setAttribute('style', 'overflow-y: scroll;');
        //document.getElementsByClassName('ReactModal__Overlay')[0].classList.remove('is-showL');
        document.getElementsByClassName('ReactModalPortal')[0].classList.remove('is-show');
    }
    render() {
        return (
            <div className="header-sp-menu for-sp">
                <button onClick={this.openModal}>
                    <div className="header-sp-menu__ham" id="sp-menu-ham"></div>
                </button >
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="modalSearchWindow"
                    overlayClassName="modalSearchOverlay modalHam"
                >
                    <button onClick={this.closeModal}><i class="fas fa-times"></i></button>
                    <div className="header-left flex-row" id="sp-modal-ham">
                        <div id="sp-weather">

                        </div>
                        <div className="header-navi flex-row">
                            <div className="header-navi-text">
                                <Link to="/travel/">
                                    <span className="header-navi-text__ja">旅する</span>
                                    <span className="header-navi-text__fr font-lemonde italic regular">Voyage</span>
                                </Link>
                            </div>
                            <div className="header-navi-text">
                                <Link to="/life/">
                                    <span className="header-navi-text__ja">暮らす</span>
                                    <span className="header-navi-text__fr font-lemonde italic regular">Vie</span>
                                </Link>
                            </div>
                            <div className="header-navi-text">
                                <Link to="/study/">
                                    <span className="header-navi-text__ja">学ぶ</span>
                                    <span className="header-navi-text__fr font-lemonde italic regular">Études</span>
                                </Link>
                            </div>
                            <div className="header-navi-text">
                                <Link to="/work/">
                                    <span className="header-navi-text__ja">働く</span>
                                    <span className="header-navi-text__fr font-lemonde italic regular">Travail</span>
                                </Link>
                            </div>
                            <div className="header-navi-text">
                                <Link to="/play/">
                                    <span className="header-navi-text__ja">遊ぶ</span>
                                    <span className="header-navi-text__fr font-lemonde italic regular">Divertissement</span>
                                </Link>
                            </div>
                        </div>
                        <Link to="/newsletter" className="header-link__newsletter"><img src={icon_mail_w}></img></Link>
                    </div>
                </Modal>
            </div>
        );
    }
}




export default SpMenu;