$(document).ready(function(){
  $("#home").append("<h1 style='font: 100px Arial, sans-serif; margin-top: 50px;' class='center aligned ui header'>PictoData</h1>")
  $("#home").append("<div style='font: 17px Arial, sans-serif; margin-bottom: 50px;' class='center aligned description'>Providing creative visual representations of data.</div>")
  //$("#home").append("<button class='center aligned ui button'>Examples</button>")

  var buttons = $("<div style='margin-bottom: 50px;' class='center aligned'></div>")
  buttons.append("<a class='center aligned ui button' href='examples.html'>Examples</a>")
  buttons.append("<a  style='margin-left: 20px; margin-right: 20px;' class='center aligned ui button' href='documentation.html'>Documentation</a>")
  buttons.append("<a class='center aligned ui button'>Download</a>")
  $("#home").append(buttons)


 /* $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });*/
});