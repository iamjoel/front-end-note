# 我们到底需不需要 jQuery
曾经，在那个 IE6 还是主流浏览器的时代，为了实现稍微复杂一点的功能，也需要很多代码。如果要做到兼容主流浏览器，更需大费周章。当 jQuery 出现后，使用 jQuery 实现同样的功能，我们只需写很少的代码，并且兼容主流浏览器。于是，

而现在，浏览器原生的 API 日益强大，以及浏览器的API 差异的变小（？）。有人觉得我们并不一定需要 jQuery 了。比如：
* .querySelector, .querySelectorAll 支持用 CSS3 选择器选取元素，可以大体替代 $() 的功能
* 用 Fetch API 做异步请求，可以大体替代 $.ajax 的功能
* requestAnimationFrame 和 CSS 动画和渐变可以替代 jQueryElem.animate 的功能

好像，我们并不需要 jQuery。但 jQuery 的 API 相比浏览器 API 设计的好。做同样的功能，用 jQuery 仍然比用 浏览器的原生 API 少写不少代码，并且更不容易出错。





## 参考链接
* [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/)
* https://medium.com/developers-writing/why-jquery-is-still-relevant-6fcb258177cb#.oe67z5yrs
https://medium.com/vanilla-javascript/choosing-vanilla-javascript-in-2016-6f38a8302ee5#.myl43zbxc
