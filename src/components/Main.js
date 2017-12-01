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
           <figure  className="img-figure">
           	<img src={this.props.data.fileUrl}/>
           	<figcaption>
           		<h2 className="img-title">{this.props.data.title}</h2>
           	</figcaption>
           </figure>
			)
	}
}


class AppComponent extends React.Component {
	constructor(props){
     super(props)
    // 图片位置取值范围
   this.Constant={
  	centerPos: {
  		left: 0,
  		right: 0
  	},
  	hPosRange: {
  		leftSecX: [0,0],
  		rightSecx: [0,0],
  		y: [0,0]
  	},
  	vPosRange: {
  		x: [0, 0],
  		topY: [0, 0]
  	}
  }
     this.state = {imgsArrangeArr:[]}
	}
	rearrage(centerIndex){

	}

  componentDidMount(){
   //获取舞台的DOM
   let stageDom = this.refs.stage
   
   let stageW = stageDom.scrollWidth
   let stageH = stageDom.scrollHeight
   let halfStageW = Math.ceil(stageW / 2)
   let halfStageH = Math.ceil(stageH / 2)
   // 获取imgFigure DOM
   let imgFigureDom = this.refs.imgFigure0
   let imgW = imgFigureDom.scrollWidth
   let imgH = imgFigureDom.scrollHeight
   let halfImgW = Math.ceil(imgW / 2)
   let halfImgH = Math.ceil(imgH / 2)
   //计算中心
   this.Constant.centerPos.left = halfStageW - halfImgW
   this.Constant.centerPos.right = halfStageH - halfImgH
   //计算左侧
   this.Constant.hPosRange.leftSecX[0] = -halfImgW
   this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3
   //计算右侧
   this.Constant.hPosRange.rightSecx[0] = halfStageW - halfImgW
   this.Constant.hPosRange.rightSecx[1] = stageW - halfImgW
   this.Constant.hPosRange.y[0] = -halfImgH
   this.Constant.hPosRange.y[1] =stageH - halfImgH
   //计算上侧
   this.Constant.vPosRange.topY[0] = -halfImgH
   this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3
   this.Constant.vPosRange.x[0] = halfImgW - imgW
   this.Constant.vPosRange.x[1] = halfImgW

   this.rearrage(0)

  }
  render() {
  var controllerUnits = [],
  imgFigures = [];
  imgsData.forEach((value, index) =>{
  	if(!this.state.imgsArrangeArr[index]){
  		this.state.imgsArrangeArr[index] = {
  			pos:{
  				left:0,
  				top:0
  			}
  		}
  	}
  	imgFigures.push(<ImgFigure key={value.key} data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]}/>)
  })
    return (

     <section className="stage" ref="stage">

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
