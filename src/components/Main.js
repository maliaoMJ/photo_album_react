require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

let imgsData = require('../data/imagesData.json')

class ImgFigure extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
           <figure className="img-figure">
           	<img src={this.props.data.fileUrl}/>
           	<figcaption>
           		<h2 className="img-title">{this.props.data.title}</h2>
           	</figcaption>
           </figure>
			)
	}
}


class AppComponent extends React.Component {
  
  render() {
  var controllerUnits = [],
  imgFigures = [];
  imgsData.forEach((value) =>{
  	imgFigures.push(<ImgFigure key={value.key} data={value}/>)
  })
    return (

     <section className="stage">

       <section className="img-box">
            {imgFigures}
       </section>
       <nav className="control-box">
            {controllerUnits}
       </nav>

     </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
