(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(6),i=c.n(a),o=(c(12),c(3)),s=c(2),u=c(0),l=function(e){var t=e.heros,c=e.loadScreen,n=e.onChoice,a=e.cardMount;return Object(r.useEffect)((function(){a()}),[]),Object(u.jsxs)("div",{className:"interact",children:["   ",c?Object(u.jsx)("div",{children:"Loading..."}):Object(u.jsxs)("div",{className:"cardBox",children:[" ",t.map((function(e){return Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,'), url("https://via.placeholder.com/300x300?text=Failed To Load")')},className:"individualCard",id:e.id,onClick:n,children:e.heroName},e.id)}))]})]})},d=function(e){var t=e.score,c=e.highScore;return Object(u.jsxs)("div",{className:"scoresArea",children:[Object(u.jsxs)("div",{children:["Score: ",t]}),Object(u.jsxs)("div",{children:["Highscore: ",c]})]})},j=function(e){var t=e.startGame;return Object(u.jsx)("div",{className:"interact",children:Object(u.jsxs)("div",{className:"restartButton",children:[Object(u.jsx)("h1",{style:{marginTop:"0px"},children:"You Lost! Try Again"}),Object(u.jsx)("button",{onClick:t,children:"New Game"})]})})},h=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[c],e[c]=r}return e},b=c(5),m=c.n(b),O=c(7);function f(){return(f=Object(O.a)(m.a.mark((function e(t,c){var r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.superheroapi.com/api.php/".concat(t,"/").concat(c));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",{id:n.id,heroName:n.name,url:n.image.url,clicked:!1});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e,t){return f.apply(this,arguments)},v=function(e,t,c){for(var r=[],n=0;n<=e-1;n++){var a=void 0;do{a=c(t)}while(r.includes(a));r[n]=a}return r},x=function(e){return Math.floor(Math.random()*e)+1},g=function(e){var t=e.onContinue;return Object(u.jsx)("div",{className:"interact",children:Object(u.jsxs)("div",{className:"restartButton",children:[Object(u.jsx)("h1",{children:"You got all of them!"}),Object(u.jsx)("button",{onClick:t,children:"Continue"})]})})};var N=function(){var e=Object(r.useState)([{id:1,heroName:"Yeehaw",url:"",clicked:!1}]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),i=Object(s.a)(a,2),b=i[0],m=i[1],O=Object(r.useState)(0),f=Object(s.a)(O,2),N=f[0],S=f[1],k=Object(r.useState)(0),w=Object(s.a)(k,2),y=w[0],C=w[1],M=Object(r.useState)(!0),T=Object(s.a)(M,2),B=T[0],Y=T[1],G=Object(r.useState)(!1),L=Object(s.a)(G,2),A=L[0],E=L[1];return Object(u.jsxs)("div",{className:"allSpace",children:[Object(u.jsx)("h1",{className:"title",children:"Test Your Memory"}),Object(u.jsx)("p",{className:"instructions",children:"Don't pick the same hero twice!"}),Object(u.jsx)(d,{score:N,highScore:y}),B?A?Object(u.jsx)(g,{onContinue:function(){E(!1),m(!0)}}):Object(u.jsx)(l,{heros:c,loadScreen:b,onChoice:function(e){if(!0===c.filter((function(t){return t.id===e.target.id.toString()}))[0].clicked)S(0),m(!0),Y(!1);else{var t=c.map((function(t){return e.target.id.toString()===t.id?Object(o.a)(Object(o.a)({},t),{},{clicked:!0}):Object(o.a)({},t)}));n(h(t)),S(N+1),N+1>=y&&C(N+1),(N+1)%c.length==0&&E(!0)}},cardMount:function(){var e=v(16,270,x);Promise.all(e.map((function(e){return p("599590408145422",e)}))).then((function(e){n(e),m(!1)})).catch((function(e){alert("There was a problem loading heros, please reload the page"),console.error(e.message)}))}}):Object(u.jsx)(j,{startGame:function(){Y(!0),m(!0)}})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2974c193.chunk.js.map