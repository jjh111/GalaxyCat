// Show an element
var show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.astro2d('is-visible');
};

function(event) {
  if (window.mlWorld) {
    // this is the Helio browser and is capable of rendering spatialized content
    toggle(astro2d);

  } else {
    // this is not Helio
    return;

  }
}
