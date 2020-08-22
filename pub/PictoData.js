"use strict"; // always need a semicolon before an IIFE

(function(global) { // the window object serves as the global object in the browser.

    function PictoData() {
        this.graph = undefined;
    }
    PictoData.prototype = {

        bar: function(info) {

            const largest_num = Math.max.apply(Math, info['Data'])

            const barGraph = document.createElement('div')
            barGraph.style.position = 'relative'
            barGraph.style.width = '100%'
            barGraph.style.height = '100%'

            const bars = document.createElement('div')
            bars.style.width = info['width'] + 'px'
            bars.style.height = (info['height']-20) + 'px'
            bars.style.borderLeft = 'solid #000000'
            bars.style.borderBottom = 'solid #000000'

            const labels = document.createElement('div')
            labels.style.height = '20px'
            labels.style.width = info['width']

            info['Data'].forEach(function(value, index){
                const bar = document.createElement('div')
                bar.style.width = (info['width']/(info['Data'].length + 1)) + 'px'
                bar.style.height = ((info['height']-20)*(info['Data'][index]/largest_num))+ 'px'
                bar.style.backgroundColor = info['colours'][index]

                const container = document.createElement('div')
                container.style.position = 'absolute'
                container.style.bottom = '20px'
                container.style.marginLeft = (index*(info['width']/info['Data'].length)) + 'px'
                container.style.float = 'left'
                container.append(bar)

                const hover = document.createElement('span')
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

                const text = document.createTextNode(info['Labels'][index])
                const textDiv = document.createElement('div')
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
            bubbleChart.id = 'bubbleChart'
            bubbleChart.style.width = info['width'] + 'px'
            bubbleChart.style.height = info['height'] + 'px'

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

                const hover = document.createElement('span')
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
        word: function(info){

            const total = info['Data'].reduce(function(a, b){
                return a+b;
            })

            const wordChart = document.createElement('div')
            wordChart.style.width = info['width'] + 'px'
            wordChart.style.height = info['height'] + 'px'

            info['Data'].forEach(function(value, index){
                const word = document.createElement('p')
                let size = (info['Data'][index]/total) * ((info['width'] + info['height'])/3)
                if (size > 150) {
                    size =150
                }
                word.style.fontSize = size + 'px'
                word.style.color = info['colours'][index]
                word.style.float = 'left'
                word.style.display = 'flex'
                word.style.margin = 0
                word.style.justifyContent = 'center'
                word.style.alignItems = 'center'
                word.innerHTML = info['Labels'][index]

                const hover = document.createElement('p')
                hover.style.marginBottom = '80px'
                hover.style.position = 'absolute'
                hover.style.fontSize = '14px'
                hover.style.visibility = 'hidden'
                hover.style.width = '50px'
                hover.style.backgroundColor = 'black'
                hover.style.color = '#fff'
                hover.style.textAlign = 'center'
                hover.style.zIndex = "1"
                hover.innerHTML = info['Data'][index]
                word.append(hover)

                word.onmouseover = function(){
                    this.children[0].style.visibility = 'visible'
                };

                word.onmouseout = function() {
                    this.children[0].style.visibility = 'hidden'
                }

                wordChart.append(word)
            })
            info['Element'].append(wordChart)
            info['type'] = 'word'
            this.graph = {'object': wordChart, 'info': info}

        },
        addData: function(info){
            this.graph['info']['Data'] = this.graph['info']['Data'].concat(info['Data'])
            this.graph['info']['Labels'] = this.graph['info']['Labels'].concat(info['Labels'])
            this.graph['info']['colours'] = this.graph['info']['colours'].concat(info['colours'])
            this.graph.object.remove()
            if (this.graph['info']['type'] === 'bar'){
                this.bar(this.graph['info'])
            }
            else if (this.graph['info']['type'] === 'bubble'){
                this.bubble(this.graph['info'])
            }
            else {
                this.word(this.graph['info'])
            }
        },

        removeData: function(num){
            this.graph['info']['Data'] = this.graph['info']['Data'].filter((element) => this.graph['info']['Data'].indexOf(element) !== num)
            this.graph['info']['Labels'] = this.graph['info']['Labels'].filter((element) => this.graph['info']['Labels'].indexOf(element) !== num)
            this.graph['info']['colours'] = this.graph['info']['colours'].filter((element) => this.graph['info']['colours'].indexOf(element) !== num)
            this.graph.object.remove()
            if (this.graph['info']['type'] === 'bar'){
                this.bar(this.graph['info'])
            }
            else if (this.graph['info']['type'] === 'bubble'){
                this.bubble(this.graph['info'])
            }
            else {
                this.word(this.graph['info'])
            }
        },

        createLegend: function(element){
            const table = document.createElement('table')
            const labels = this.graph.info.Labels

            this.graph.info.colours.forEach( function(value, index) {
                const row = document.createElement('tr')
                const column1 = document.createElement('td')
                column1.style.backgroundColor = value
                column1.innerHTML = 'HI'
                const column2 = document.createElement('td')
                column2.innerHTML = labels[index]
                row.append(column1)
                row.append(column2)

                table.append(row)
            })
            element.append(table)
        }
    }
	global.PictoData = global.PictoData || PictoData

})(window); // pass the window object to the anonymous functions. Can also pass other global functions like jQuery.