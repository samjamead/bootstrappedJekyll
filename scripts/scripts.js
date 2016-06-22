
// Add target="_blank" to all external links
$("a[href^='http://']").attr("target","_blank");
$("a[href^='https://']").attr("target","_blank");

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $( '.site-footer' ).outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
  console.log(bodyBottomMargin);
}
stickyFooter();

// Trigger sizing functions on window is resize
$( window ).resize(function() {
  stickyFooter();
});
