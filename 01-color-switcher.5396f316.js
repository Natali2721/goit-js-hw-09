!function(){var t={bodyElem:document.querySelector("body"),btnStartElem:document.querySelector("button[data-start]"),btnStopElem:document.querySelector("button[data-stop]")},e=null;t.btnStopElem.disabled=!0,t.btnStartElem.addEventListener("click",(function(){t.btnStartElem.disabled=!0,t.btnStopElem.disabled=!1,e=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.bodyElem.style.background=e}),1e3)})),t.btnStopElem.addEventListener("click",(function(){t.btnStartElem.disabled=!1,t.btnStopElem.disabled=!0,clearTimeout(e)}))}();
//# sourceMappingURL=01-color-switcher.5396f316.js.map
