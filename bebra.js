var divs = $("div.Image").get().sort(function(){ 
  return Math.round(Math.random())-0.5; //random so we get the right +/- combo
}).slice(0,4)
$(divs).show();
