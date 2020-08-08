import React from 'react';
import PicBurger from '../../images/PicBurger.jpg';
import Pic1 from '../../images/Pic1.jpg';
import Pic2 from '../../images/Pic2.jpg';
import Pic3 from '../../images/Pic3.jpg';
import Pic4 from '../../images/Pic4.jpg';

class Menu extends React.Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={PicBurger}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className="column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>

                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={Pic1}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className="column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>

                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={Pic2}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className="column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>

                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={Pic3}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className="column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>

                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={Pic3}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className="column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>

                <div className="four column centered row">
                    <div className="column">
                        <img
                        src={Pic4}
                        className="image"
                        alt="alt"
                        />
                    </div>
                    <div className=" column">
                        <h3>INSERT NAME OF DISH, Nr.7734</h3>
                        <div>Her er ingrediensene</div>
                        <br />
                        <div>Here we write the english spesifications?</div>
                        <br />
                        <div>Allergener: Fisk, skjelldyr, boblefisk, egg</div>
                        <br />
                        <h4>138.00 kr</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;