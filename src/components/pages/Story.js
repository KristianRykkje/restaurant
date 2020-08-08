import React from 'react';
import Pic from '../../images/pic.jpg';

class Story extends React.Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <h1>
                    Our Story
                </h1>
                <div className="row">
                    <div>
                        We have always made the best possible food for our costumers. 
                        <br />
                        Somtimes it is a fish dish and sometimes it is a meat dish
                        <br />
                        Jose started the resturant in 1986 and by then it was only he and his wife working there.
                    </div>
                </div>
                <div className="row">
                    <div className="small image">
                            <img src={Pic} alt="alt" />
                    </div>
                </div>
            </div>            
        );
    }
}

export default Story;