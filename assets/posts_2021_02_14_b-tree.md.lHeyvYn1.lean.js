import{_ as o,o as s,c as l,b as t,d as e,a}from"./chunks/framework.heUNgYAJ.js";const Q="/assets/b-tree-search.w8EMTWZq.png",n="/assets/b-tree-insert-1.ryCGUHec.png",T="/assets/b-tree-insert-2.PsJ6Z80C.png",i="/assets/b-tree-insert-3.8Z3OQ6rK.png",r="/assets/b-tree-insert-4.7WEvlTHD.png",d="/assets/b-tree-insert-5.bwaHoVBK.png",m="/assets/b-tree-delete-1.jqt5Zc52.png",h="/assets/b-tree-delete-2.T5uhgVPp.png",Q3=JSON.parse('{"title":"B树的插入与删除","description":"","frontmatter":{"title":"B树的插入与删除","date":"2021-2-14","updated":"2021-2-14","categories":["Computer Science","Data Structure","Tree"],"tags":["Data Structure","Tree"]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"查找","slug":"查找","link":"#查找","children":[]},{"level":2,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[{"level":3,"title":"删除：向兄弟节点借入","slug":"删除-向兄弟节点借入","link":"#删除-向兄弟节点借入","children":[]},{"level":3,"title":"删除：兄弟节点不够借","slug":"删除-兄弟节点不够借","link":"#删除-兄弟节点不够借","children":[]}]}],"relativePath":"posts/2021/02/14/b-tree.md","filePath":"posts/2021/02/14/b-tree.md"}'),c={name:"posts/2021/02/14/b-tree.md"},p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.196ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2296.6 899","aria-hidden":"true"},g=a("",1),w=[g],u=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"l"),t("mi",null,"o"),t("msub",null,[t("mi",null,"g"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2")])]),t("mi",null,"n")])],-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.375ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.491ex",height:"1.791ex",role:"img",focusable:"false",viewBox:"0 -626 5963 791.6","aria-hidden":"true"},k=a("",1),b=[k],v=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"t"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"I"),t("mi",null,"O")])]),t("mo",null,">>"),t("msub",null,[t("mi",null,"t"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"s"),t("mi",null,"e"),t("mi",null,"a"),t("mi",null,"r"),t("mi",null,"c"),t("mi",null,"h")])])])],-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.801ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2563.8 899","aria-hidden":"true"},y=a("",1),M=[y],V=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"l"),t("mi",null,"o"),t("msub",null,[t("mi",null,"g"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"m")])]),t("mi",null,"n")])],-1),Z=t("h2",{id:"定义",tabindex:"-1"},[e("定义 "),t("a",{class:"header-anchor",href:"#定义","aria-label":'Permalink to "定义"'},"​")],-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.986ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 878 453","aria-hidden":"true"},D=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),S=[D],B=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"m")])],-1),A={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683","aria-hidden":"true"},R=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})])])],-1),I=[R],J=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B")])],-1),G={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.986ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 878 453","aria-hidden":"true"},E=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),O=[E],N=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"m")])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.258ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2766 1000","aria-hidden":"true"},$=a("",1),F=[$],K=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{fence:"false",stretchy:"false"},"⌊"),t("mi",null,"m"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("mn",null,"2"),t("mo",{fence:"false",stretchy:"false"},"⌋")])],-1),W=t("li",null,"如果根节点不是叶子节点，那么它至少有两个子节点",-1),U={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},t1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",style:{"stroke-width":"3"}})])])],-1),e1=[t1],s1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"k")])],-1),l1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},a1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.076ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 2243.4 776","aria-hidden":"true"},o1=a("",1),Q1=[o1],n1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"k"),t("mo",null,"−"),t("mn",null,"1")])],-1),T1=t("li",null,"所有的叶子节点都在同一层",-1),i1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683","aria-hidden":"true"},d1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})])])],-1),m1=[d1],h1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B")])],-1),c1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683","aria-hidden":"true"},x1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})])])],-1),g1=[x1],w1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B")])],-1),u1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683","aria-hidden":"true"},f1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})])])],-1),k1=[f1],b1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B")])],-1),v1=t("h2",{id:"查找",tabindex:"-1"},[e("查找 "),t("a",{class:"header-anchor",href:"#查找","aria-label":'Permalink to "查找"'},"​")],-1),H1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683","aria-hidden":"true"},y1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})])])],-1),M1=[y1],V1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B")])],-1),Z1=t("p",null,[t("img",{src:Q,alt:"B树查找过程"})],-1),j1=t("p",null,"通过递归的查找遍历每一层的 B 树，必定处于下列三种情况之一：",-1),C1=t("ol",null,[t("li",null,"位于当前节点的数据中，查找成功；"),t("li",null,"位于当前节点的子节点区间中，向下递归；"),t("li",null,"当前节点为叶子节点（空节点），查找失败。")],-1),D1=t("h2",{id:"插入",tabindex:"-1"},[e("插入 "),t("a",{class:"header-anchor",href:"#插入","aria-label":'Permalink to "插入"'},"​")],-1),S1=t("p",null,"B 树的插入过程与平衡二叉树十分相似，同样分为查找和调整两步。查找过程如上述，找到非叶子的最底层节点将其插入，以下列三阶 B 树为例（叶子节点省略）：",-1),B1=t("p",null,[t("img",{src:n,alt:"示例三阶B树"})],-1),A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.176ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 4056 748","aria-hidden":"true"},R1=a("",1),I1=[R1],J1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"3"),t("mo",null,"−"),t("mn",null,"2"),t("mo",null,"="),t("mn",null,"2")])],-1),G1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},z1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.551ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4221.6 1000","aria-hidden":"true"},E1=a("",1),O1=[E1],N1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{fence:"false",stretchy:"false"},"⌊"),t("mn",null,"3"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("mn",null,"2"),t("mo",{fence:"false",stretchy:"false"},"⌋"),t("mo",null,"="),t("mn",null,"1")])],-1),q1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.176ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 4056 748","aria-hidden":"true"},$1=a("",1),F1=[$1],K1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1"),t("mo",null,"+"),t("mn",null,"1"),t("mo",null,"="),t("mn",null,"2")])],-1),W1=a("",22);function U1(Y1,t3,e3,s3,l3,a3){return s(),l("div",null,[t("p",null,[e("B 树是一种自平衡树，能够保持数据的有序，且拥有良好的查找性能和更少的读盘次数，常用于文件系统和数据库的设计实现中。B 树由二叉树发展而来，平衡二叉树在查找性能达到了对数时间 "),t("mjx-container",p,[(s(),l("svg",x,w)),u]),e("，在内部查找时十分高效，但是在外部查找中由于 "),t("mjx-container",_,[(s(),l("svg",f,b)),v]),e("，人们希望设计一种能够尽可能减少读盘次数的数据结构。顺着二叉树的思路，人们在二叉树的基础上该进得到了 B 树（m 叉查找树），将树高降到了 "),t("mjx-container",H,[(s(),l("svg",L,M)),V]),e("。")]),Z,t("p",null,[e("一个 "),t("mjx-container",j,[(s(),l("svg",C,S)),B]),e(" 阶的 "),t("mjx-container",A,[(s(),l("svg",P,I)),J]),e(" 树是有以下属性的树：")]),t("ol",null,[t("li",null,[e("每一个节点最多有 "),t("mjx-container",G,[(s(),l("svg",z,O)),N]),e(" 个子节点；")]),t("li",null,[e("每一个节点（除根节点）最少有 "),t("mjx-container",q,[(s(),l("svg",X,F)),K]),e(" 个子节点；")]),W,t("li",null,[e("有 "),t("mjx-container",U,[(s(),l("svg",Y,e1)),s1]),e(" 个子节点的非叶子节点拥有 "),t("mjx-container",l1,[(s(),l("svg",a1,Q1)),n1]),e(" 个键")]),T1]),t("p",null,[e("其中性质 2 和性质 4 的约束使 "),t("mjx-container",i1,[(s(),l("svg",r1,m1)),h1]),e(" 树至少为一颗半满的树来保证存储密度；"),t("mjx-container",c1,[(s(),l("svg",p1,g1)),w1]),e(" 树的叶子节点通常指的是额外填充的空节点，当查找操作到达空节点时，即代表查找失败，这一层叶节点可以计入 "),t("mjx-container",u1,[(s(),l("svg",_1,k1)),b1]),e(" 树的高度，也可以不计入。")]),v1,t("p",null,[t("mjx-container",H1,[(s(),l("svg",L1,M1)),V1]),e(" 树的查找过程与二叉树查找过程十分相似，只是划分区域略有差别，如下图（以 3 阶 B 树为例）：")]),Z1,j1,C1,D1,S1,B1,t("blockquote",null,[t("p",null,[e("三阶 B 树指的是子节点数量最多为 3，键值数量最多为 "),t("mjx-container",A1,[(s(),l("svg",P1,I1)),J1]),e("，因此键值数量最少为 "),t("mjx-container",G1,[(s(),l("svg",z1,O1)),N1]),e("，子节点数量最少为 "),t("mjx-container",q1,[(s(),l("svg",X1,F1)),K1])])]),W1])}const n3=o(c,[["render",U1]]);export{Q3 as __pageData,n3 as default};
