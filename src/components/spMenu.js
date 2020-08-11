import React from 'react';

class SpMenu extends React.Component {
    constructor() {
        super();
        this.state = { isToggleOn: true };
        this.SpMenu = this.SpMenu.bind(this);
    }

    SpMenu() {
        var SpMenuHam = document.getElementById('sp-menu-ham');

        document.getElementById('sp-menu').classList.toggle('sp-menu__open');
        SpMenuHam.classList.toggle('menu-close');

        if (SpMenuHam.classList.contains('menu-close') == true) {
            document.getElementsByTagName('html')[0].setAttribute('style', 'overflow-y: hidden;');
        } else {
            document.getElementsByTagName('html')[0].setAttribute('style', 'overflow-y: scroll;');
        }

    }

    render() {
        return (
            <button onClick={this.SpMenu} className="header-sp-menu for-sp">
                <div className="header-sp-menu__ham" id="sp-menu-ham"></div>
            </button>
        );
    }
}
export default SpMenu;