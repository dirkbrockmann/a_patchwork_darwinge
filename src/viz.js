import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cmap from "./colormaps.js"
import {each} from "lodash-es"

var ctx,dL,W,H;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

const C = d3.scaleOrdinal([0,cmap.batlowS.length-1]).range(cmap.batlowS)

const draw_path = (agents) => {
	
	agents.forEach(d=>{
		const c = d.cell();
		const l = c.length;

		const color = C(d.index);

		ctx.fillStyle=color;
		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();

		ctx.closePath();
	})
}

const initialize = (display,config) => {
	
	W = config.display_size.width;
 	H = config.display_size.height;

 	X.range([0,W]);
 	Y.range([0,H]);
	
 	ctx = display.node().getContext('2d');
 	ctx.translate(0.5, 0.5);
 	ctx.clearRect(0, 0, W, H);
	
	draw_path(agents)
	draw_path(agents)

};


const go = (display,config) => {
	
	draw_path(agents)
}

const update = (display,config) => {}


export {initialize,go,update}
