function heliodetect(){
  if (window.mlWorld) {
    // this is the Helio browser and is capable of rendering spatialized content
function hide(){
    document.getElementByClassName("astro2d").display = "none";
}
console.log('helio detected');

  } else {
    // this is not Helio
function show(){
document.getElementByClassName("astro2d").display = "block";
  }
  console.log('twoD browser');
}
}
