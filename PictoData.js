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
        barGraph.style.borderLeft = 'solid #000000'
        barGraph.style.borderBottom = 'solid #000000'

        bars = document.createElement('div')
        bars.style.width = info['width'] + 'px'
        bars.style.height = (info['height']-20) + 'px'
        bars.style.marginBottom = '20px'

        labels = document.createElement('div')
        labels.style.height = '20px'
        labels.style.width = info['width']
        labels.style.paddingTop = '10px'

	    info['Data'].forEach(function(value, index){
            bar = document.createElement('div')
	        bar.style.width = '40px'
	        bar.style.height = ((info['height']-20)*(info['Data'][index]/largest_num))+ 'px'
	        bar.style.backgroundColor = info['colours'][index]

	        container = document.createElement('div')
	        container.style.position = 'absolute'
	        container.style.bottom = '0px'
	        container.style.marginLeft = (index*(info['width']/info['Data'].length)) + 'px'
            container.style.float = 'left'
	        container.append(bar)

	        hover = document.createElement('span')
	        hover.style.position = 'absolute'
	        hover.style.visibility = 'hidden'
	        hover.style.width = '50px'
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

        this.graph = {'object': barGraph, 'info': info}
	},

	addData: function(info){
	    this.graph['info']['Data'] = this.graph['info']['Data'].concat(info['Data'])
	    this.graph['info']['Labels'] = this.graph['info']['Labels'].concat(info['Labels'])
	    this.graph['info']['colours'] = this.graph['info']['colours'].concat(info['colours'])
	    this.graph['info']['Element'].removeChild(this.graph['object'])
	    this.bar(this.graph['info'])
	},

	removeData: function(num){
	    this.graph['info']['Data'] = this.graph['info']['Data'].filter((element) => this.graph['info']['Data'].indexOf(element) !== num)
	    this.graph['info']['Labels'] = this.graph['info']['Labels'].filter((element) => this.graph['info']['Labels'].indexOf(element) !== num)
	    this.graph['info']['colours'] = this.graph['info']['colours'].filter((element) => this.graph['info']['colours'].indexOf(element) !== num)
	    this.graph['info']['Element'].removeChild(this.graph['object'])
	    this.bar(this.graph['info'])
	}
}