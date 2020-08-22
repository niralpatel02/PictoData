"use strict";

$(document).ready(function(){
	const a = new PictoData()
    a.bar({
        'Element': $('#bar'),
        'Data': [42724, 38724, 40000, 36000],
        'Labels': ['2013', '2014', '2015', '2016'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })

    var b = new PictoData()
    b.bubble({
        'Element': $('#bubble'),
        'Data': [12065, 9454, 7538, 5904],
        'Labels': ['Toyota', 'Honda', 'Hyundai', 'Kia'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })

    var c = new PictoData()
    c.word({
        'Element': $('#word'),
        'Data': [12065, 9454, 7538, 5904],
        'Labels': ['Toyota', 'Honda', 'Hyundai', 'Kia'],
        'colours': ['#3e7bde', '#cf8934', '#954bc9', 'Aqua'],
        'height': 400,
        'width': 700
    })

    c.createLegend($('#legend'))

})

