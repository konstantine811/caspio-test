for(var show=function(t,e){var i=function(){t.style.display="block";var e=t.scrollHeight+"px";return t.style.display="",e}();t.classList.add("is-visible"),t.style.height=i,window.setTimeout(function(){t.style.height=""},e)},hide=function(e,t){e.style.height=e.scrollHeight+"px",window.setTimeout(function(){e.style.height="0"},1),window.setTimeout(function(){e.classList.remove("is-visible")},t)},toggle=function(e,t,i){if(e.classList.contains("is-visible"))return hide(e,i),void t.classList.remove("active");t.classList.add("active"),show(e,i)},toggleElement=document.getElementsByClassName("toggle"),initToggle=function(e){e.preventDefault();var t=this.parentNode.parentNode.nextElementSibling;t.classList.contains("toggle-content")&&toggle(t,this,650)},i=0;i<toggleElement.length;i++)toggleElement[i].addEventListener("click",initToggle,!1);