"use strict";!function(){var o=document.getElementById("code_snippets_ajax_nonce").value,c="-network"===pagenow.substring(pagenow.length-"-network".length),e=function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)},i=function(e,t,n,a){var i=t.querySelector(".column-id");if(i&&parseInt(i.textContent)){n.id=parseInt(i.textContent),n.shared_network=!!t.className.match(/\bshared-network-snippet\b/),n.network=n.shared_network||c;var s="action=update_code_snippet&_ajax_nonce="+o+"&field="+e+"&snippet="+JSON.stringify(n),r=new XMLHttpRequest;r.open("POST",ajaxurl,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.onload=function(){r.status<200||400<=r.status||(console.log(r.responseText),void 0!==a&&a(r))},r.send(s)}},n=function(){var e=this.parentElement.parentElement,t={priority:this.value};i("priority",e,t)};e(document.getElementsByClassName("snippet-priority"),function(e,t){e.addEventListener("input",n),e.disabled=!1});var s=function(e,t){var n=parseInt(e.textContent.replace(/\((\d+)\)/,"$1"));t?n++:n--,e.textContent="("+n.toString()+")"},a=function(e){var n=this.parentElement.parentElement,t=n.className.match(/\b(?:in)?active-snippet\b/);if(t){e.preventDefault();var a="inactive-snippet"===t[0];i("active",n,{active:a},function(e){n.className=a?n.className.replace(/\binactive-snippet\b/,"active-snippet"):n.className.replace(/\bactive-snippet\b/,"inactive-snippet");var t=document.querySelector(".subsubsub");s(t.querySelector(".active .count"),a),s(t.querySelector(".inactive .count"),a)})}};e(document.getElementsByClassName("snippet-activation-switch"),function(e,t){e.addEventListener("click",a)})}();