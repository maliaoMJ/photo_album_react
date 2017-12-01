require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';



class AppComponent extends React.Component {
  render() {
    return (

     <section className="stage">
       <section className="img-box"></section>
       <nav className="control-box"></nav>

     </section>
    
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
