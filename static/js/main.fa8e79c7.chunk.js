(this.webpackJsonpfpb_search_page=this.webpackJsonpfpb_search_page||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(20),s=n.n(c),a=(n(28),n(21)),i=n(5),l=n(4),h=n(2),b=n(11),u=n.n(b),j=n(22),d=n.n(j),g=n(23),f=n(0);var m=function(e){var t,n=e.changeParameter,o=e.data,c=Object(r.useState)([]),s=Object(h.a)(c,2),a=s[0],i=s[1];return Object(r.useEffect)((function(){if(o){var e=[];o.children[0].children.forEach((function(t){"string"===typeof t.language.name&&t.language.name.length>0&&"en-US"!==t.language.code&&e.push(t.language)})),e.sort((function(e,t){return e.name>t.name})),i(e)}}),[o]),t=a&&a.map((function(e){return function(e){return Object(f.jsx)("option",{class:"lang",value:e.code,children:e.name},e.code)}(e)})),Object(f.jsxs)("select",{onChange:function(e){n("lang.code",e.target.value)},name:"languages",id:"languages",class:"languages",children:[Object(f.jsx)("option",{value:"",children:"All Languages"},"allLangs"),t]})};var O=function(e){var t,n=e.changeParameter,o=e.data,c=e.value,s=Object(r.useState)([]),a=Object(h.a)(s,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){if(o){var e=[];o.children[0].children.forEach((function(t){Array.isArray(t.sections)&&t.sections.length;for(var n=0;n<t.sections.length;n++)-1==e.indexOf(t.sections[n].section)&&e.push(t.sections[n].section.trim())})),e.sort((function(e,t){return e.localeCompare(t)})),l(e)}}),[o]),t=i&&i.map((function(e){return function(e){return Object(f.jsx)("option",{className:"sect-drop",value:e,children:e},e)}(e)})),Object(f.jsxs)("select",{value:c,className:"sect-drop",onChange:function(e){n("section",e.target.value)},name:"sections",id:"sections",children:[Object(f.jsx)("option",{value:"",children:"Section Results"},"allSects"),t]})};var p=function(e){return Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault()},name:"searchBar",className:"searchbar",children:Object(f.jsx)("input",{autoComplete:"off",type:"text",name:"searchTerm",placeholder:"Enter Book Name",className:"searchterm",onChange:function(t){e.changeParameter("title",t.target.value)}})})};var x=function(e){var t=e.data;return Object(f.jsx)("li",{class:"result",children:Object(f.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:["(",t.lang.code,") ",t.title," by ",t.author?t.author:"Unknown Author"]})})};var k=function(){return Object(f.jsxs)("section",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{id:"list-of-free-learning-resources-in-many-languages",children:"List of Free Learning Resources In Many Languages"}),Object(f.jsx)("div",{align:"center"}),Object(f.jsx)("h2",{id:"intro",children:"Intro"}),Object(f.jsxs)("p",{children:["This list was originally a clone of"," ",Object(f.jsx)("a",{href:"https://web.archive.org/web/20140606191453/http://stackoverflow.com/questions/194812/list-of-freely-available-programming-books/392926",children:"StackOverflow - List of Freely Available Programming Books"})," ","with contributions from Karan Bhangui and George Stocker."]}),Object(f.jsxs)("p",{children:["The list was moved to GitHub by Victor Felder for collaborative updating and maintenance. It has grown to become one of ",Object(f.jsx)("a",{href:"https://octoverse.github.com/",children:"GitHub\u2019s most popular repositories"}),", with 221,000+ stars, 6,900+ commits, 1,900+ contributors, and 47,100+ forks."]}),Object(f.jsxs)("p",{children:["The ",Object(f.jsx)("a",{href:"https://ebookfoundation.org",children:"Free Ebook Foundation"})," now administers the repo, a not-for-profit organization devoted to promoting the creation, distribution, archiving, and sustainability of free ebooks."," ",Object(f.jsx)("a",{href:"https://ebookfoundation.org/contributions.html",children:"Donations"})," to the Free Ebook Foundation are tax-deductible in the US."]}),Object(f.jsx)("h2",{id:"how-to-contribute",children:"How To Contribute"}),Object(f.jsxs)("p",{children:["Please read ",Object(f.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html",children:"CONTRIBUTING"}),". If you\u2019re new to GitHub,"," ",Object(f.jsx)("a",{href:"/free-programming-books/docs/HOWTO.html",children:"welcome"}),"! Remember to abide by our"," ",Object(f.jsx)("a",{href:"/free-programming-books/docs/CODE_OF_CONDUCT.html",children:"Code of Conduct"})," too. (",Object(f.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"translations"})," also available)"]}),Object(f.jsx)("h2",{id:"how-to-share",children:"How to Share"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"http://twitter.com/intent/tweet?text=https://github.com/EbookFoundation/free-programming-books%0AFree%20Programming%20Books",children:"Share on Twitter"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.facebook.com/share.php?u=https%3A%2F%2Fgithub.com%2FEbookFoundation%2Ffree-programming-books&p%5Bimages%5D%5B0%5D=&p%5Btitle%5D=Free%20Programming%20Books&p%5Bsummary%5D=",children:"Share on Facebook"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/EbookFoundation/free-programming-books&title=Free%20Programming%20Books&summary=&source=",children:"Share on LinkedIn"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://t.me/share/url?url=https://github.com/EbookFoundation/free-programming-books",children:"Share on Telegram"})})]}),Object(f.jsx)("h2",{id:"translations",children:"Translations"}),Object(f.jsx)("p",{children:"Volunteers have translated many of our Contributing, How-to, and Code of Conduct documents into languages covered by our lists."}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["English",Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/free-programming-books/docs/CODE_OF_CONDUCT.html",children:"Code of Conduct"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html",children:"Contributing"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/free-programming-books/docs/HOWTO.html",children:"How-to"})})]})]}),Object(f.jsxs)("li",{children:["\u2026"," ",Object(f.jsx)("em",{children:Object(f.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"More languages"})})," ","\u2026"]})]}),Object(f.jsxs)("p",{children:["You might notice that there are"," ",Object(f.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"some missing translations here"})," - perhaps you would like to help out by"," ",Object(f.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html#help-out-by-contributing-a-translation",children:"contributing a translation"}),"?"]}),Object(f.jsx)("h2",{id:"license",children:"License"}),Object(f.jsxs)("p",{children:["Each file included in this repository is licensed under the"," ",Object(f.jsx)("a",{href:"/free-programming-books/LICENSE",children:"CC BY License"}),"."]})]})},v=(n.p,n.p,null);function w(e){var t=[],n=[];return e.children[0].children.forEach((function(e){e.sections.forEach((function(r){n.includes(r.section)||n.push(r.section),r.entries.forEach((function(n){t.push({author:n.author,title:n.title,url:n.url,lang:e.language,section:r.section})})),r.subsections.forEach((function(n){n.entries.forEach((function(o){t.push({author:o.author,title:o.title,url:o.url,lang:e.language,section:r.section,subsection:n.section})}))}))}))})),{arr:t,sections:n}}var E=function(){var e=Object(r.useState)(void 0),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),s=Object(h.a)(c,2),b=s[0],j=s[1],E=Object(r.useState)([]),F=Object(h.a)(E,2),C=(F[0],F[1]),S=Object(r.useState)(!0),y=Object(h.a)(S,2),T=y[0],N=y[1],B=Object(r.useState)({title:""}),I=Object(h.a)(B,2),P=I[0],_=I[1],H=Object(r.useState)([]),L=Object(h.a)(H,2),D=L[0],G=L[1],A=Object(r.useState)([]),R=Object(h.a)(A,2),U=R[0],M=R[1],V=Object(r.useState)(!0),J=Object(h.a)(V,2),W=(J[0],J[1],Object(r.useState)("")),Y=Object(h.a)(W,2),q=Y[0],z=(Y[1],null),K=null,$=function(e,t){_(Object(l.a)(Object(l.a)({},P),{},Object(i.a)({},e,t)))};return Object(r.useEffect)((function(){function e(){return(e=Object(a.a)(u.a.mark((function e(){var t,n,r,c,s,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,d.a.get("https://raw.githubusercontent.com/FreeEbookFoundationBot/free-programming-books-json/main/fpb.json");case 4:t=e.sent,o(t.data),n=w(t.data),r=n.arr,c=n.sections,console.log(r),j(r),C(c),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),o(v),s=w(v),a=s.arr,i=s.sections,C(i),j(a);case 18:N(!1);case 19:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){if(b){for(var e=new g.a(b,{useExtendedSearch:!0,findAllMatches:!0,shouldSort:!0,includeScore:!0,threshold:.2,keys:["title","lang.code","section"]}),t=[],n=0,r=Object.entries(P);n<r.length;n++){var o=Object(h.a)(r[n],2),c=o[0],s=o[1];null!==s&&""!==s&&("lang.code"!==c?"section"!==c?t.push(Object(i.a)({},c,s)):t.push({section:"^".concat(s)}):t.push({"lang.code":"^".concat(s)}))}var a=e.search({$and:t});a=a.slice(0,40),G(a);var l=[];a.forEach((function(e){var t=e.item.section;l.includes(t)||l.push(t)})),M(l)}}),[P,b]),T?Object(f.jsx)("h1",{children:"Loading..."}):q?Object(f.jsxs)("h1",{children:["Error: ",q]}):(P.title&&0!==D.length&&(z=D&&D.map((function(e){return Object(f.jsx)(x,{data:e.item})})),K=U&&U.map((function(e){return Object(f.jsx)("button",{onClick:function(){$("section",e)},children:e})}))),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("a",{href:"https://ebookfoundation.github.io/free-programming-books/",target:"_blank",rel:"noreferrer",children:"free-programming-books"})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("img",{class:"emoji",title:":books:",alt:":books:",src:"https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png",height:"20",width:"20"})," ","Freely available programming books"]}),Object(f.jsx)("p",{class:"view",children:Object(f.jsxs)("a",{href:"https://github.com/EbookFoundation/free-programming-books",target:"_blank",rel:"noreferrer",children:["View the Project on GitHub ",Object(f.jsx)("small",{children:"EbookFoundation/free-programming-books"})]})}),Object(f.jsxs)("p",{children:["Does a link not work?",Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://github.com/EbookFoundation/free-programming-books/issues/",target:"_blank",rel:"noreferrer",children:"Report an error on GitHub"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{changeParameter:$}),Object(f.jsx)(m,{changeParameter:$,data:n}),Object(f.jsx)(O,{className:"sect-drop",changeParameter:$,data:n,value:P.section||"allSects"}),Object(f.jsx)("div",{className:"search-results section-results",children:K})]})]}),Object(f.jsx)("section",{className:"search-results",children:z?Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"Search Results"}),Object(f.jsx)("ul",{children:z})]}):Object(f.jsx)(k,{})}),Object(f.jsxs)("footer",{children:[Object(f.jsxs)("p",{children:["This project is maintained by"," ",Object(f.jsx)("a",{href:"https://github.com/EbookFoundation",target:"_blank",rel:"noreferrer",children:"EbookFoundation"})]}),Object(f.jsx)("p",{children:Object(f.jsxs)("small",{children:["Hosted on GitHub Pages \u2014 Theme by"," ",Object(f.jsx)("a",{href:"https://github.com/orderedlist",target:"_blank",rel:"noreferrer",children:"orderedlist"})]})})]})]}))},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.fa8e79c7.chunk.js.map