"use strict";

document.addEventListener('DOMContentLoaded', function() {
	const a = new Graph()
    a.bar({
        'Element': document.getElementById("bar"),
        'Data': [45, 10, 34, 65],
        'Labels': ['Apples', 'Oranges', 'Pears', 'Pineapple'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })
    a.addData({
        'Data': [26, 80],
        'Labels': ['Banana', 'Beet'],
        'colours': ['Yellow', 'Purple']
    })
    a.removeData(1)

    var b = new Graph()
    b.bubble({
        'Element': document.getElementById("bubble"),
        'Data': [45, 10, 34, 65],
        'Labels': ['Apples', 'Oranges', 'Pears', 'Pineapple'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })
    b.addData({
        'Data': [26],
        'Labels': ['Banana'],
        'colours': ['Yellow']
    })
    b.removeData(3)

})

