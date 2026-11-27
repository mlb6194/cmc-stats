(function(){
  function get(){try{return localStorage.getItem("theme");}catch(e){return null;}}
  function set(v){try{localStorage.setItem("theme",v);}catch(e){}}
  function apply(t){var r=document.getElementById("root");if(!r)return;r.classList.toggle("dark",t!=="light");
    document.querySelectorAll(".theme-toggle").forEach(function(b){b.setAttribute("aria-label",t==="light"?"Switch to dark theme":"Switch to light theme");});}
  document.addEventListener("DOMContentLoaded",function(){
    var t=get()||"dark"; apply(t);
    document.querySelectorAll(".theme-toggle").forEach(function(b){b.addEventListener("click",function(){t=(t==="light")?"dark":"light";set(t);apply(t);});});
  });
})();
