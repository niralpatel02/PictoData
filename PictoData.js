function Graph() {
	this.graph = undefined;
}
Graph.prototype = {

	bar: function(info) {

	    const largest_num = Math.max.apply(Math, info['Data'])

	    const barGraph = document.createElement('div')
	    barGraph.style.position = 'relative'
	    barGraph.style.width = '100%'
        barGraph.style.height = '100%'

        bars = document.createElement('div')
        bars.style.width = info['width'] + 'px'
        bars.style.height = (info['height']-20) + 'px'
        bars.style.borderLeft = 'solid #000000'
        bars.style.borderBottom = 'solid #000000'

        labels = document.createElement('div')
        labels.style.height = '20px'
        labels.style.width = info['width']

	    info['Data'].forEach(function(value, index){
            bar = document.createElement('div')
	        bar.style.width = (info['width']/(info['Data'].length + 1)) + 'px'
	        bar.style.height = ((info['height']-20)*(info['Data'][index]/largest_num))+ 'px'
	        bar.style.backgroundColor = info['colours'][index]

	        container = document.createElement('div')
	        container.style.position = 'absolute'
	        container.style.bottom = '20px'
	        container.style.marginLeft = (index*(info['width']/info['Data'].length)) + 'px'
            container.style.float = 'left'
	        container.append(bar)

	        hover = document.createElement('span')
	        hover.style.position = 'absolute'
	        hover.style.visibility = 'hidden'
	        hover.style.width = '50px'
	        hover.style.bottom = ((info['height']-20)*(info['Data'][index]/largest_num))+ 10 + 'px'
	        hover.style.marginLeft = (info['width']/(info['Data'].length + 1))/4.5 + 'px'
	        hover.style.backgroundColor = 'black'
	        hover.style.color = '#fff'
	        hover.style.textAlign = 'center'
	        hover.style.zIndex = "1"
	        hover.innerHTML = info['Data'][index]
	        bar.append(hover)

	        bar.onmouseover = function(){
	            this.children[0].style.visibility = 'visible'
	        };

	        bar.onmouseout = function() {
              this.children[0].style.visibility = 'hidden'
            }

	        text = document.createTextNode(info['Labels'][index])
	        textDiv = document.createElement('div')
	        textDiv.style.position = 'absolute'
	        textDiv.style.marginLeft = (index*(info['width']/info['Data'].length)) + 'px'
	        textDiv.append(text)
	        labels.append(textDiv)

	        bars.append(container)
	        }
	    );
	    barGraph.append(bars)
	    barGraph.append(labels)
		info['Element'].append(barGraph)

        info['type'] = 'bar'
        this.graph = {'object': barGraph, 'info': info}
	},
	bubble: function(info){

	    const total = info['Data'].reduce(function(a, b){
	        return a+b;
	    })

        const bubbleChart = document.createElement('div')
        bubbleChart.style.width = '100%'
        bubbleChart.style.height = '100%'

        info['Data'].forEach(function(value, index){
            const circle = document.createElement('div')
            const size = (info['Data'][index]/total)*((info['width'] + info['height'])/2)
            circle.style.width = size + 'px'
            circle.style.height = size + 'px'
            circle.style.borderRadius = '50%'
            circle.style.backgroundColor = info['colours'][index]
            circle.style.float = 'left'
            circle.style.display = 'flex'
            circle.style.justifyContent = 'center'
            circle.style.alignItems = 'center'
            circle.innerHTML = info['Labels'][index]

            hover = document.createElement('span')
            hover.style.position = 'absolute'
            hover.style.visibility = 'hidden'
            hover.style.width = '50px'
            hover.style.backgroundColor = 'black'
            hover.style.color = '#fff'
            hover.style.textAlign = 'center'
            hover.style.zIndex = "1"
            hover.innerHTML = info['Data'][index]
            circle.append(hover)

            circle.onmouseover = function(){
                this.children[0].style.visibility = 'visible'
            };

            circle.onmouseout = function() {
                this.children[0].style.visibility = 'hidden'
            }

            bubbleChart.append(circle)
        })

        info['Element'].append(bubbleChart)
        info['type'] = 'bubble'
        this.graph = {'object': bubbleChart, 'info': info}

	},

	addData: function(info){
	    this.graph['info']['Data'] = this.graph['info']['Data'].concat(info['Data'])
	    this.graph['info']['Labels'] = this.graph['info']['Labels'].concat(info['Labels'])
	    this.graph['info']['colours'] = this.graph['info']['colours'].concat(info['colours'])
	    this.graph['info']['Element'].removeChild(this.graph['object'])
	    if (this.graph['info']['type'] === 'bar'){
	        this.bar(this.graph['info'])
	    }
	    else {
	        this.bubble(this.graph['info'])
	    }
	},

	removeData: function(num){
	    this.graph['info']['Data'] = this.graph['info']['Data'].filter((element) => this.graph['info']['Data'].indexOf(element) !== num)
	    this.graph['info']['Labels'] = this.graph['info']['Labels'].filter((element) => this.graph['info']['Labels'].indexOf(element) !== num)
	    this.graph['info']['colours'] = this.graph['info']['colours'].filter((element) => this.graph['info']['colours'].indexOf(element) !== num)
	    this.graph['info']['Element'].removeChild(this.graph['object'])
	    if (this.graph['info']['type'] === 'bar'){
            this.bar(this.graph['info'])
        }
        else {
            this.bubble(this.graph['info'])
        }
	}
}