---
layout: post
title:  "Another Sticky Footer"
date:   2016-06-23 22:04:43 +0800
categories: code
author: Sam Mead
permalink: /code/sticky-footer

description: "There are a million sticky footers on the internet. Here's mine!"

---

<!-- You can just write html in markdown files if you're feeling wild -->

<p>My criteria for a good sticky footer:</p>

<ul>
  <li>Minimal code necessary</li>
  <li>Elegance</li>
  <li>Javascript allowed but only in minimal quantities</li>
  <li>Nothing absolutely defined, e.g. no setting <code>height</code> values</li>
</ul>

<p>First, the CSS.</p>

{% highlight css %}
html {
  position: relative;
  min-height: 100%;
}
body {
  margin: 0;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
{% endhighlight %}

<p>Next, the Javascript. The general idea behind many sticky footers is that you create a <code>margin-bottom</code> for the <code>body</code> and then slot the footer into the gap left at the bottom of the page (i.e. the gap created by the margin between the bottom of the <code>body</code> and the bottom of the <code>html</code> tags).</p>

{% highlight javascript %}
// Dynamically set bottom margin of body for sticky footer

// Get height of the footer and set the bottom margin to the same height
function stickyFooter() {
  var bodyBottomMargin = $( ".site-footer" ).outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

// Set bottom margin of body
stickyFooter();

// If the footer height changes when the window is resized, make sure
// we handle it
$( window ).resize(function() {
  stickyFooter();
});
{% endhighlight %}

<p>Notice that we use <code>outerHeight()</code> rather than <code>height()</code> to get the height of the footer. This is so that we include the padding and borders of the footer. Over to you! Enjoy.</p>

<p><small><em>Shoutout to <a href="http://mystrd.at/modern-clean-css-sticky-footer/" target="_blank">mystrd.at</a> for the inspiration.</em></small></p>
