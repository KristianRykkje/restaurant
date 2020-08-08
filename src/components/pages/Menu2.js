import React from 'react';
import MenuPic from '../../images/MenuPic.jpg';

class Menu2 extends React.Component{
    render() {
        return (
            <div className="ui two centered column grid">
                    <div className="row">
                        <br />
                    </div>
                    <img src={MenuPic} alt="alt" />
                    <div className="row">
                        <br />
                    </div>
            </div>
        );
    }
}

export default Menu2;