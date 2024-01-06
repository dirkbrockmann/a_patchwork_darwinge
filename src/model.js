// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {find,filter,each,range,map,mean,shuffle,sample,meanBy,sumBy} from "lodash-es"
//import {rad2deg,deg2rad} from "./utils"
import {hex} from "lattices"
import random from 'random'

var agents = [];
var newontheblock = [];
var N_species;
var fitness = [];
var series = {};
const sigma = param.delta_fitness;
const rd = random.normal(0,sigma);

const initialize = () => {
	
	newontheblock = [];
	fitness = [];
	series = {};

	param.timer={}; param.tick=0;
	
	const s = hex(param.N).boundary(param.boundary)
	agents = s.nodes;
	N_species = 1;
	
	each(agents,a=>{
		a.fitness=param.initial_fitness;
		a.index=0;
	})
	
	fitness.push({index:N_species-1,f:0,n:agents.length})
	
	series[N_species-1]=[{t:param.tick,n0:0,n1:agents.length}];
	
	//console.log(series)
	//console.log(fitness)
	//console.log(fitness)
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	newontheblock = []
	
	const mu = param.mutation_rate.widget.value();

	agents=shuffle(agents);
	
	each(agents,a=>{
		if(Math.random() < mu){
			let ff = find(fitness,f=>f.index==a.index);
			ff.n--;
			
			// fitness[a.index].n = fitness[a.index].n - 1;
 			N_species++;
	  		a.index=N_species-1;
			a.fitness+=rd();
	 		fitness.push({index:a.index,f:a.fitness,n:1})
// 			fitness[a.index]={f:a.fitness,n:1};
 			newontheblock.push({index:a.index,f:a.fitness});
		}
	})
	
	each(agents,a=>{
		
		let target =sample(a.neighbors);

		if(Math.random()<param.long_range_dispersal.widget.value()){
			target = sample(agents);
		}

		const f1 = a.fitness;
		const f2 = target.fitness;
		const z = 1.0 / (1.0 + Math.exp ( - param.selectivity.widget.value() * (f1 - f2) ))

		const ff = find(fitness,f=>f.index==a.index);
		const ft = find(fitness,f=>f.index==target.index);

		if (Math.random()<z){
			ff.n++;
			ft.n--;
			target.index = a.index;
			target.fitness = a.fitness;
		} else {
			ff.n--;
			ft.n++;
			a.index = target.index;
			a.fitness = target.fitness;
		}

		
	})
	
	fitness=filter(fitness,f=>f.n>0);
	
	each(fitness,f=>{
		const below = filter(fitness,q=>q.index<f.index);
		let mork=0;
		if (below.length>0){

			mork = sumBy(below,x=>x.n);

		}
		
		if (typeof series[f.index] == "undefined") {
			series[f.index]=[{t:param.tick,n0:mork,n1:mork+f.n}];
		} else {
			series[f.index].push({t:param.tick,n0:mork,n1:mork+f.n})			
		}
	})

}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {newontheblock,fitness,agents,initialize,go,update,series}
