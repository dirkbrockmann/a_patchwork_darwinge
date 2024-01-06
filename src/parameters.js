// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:50,
		boundary:"dirichlet",
		initial_fitness:0,
		delta_fitness:1,
	
		mutation_rate: {
			range:[0,1e-4],
		default:0.5e-4
		},
		selectivity: {
			range:[0,2],
		default:1
		},
		long_range_dispersal:{
			range : [0,0.01],
			default : 0
		}
}

