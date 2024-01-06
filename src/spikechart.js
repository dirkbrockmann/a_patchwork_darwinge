import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {fitness,newontheblock,agents} from "./model.js"
import {sumBy,meanBy,each} from "lodash-es"
import styles from "./styles.module.css"
import cmap from "./colormaps.js"


const C = d3.scaleOrdinal([0,cmap.batlowS.length-1]).range(cmap.batlowS)
	
const sc_x = d3.scaleLinear()
	.range([0, cfg.plot.spike_plot_width]);

const sc_y = d3.scaleSqrt()
	.range([0,-cfg.plot.spike_plot_height]);
	
const spike = (d) => { return "M"+sc_x(d.f)+","+sc_y(0)+"L"+sc_x(d.f)+","+sc_y(d.n); }	

const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const initialize = (controls,grid) => {

	sc_y.domain([0,sumBy(fitness,x=>x.n)])
	sc_x.domain(cfg.plot.spike_plot_domain)
	
	const pos=grid.position(cfg.plot.spike_plot_anchor.x,cfg.plot.spike_plot_anchor.y);		

	controls.select("#spikechart").remove()	

	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
		.attr("id","spikechart")
	
	plot.append("text").text(cfg.plot.spike_plot_xlabel)
		.attr("transform","translate("+sc_x(0)+","+25+")")
		.attr("class",styles.xlabel)
			
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	plot.selectAll("."+styles.spike).data(fitness).enter().append("path")	
		.attr("d",spike)
		.attr("class",styles.spike)
		.style("stroke",function(d,i){return C(i)})
		

}

const update = (controls) => {
	
	const N = sumBy(fitness,x=>x.n);
	const mf = sumBy(fitness,x=>(x.n*x.f))/N
	
	sc_x.domain([cfg.plot.spike_plot_domain[0]+mf,cfg.plot.spike_plot_domain[1]+mf])
	
	controls.select("#spikechart").select("."+styles.xaxis).call(xAxis)
	
	each(newontheblock,x=>{
		controls.select("#spikechart").append("circle")
			.attr("class",styles)
			.attr("transform","translate("+sc_x(x.f)+",0)")
			.attr("r",1)
			.style("fill",C(x.index))
			.style("opacity",0.7)
			.transition().duration(500)
			.attr("r",20)
			.style("opacity",0).remove()		
	})
	
	const olk = controls.select("#spikechart")
		.selectAll("."+styles.spike).data(fitness)
		.attr("class",styles.spike)
		.attr("d",spike)
		.style("stroke",function(d,i){return C(i)})

	olk.attr("d",spike)
	olk.enter().append("path")
		.attr("d",spike)
		.style("stroke",function(d,i){return C(i)})
		.attr("class",styles.spike)
		
}

export {initialize,update}

