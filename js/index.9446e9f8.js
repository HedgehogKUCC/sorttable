!function(e){function t(t){for(var n,a,p=t[0],s=t[1],c=t[2],l=0,f=[];l<p.length;l++)a=p[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,p=1;p<r.length;p++){var s=r[p];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var p=window.webpackJsonp=window.webpackJsonp||[],s=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var u=s;i.push([1,1]),r()}([,function(e,t,r){"use strict";r.r(t);r(2),r(6),r(10),new Vue({el:"#app",data:{data:[{name:"巧呼呼蘇打水",price:30,expiryDate:90},{name:"心驚膽跳羊肉飯",price:65,expiryDate:2},{name:"郭師傅武功麵包",price:32,expiryDate:1},{name:"不太會過期的新鮮牛奶",price:75,expiryDate:600},{name:"金殺 巧粒粒",price:120,expiryDate:200}],sortItem:"price",sortID:1},computed:{sortData:function(){var e=this.sortItem,t=this.sortID;return this.data.sort((function(r,n){return r[e]===n[e]?0:r[e]>n[e]?1*t:-1*t}))}},methods:{itemEvent:function(e){this.sortItem=e,this.sortID=-1*this.sortID}}})},function(e,t,r){var n=r(3),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(n(o,i),o.locals?o.locals:{});e.exports=a},,function(e,t,r){(t=r(5)(!1)).push([e.i,"body{max-width:500px;padding:0;margin:10% auto;box-sizing:border-box;font-family:monospace, sans-serif}@media (max-width: 575px){body{font-size:0.65rem}}#app{width:100%}#app h1{text-align:center;color:#4fc08d}@media (max-width: 575px){#app h1{font-size:2rem}}@media (max-width: 575px){#app h5{font-size:13px}}.table th.click{cursor:pointer}.table th.click{cursor:pointer}.icon{display:inline-block}.icon.inverse{-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n",""]),e.exports=t}]);