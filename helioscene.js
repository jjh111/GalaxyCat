function heliodetect(){
  if (window.mlWorld) {
    // this is the Helio browser and is capable of rendering spatialized content
function hide(){
    document.getElementByClassName("astro2d").style.visibility = "none";
}
console.log('helio detected');

  } else {
    // this is not Helio
function show(){
document.getElementByClassName("astro2d").style.visibility = "block";
  }
  console.log('twoD browser');
}
}
