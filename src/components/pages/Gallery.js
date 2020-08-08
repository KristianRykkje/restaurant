import React from 'react';
import PicBurger from '../../images/PicBurger.jpg';
import Pic1 from '../../images/Pic1.jpg';
import Pic2 from '../../images/Pic2.jpg';
import Pic3 from '../../images/Pic3.jpg';
import Pic4 from '../../images/Pic4.jpg';


class Gallery extends React.Component {
    render() {
        return (
          <div className="ui two column grid">
            <div className="column">
              <div className="ui huge image">
                <img className="ui image" src={PicBurger} alt="alt" />
                <img className="ui image" src={Pic1} alt="alt" />
                <img className="ui image" src={Pic2} alt="alt" />
                <img className="ui image" src={Pic3} alt="alt" />
              </div>
            </div>
            <div className="column">
              <div className="ui huge image">
                <img className="ui image" src={Pic4} alt="alt" />
                <img className="ui image" src={PicBurger} alt="alt" />
                <img className="ui image" src={Pic2} alt="alt" />
                <img className="ui image" src={Pic1} alt="alt" />
              </div>
            </div>
          </div>
        );
    }
}

export default Gallery;