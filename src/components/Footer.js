import React from 'react';

class Footer extends React.Component{
  instaClick() {
    window.location.assign('https://www.instagram.com/?hl=nb')
  }

  snapClick() {
    window.location.assign('https://www.snapchat.com/');
    }

  faceClick() {
    window.location.assign('https://nb-no.facebook.com/')
  }

  render() {
    return (
      <footer>
        <div 
          className="ui three item menu"
          style={{ 
            position: 'sticky',
            left: 0,
            bottom: 0,
            width: '100%'
            }}>
          <div className="ui vertical text menu">
            <div className="header item">About us</div>
            <div className="item">
              INSERT ADDRESS
            </div>
            <div className="item">
              sample@email.com
            </div>
            <div className="item">
              INSERT PHONE NUMBER
            </div>
          </div>
          <div className="ui vertical text menu">
            <div className="header item">WE ARE SIMPLY THE BEST IN MAKING BURGERS</div>
            <div className="item">
              <button 
              style={{
                color: 'black',
                backgroundColor: 'white',
                padding: 4
              }} 
              className="ui circular instagram icon button" 
              onClick={this.instaClick}
              >
                <i className="instagram icon" />
              </button>
              <button 
              style={{
                color: 'black',
                backgroundColor: 'white',
                padding: 4
              }} 
              className="ui circular facebook icon button" 
              onClick={this.faceClick}
              >
                <i className="facebook icon" />
              </button><button 
              style={{
                color: 'black',
                backgroundColor: 'white',
                padding: 4
              }} 
              className="ui circular snapchat icon button" 
              onClick={this.snapClick}
              >
                <i className="snapchat icon" />
              </button>
            </div>
          </div>
          <div className="ui vertical text menu">
            <div 
              className="header item"
              style={{
                margin: '-7.4px'
              }}>
              Opening hours
            </div>
            <div className="item">
              Monday-friday: 08:00 - 22:00
            </div>
            <div className="item">
              Saturday-Sunday: 10:00 - 22:00
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;