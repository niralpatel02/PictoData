"use strict";

document.addEventListener('DOMContentLoaded', function() {
	const a = new Graph()
    a.bar({
        'Element': document.getElementById("bar"),
        'Data': [42724, 38724, 40000, 36000],
        'Labels': ['2013', '2014', '2015', '2016'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })

    var b = new Graph()
    b.bubble({
        'Element': document.getElementById("bubble"),
        'Data': [12065, 9454, 7538, 5904],
        'Labels': ['Toyota', 'Honda', 'Hyundai', 'Kia'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })
})

