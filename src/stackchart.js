import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {fitness,agents,series} from "./model.js"
import {sumBy,meanBy,each,keys} from "lodash-es"
import styles from "./styles.module.css"
import cmap from "./colormaps.js"


const C = d3.scaleOrdinal([0,cmap.batlowS.length-1]).range(cmap.batlowS)
	
const sc_x = d3.scaleLinear()
	.range([0, cfg.plot.spike_plot_width])
	.clamp(true);

const sc_y = d3.scaleLinear()
	.range([-cfg.plot.stack_plot_height,0])
	.clamp(true)
	
const line = d3.line()
    .x(function(d) { return sc_x(d.t); })
    .y(function(d) { return sc_y(d.n); });
	
const area = d3.area()
    .x(d => sc_x(d.t))
    .y0(d => sc_y(d.n0))
    .y1(d => sc_y(d.n1));


const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const initialize = (controls,grid) => {

	sc_x.domain(cfg.plot.stack_plot_domain);
	sc_y.domain([0,agents.length]);
	const pos=grid.position(cfg.plot.stack_plot_anchor.x,cfg.plot.stack_plot_anchor.y);		

	controls.select("#stackchart").remove()	
	
	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
		.attr("id","stackchart")
	
	plot.append("text").text(cfg.plot.stack_plot_xlabel)
		.attr("transform","translate("+sc_x(cfg.plot.stack_plot_domain[1]/2)+","+25+")")
		.attr("class",styles.xlabel)
			
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	each(fitness,s=>{
		plot.append("path").datum(series[s.index]).attr("d",area)
			.style("stroke",C(s.index))
			.attr("id","s"+s.index)
			.style("fill",C(s.index))
			.style("stroke",C(s.index))
	})
}

const update = (controls) => {
	if(param.tick>cfg.plot.stack_plot_domain[1]){
		
		sc_x.domain([param.tick-cfg.plot.stack_plot_domain[1],param.tick])
		
	}
	each(keys(series),s=>{
		const murre = controls.select("#stackchart").select("#s"+s).empty();
		if(murre){
			controls.select("#stackchart").append("path").datum(series[s]).attr("d",area)
				.style("fill",C(s))
				.style("stroke",C(s))
				.attr("id","s"+s)
		} else {
			
		}
		controls.select("#stackchart")
				.select("#s"+s).datum(series[s]).attr("d",area)	
	})
	controls.select("#stackchart").select("."+styles.xaxis).call(xAxis)

	
}

export {initialize,update}