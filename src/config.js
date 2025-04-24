// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 220,
		slider_show: true,
		slider_gap : 1.75,
		slider_girth: 10,
		slider_knob:14,
		slider_anchor: {x:5.5,y:1.25},
		toggle_anchor: {x:7,y:4},
		toggle_label_pos:"right",
		playbutton_size: 120,
		playbutton_anchor:{x:2,y:2},
		backbutton_anchor:{x:3,y:4.5},
		resetbutton_anchor:{x:1,y:4.5},
		radio_anchor:{x:7,y:2},
		radio_size:150,
		radio_orientation:"horizontal",
		radio_label_position:"top",
		radio_shape:"rect",
	},
	plot:{
		spike_plot_width:400,
		spike_plot_height:75,
		spike_plot_domain:[-10,10],
		spike_plot_anchor:{x:1,y:8},
		spike_plot_xlabel:"fitness",
		stack_plot_anchor:{x:1,y:11},
		stack_plot_width:400,
		stack_plot_height:75,
		stack_plot_domain:[0,500],
		stack_plot_xlabel:"time"		
	},
	simulation: {
		delay:10
	}
}