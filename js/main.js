"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();document.addEventListener("DOMContentLoaded",function(){function t(){var e=document.getElementById("nav-menu"),t=document.getElementById("nav-toggle");!function(){for(var e=document.querySelectorAll(".scroll-to"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){e.preventDefault();var t=e.target.getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})}(),e.classList.remove("show-menu"),t.classList.remove("active")}new(function(){function t(e){_classCallCheck(this,t);this.options=Object.assign({isOpen:function(){},isClose:function(){}},e),this.modal=document.querySelector(".modal"),this.speed=!1,this.animation=!1,this.isOpen=!1,this.modalContainer=!1,this.previousActiveElement=!1,this.fixBlocks=document.querySelectorAll(".fix-block"),this.focusElements=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}return _createClass(t,[{key:"events",value:function(){this.modal&&(document.addEventListener("click",function(e){var t=e.target.closest("[data-path]");if(t){var n=t.dataset.path,i=t.dataset.animation,o=t.dataset.speed;return this.animation=i||"fade",this.speed=o?parseInt(o):300,this.modalContainer=document.querySelector('[data-target="'+n+'"]'),void this.open()}e.target.closest(".modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.keyCode&&this.isOpen&&this.focusCatch(e)}.bind(this)),this.modal.addEventListener("click",function(e){e.target.classList.contains("modal__container")||e.target.closest(".modal__container")||!this.isOpen||this.close()}.bind(this)))}},{key:"open",value:function(){var e=this;this.previousActiveElement=document.activeElement,this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),this.disableScroll(),this.modalContainer.classList.add("modal-open"),this.modalContainer.classList.add(this.animation),setTimeout(function(){e.options.isOpen(e),e.modalContainer.classList.add("animate-open"),e.isOpen=!0,e.focusTrap()},this.speed)}},{key:"close",value:function(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("modal-open"),this.enableScroll(),this.options.isClose(this),this.isOpen=!1,this.focusTrap())}},{key:"focusCatch",value:function(e){var t=this.modalContainer.querySelectorAll(this.focusElements),n=Array.prototype.slice.call(t),i=n.indexOf(document.activeElement);e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}},{key:"focusTrap",value:function(){var e=this.modalContainer.querySelectorAll(this.focusElements);this.isOpen?e[0].focus():this.previousActiveElement.focus()}},{key:"disableScroll",value:function(){var e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}},{key:"enableScroll",value:function(){var e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}},{key:"lockPadding",value:function(){var t=window.innerWidth-document.body.offsetWidth+"px";this.fixBlocks.forEach(function(e){e.style.paddingRight=t}),document.body.style.paddingRight=t}},{key:"unlockPadding",value:function(){this.fixBlocks.forEach(function(e){e.style.paddingRight="0px"}),document.body.style.paddingRight="0px"}}]),t}())({});var i=document.querySelectorAll(".rating");0<i.length&&function(){function e(e){o(e),s(),e.classList.contains("rating__set")&&function(i){for(var e=i.querySelectorAll(".rating__item"),t=function(t){var n=e[t];n.addEventListener("mouseenter",function(e){o(i),s(n.value)}),n.addEventListener("mouseleave",function(e){s()}),n.addEventListener("click",function(e){o(i),i.dataset.ajax?setRatingValue(n.value,i):(a.innerHTML=t+1,s())})},n=0;n<e.length;n++)t(n)}(e)}function o(e){t=e.querySelector(".rating__active"),a=e.querySelector(".rating__value")}function s(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:a.innerHTML)/.05;t.style.width=e+"%"}for(var t=void 0,a=void 0,n=0;n<i.length;n++)e(i[n])}();var o,s,a=document.querySelector(".wrapper");o="header-sticky",s=1,window.addEventListener("scroll",function(){var e=window.scrollY,t=document.getElementById(o).offsetHeight,n=s,i=document.getElementById(o);n<=e?(i.classList.add("sticky"),a.style.paddingTop=t+"px"):(i.classList.remove("sticky"),a.style.paddingTop=null)});var e,n,l,c;e="nav-toggle",n="nav-menu",l=document.getElementById(e),c=document.getElementById(n),l&&c&&l.addEventListener("click",function(){c.classList.toggle("show-menu"),l.classList.toggle("active")});new Swiper(".print__container",{slidesPerView:1,navigation:{nextEl:".print__control-next",prevEl:".print__control-prev"},pagination:{el:".print__pagination",type:"custom",renderCustom:function(e,t,n){return("0"+t).slice(-2)+" / "+("0"+n).slice(-2)}}});document.querySelectorAll(".menu__link").forEach(function(e){return e.addEventListener("click",t)});var r=document.querySelectorAll(".cases__navigation-item"),d=document.querySelectorAll(".cases__item");r.forEach(function(i){i.addEventListener("click",function(){var e=i,t=e.getAttribute("data-tab"),n=document.querySelector(t);r.forEach(function(e){e.classList.remove("active")}),d.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),n.classList.add("active")})});var u=document.querySelectorAll(".cases__container");if(0<u.length){var m=[];u.forEach(function(e,t){e.classList.add("instance-"+t);var n=e.closest(".cases__block");n.querySelector(".cases__controls").classList.add("cases__controls-"+t),n.querySelector(".cases__control-prev").classList.add("prev-"+t),n.querySelector(".cases__control-next").classList.add("next-"+t),m[t]=new Swiper(".instance-"+t,{observer:!0,observeParents:!0,navigation:{prevEl:".prev-"+t,nextEl:".next-"+t}})}),m[2].update(),setTimeout(function(){var e=!0,t=!1,n=void 0;try{for(var i,o=m[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){i.value.update()}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}},50)}var v=document.querySelector('input[type="tel"]');new Inputmask("+7 (999) 999-99-99").mask(v);var f,h;f=".form-feedback",h={email:{required:!0,email:!0},tel:{required:!0},name:{required:!0}},new window.JustValidate(f,{rules:h,submitHandler:function(e){var t=new FormData(e),n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&console.log("Отправлено")},n.open("POST","mail.php",!0),n.send(t),e.reset()}})});