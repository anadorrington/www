"use strict";ready(function(){document.querySelector("[data-currentyear]").innerHTML=""+(new Date).getFullYear();var fantail=document.querySelector("#fantail");var activeNavItem=document.querySelector(".active");fantail.style.left=(activeNavItem&&activeNavItem.offsetLeft||0)+"px";document.forms[0].addEventListener("submit",function(e){e.preventDefault();if(this.querySelector('input[type="checkbox"]').checked){this.querySelector("button").disabled=true;this.action="http://formspree.io/ana@anadorrington.co.nz";this.submit()}})});function ready(fn){if(document.readyState!="loading"){fn()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",fn)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState!="loading")fn()})}}