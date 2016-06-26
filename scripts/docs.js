// Make the side navigation on the docs hold steady
$('#docs-side-nav').affix({
  offset: {
    top: $('#affix-parent').offset().top - 50
  }
})

// Set width of affixed docs menu
function docsMenuWidth() {
  var parentWidth = $('#affix-parent').width();
  $('#docs-side-nav').css('width', parentWidth);
}

docsMenuWidth();
