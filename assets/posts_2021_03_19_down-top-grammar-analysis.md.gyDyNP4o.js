import{_ as s,o as l,c as Q,b as t,d as e,a}from"./chunks/framework.heUNgYAJ.js";const o="/assets/shift-reduce-parsing-example.kv3CZrdE.png",Q3=JSON.parse('{"title":"自底向上的语法分析","description":"","frontmatter":{"date":"2021-3-19","updated":"2021-3-23","author":"Celeste","location":"Shanghai Normal University","categories":["Computer Science","Compiler"],"tags":["Compiler","Grammar"]},"headers":[{"level":1,"title":"自底向上的语法分析","slug":"自底向上的语法分析","link":"#自底向上的语法分析","children":[{"level":2,"title":"移入-归约分析（Shift-Reduce Parsing）","slug":"移入-归约分析-shift-reduce-parsing","link":"#移入-归约分析-shift-reduce-parsing","children":[]},{"level":2,"title":"优先分析","slug":"优先分析","link":"#优先分析","children":[{"level":3,"title":"简单优先分析","slug":"简单优先分析","link":"#简单优先分析","children":[]},{"level":3,"title":"算符优先分析","slug":"算符优先分析","link":"#算符优先分析","children":[]}]},{"level":2,"title":"LR 分析法","slug":"lr-分析法","link":"#lr-分析法","children":[{"level":4,"title":"LR 分析表","slug":"lr-分析表","link":"#lr-分析表","children":[]},{"level":3,"title":"LR(0) 分析","slug":"lr-0-分析","link":"#lr-0-分析","children":[{"level":4,"title":"识别活前缀：形式定义求正则表达法","slug":"识别活前缀-形式定义求正则表达法","link":"#识别活前缀-形式定义求正则表达法","children":[]},{"level":4,"title":"识别活前缀：有限自动机构造法","slug":"识别活前缀-有限自动机构造法","link":"#识别活前缀-有限自动机构造法","children":[]},{"level":4,"title":"识别活前缀：项目集规范族构造法","slug":"识别活前缀-项目集规范族构造法","link":"#识别活前缀-项目集规范族构造法","children":[{"level":5,"title":"项目集闭包","slug":"项目集闭包","link":"#项目集闭包","children":[]}]},{"level":4,"title":"从活前缀NFA构造分析表","slug":"从活前缀nfa构造分析表","link":"#从活前缀nfa构造分析表","children":[]},{"level":4,"title":"冲突","slug":"冲突","link":"#冲突","children":[{"level":5,"title":"移进-归约冲突","slug":"移进-归约冲突","link":"#移进-归约冲突","children":[]},{"level":5,"title":"归约-归约冲突","slug":"归约-归约冲突","link":"#归约-归约冲突","children":[]}]}]},{"level":3,"title":"SLR分析","slug":"slr分析","link":"#slr分析","children":[]},{"level":3,"title":"LR(1)分析","slug":"lr-1-分析","link":"#lr-1-分析","children":[]},{"level":3,"title":"LALR分析","slug":"lalr分析","link":"#lalr分析","children":[{"level":4,"title":"归约-归约冲突","slug":"归约-归约冲突-1","link":"#归约-归约冲突-1","children":[]},{"level":4,"title":"推迟错误的发现","slug":"推迟错误的发现","link":"#推迟错误的发现","children":[]}]}]},{"level":2,"title":"二义性文法的LR分析","slug":"二义性文法的lr分析","link":"#二义性文法的lr分析","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}]}],"relativePath":"posts/2021/03/19/down-top-grammar-analysis.md","filePath":"posts/2021/03/19/down-top-grammar-analysis.md"}'),n={name:"posts/2021/03/19/down-top-grammar-analysis.md"},r=a('<h1 id="自底向上的语法分析" tabindex="-1">自底向上的语法分析 <a class="header-anchor" href="#自底向上的语法分析" aria-label="Permalink to &quot;自底向上的语法分析&quot;">​</a></h1><p>自底向上的语法分析采用最左归约方式，也就是反向构造最右推导，其具体实现有优先分析和LR分析。优先分析中又有简单优先分析和算符优先分析。简单优先分析的分析过程准确、规范，但是效率低，没有实用价值，而算符优先分析虽然分析速度快，但是不是规范归约，仅有一定应用，本文主要介绍LR分析。</p><h2 id="移入-归约分析-shift-reduce-parsing" tabindex="-1">移入-归约分析（Shift-Reduce Parsing） <a class="header-anchor" href="#移入-归约分析-shift-reduce-parsing" aria-label="Permalink to &quot;移入-归约分析（Shift-Reduce Parsing）&quot;">​</a></h2><p>实现自底向上分析最常用的技术是移入-归约分析</p><p>最左规约</p><p>句柄：当前句型的最左直接短语</p><p>在分析过程中，句柄是逐步形成，移进状态、待约状态、规约状态</p><p><img src="'+o+'" alt="Shift Reduce Parsing Example"></p><h2 id="优先分析" tabindex="-1">优先分析 <a class="header-anchor" href="#优先分析" aria-label="Permalink to &quot;优先分析&quot;">​</a></h2><h3 id="简单优先分析" tabindex="-1">简单优先分析 <a class="header-anchor" href="#简单优先分析" aria-label="Permalink to &quot;简单优先分析&quot;">​</a></h3><h3 id="算符优先分析" tabindex="-1">算符优先分析 <a class="header-anchor" href="#算符优先分析" aria-label="Permalink to &quot;算符优先分析&quot;">​</a></h3><h2 id="lr-分析法" tabindex="-1">LR 分析法 <a class="header-anchor" href="#lr-分析法" aria-label="Permalink to &quot;LR 分析法&quot;">​</a></h2><p>LR(k)文法是最大的、可以构造出相应移入-规约语法分析器的文法类，L表示从左到右扫描，R表示反向构造出一个最右推导序列，k表示向前看k个输入符号，k=0 或 1 具有实践意义，省略 k 时表示 k=1</p><h4 id="lr-分析表" tabindex="-1">LR 分析表 <a class="header-anchor" href="#lr-分析表" aria-label="Permalink to &quot;LR 分析表&quot;">​</a></h4><p>符号栈、状态栈，ACTION 函数，GOTO 函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div><h3 id="lr-0-分析" tabindex="-1">LR(0) 分析 <a class="header-anchor" href="#lr-0-分析" aria-label="Permalink to &quot;LR(0) 分析&quot;">​</a></h3><p><strong>可归前缀</strong>：可归前缀指的是在规范句型中可以采用归约动作的前缀，一旦出现可归前缀，可以立刻采取归约动作。</p><p><strong>活前缀</strong>：在规范句型中形成可归前缀之前（包括可归前缀）的所有前缀都称为可归前缀，即它们依然可能形成可归前缀（活着的）</p><p>有了活前缀的概念后，不难理解在 LR 归约过程中，符号栈中应该始终是一个活前缀，否则则表示存在错误。因此，在归约过程中，我们需要识别当前符号栈中是否为一个活前缀，下面介绍三种方法，分别通过定义、自动机、项目集来构造一个活前缀的自动机</p><h4 id="识别活前缀-形式定义求正则表达法" tabindex="-1">识别活前缀：形式定义求正则表达法 <a class="header-anchor" href="#识别活前缀-形式定义求正则表达法" aria-label="Permalink to &quot;识别活前缀：形式定义求正则表达法&quot;">​</a></h4><h4 id="识别活前缀-有限自动机构造法" tabindex="-1">识别活前缀：有限自动机构造法 <a class="header-anchor" href="#识别活前缀-有限自动机构造法" aria-label="Permalink to &quot;识别活前缀：有限自动机构造法&quot;">​</a></h4><h4 id="识别活前缀-项目集规范族构造法" tabindex="-1">识别活前缀：项目集规范族构造法 <a class="header-anchor" href="#识别活前缀-项目集规范族构造法" aria-label="Permalink to &quot;识别活前缀：项目集规范族构造法&quot;">​</a></h4><p>核</p><h5 id="项目集闭包" tabindex="-1">项目集闭包 <a class="header-anchor" href="#项目集闭包" aria-label="Permalink to &quot;项目集闭包&quot;">​</a></h5><p>如果项目等待的是一个非终结符，那么就可能存在等价项目。我们将一组等价状态称为项目集闭包</p>',26),i={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.14ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 504 683","aria-hidden":"true"},d=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D43C",d:"M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z",style:{"stroke-width":"3"}})])])],-1),h=[d],m=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"I")])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.203ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -716 6719.6 910","aria-hidden":"true"},g=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1027.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2305.6,0)"><path data-c="1D6FC" d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3167.8,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3668,0)"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4427,0)"><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5270.8,0)"><path data-c="2208" d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6215.6,0)"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z" style="stroke-width:3;"></path></g></g></g>',1),u=[g],_=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"→"),t("mi",null,"α"),t("mo",null,"⋅"),t("mi",null,"B"),t("mi",null,"β"),t("mo",null,"∈"),t("mi",null,"I")])],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.489ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.371ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -683 4584.1 899","aria-hidden":"true"},w=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1036.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2314.6,0)"><path data-c="1D6FE" d="M31 249Q11 249 11 258Q11 275 26 304T66 365T129 418T206 441Q233 441 239 440Q287 429 318 386T371 255Q385 195 385 170Q385 166 386 166L398 193Q418 244 443 300T486 391T508 430Q510 431 524 431H537Q543 425 543 422Q543 418 522 378T463 251T391 71Q385 55 378 6T357 -100Q341 -165 330 -190T303 -216Q286 -216 286 -188Q286 -138 340 32L346 51L347 69Q348 79 348 100Q348 257 291 317Q251 355 196 355Q148 355 108 329T51 260Q49 251 47 251Q45 249 31 249Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3135.3,0)"><path data-c="2208" d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4080.1,0)"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z" style="stroke-width:3;"></path></g></g></g>',1),k=[w],f=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"B"),t("mo",{stretchy:"false"},"→"),t("mi",null,"γ"),t("mo",null,"∈"),t("mi",null,"I")])],-1),b=a('<h4 id="从活前缀nfa构造分析表" tabindex="-1">从活前缀NFA构造分析表 <a class="header-anchor" href="#从活前缀nfa构造分析表" aria-label="Permalink to &quot;从活前缀NFA构造分析表&quot;">​</a></h4><h4 id="冲突" tabindex="-1">冲突 <a class="header-anchor" href="#冲突" aria-label="Permalink to &quot;冲突&quot;">​</a></h4><p>上下文无关文法CFG不总是LR(0)文法，在项目集</p><h5 id="移进-归约冲突" tabindex="-1">移进-归约冲突 <a class="header-anchor" href="#移进-归约冲突" aria-label="Permalink to &quot;移进-归约冲突&quot;">​</a></h5><p>移进项目核和归约项目同时存在，形如：</p>',5),H={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.036ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.796ex",height:"5.204ex",role:"img",focusable:"false",viewBox:"0 -1400 4772 2300","aria-hidden":"true"},v=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,650)"><g data-mml-node="mtd" transform="translate(9,0)"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mtd" transform="translate(759,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1555.6,0)"><path data-c="1D6FC" d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2417.8,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2918,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3447,0)"><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mtr" transform="translate(0,-650)"><g data-mml-node="mtd"><g data-mml-node="mi"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mtd" transform="translate(759,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1555.6,0)"><path data-c="1D6FE" d="M31 249Q11 249 11 258Q11 275 26 304T66 365T129 418T206 441Q233 441 239 440Q287 429 318 386T371 255Q385 195 385 170Q385 166 386 166L398 193Q418 244 443 300T486 391T508 430Q510 431 524 431H537Q543 425 543 422Q543 418 522 378T463 251T391 71Q385 55 378 6T357 -100Q341 -165 330 -190T303 -216Q286 -216 286 -188Q286 -138 340 32L346 51L347 69Q348 79 348 100Q348 257 291 317Q251 355 196 355Q148 355 108 329T51 260Q49 251 47 251Q45 249 31 249Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2098.6,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g></g></g></g></g></g>',1),M=[v],R=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[t("mtr",null,[t("mtd",null,[t("mi",null,"A")]),t("mtd",null,[t("mi"),t("mo",{stretchy:"false"},"→"),t("mi",null,"α"),t("mo",null,"⋅"),t("mi",null,"a"),t("mi",null,"β")])]),t("mtr",null,[t("mtd",null,[t("mi",null,"B")]),t("mtd",null,[t("mi"),t("mo",{stretchy:"false"},"→"),t("mi",null,"γ"),t("mo",null,"⋅")])])])])],-1),Z=t("p",null,[e("当到达该状态且下一个输入符号为"),t("code",null,"a"),e("时，无法确定是移进还是归约，因为 LR(0) 分析时不向前查看输入符号的。")],-1),C=t("h5",{id:"归约-归约冲突",tabindex:"-1"},[e("归约-归约冲突 "),t("a",{class:"header-anchor",href:"#归约-归约冲突","aria-label":'Permalink to "归约-归约冲突"'},"​")],-1),S=t("p",null,"归约项目和归约项目也可能同时存在，形如：",-1),P={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.489ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.728ex",height:"2.109ex",role:"img",focusable:"false",viewBox:"0 -716 6951.8 932","aria-hidden":"true"},q=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1027.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2305.6,0)"><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3093.8,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mspace" transform="translate(3371.8,0)"></g><g data-mml-node="mi" transform="translate(3594,0)"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4630.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5908.6,0)"><path data-c="1D6FE" d="M31 249Q11 249 11 258Q11 275 26 304T66 365T129 418T206 441Q233 441 239 440Q287 429 318 386T371 255Q385 195 385 170Q385 166 386 166L398 193Q418 244 443 300T486 391T508 430Q510 431 524 431H537Q543 425 543 422Q543 418 522 378T463 251T391 71Q385 55 378 6T357 -100Q341 -165 330 -190T303 -216Q286 -216 286 -188Q286 -138 340 32L346 51L347 69Q348 79 348 100Q348 257 291 317Q251 355 196 355Q148 355 108 329T51 260Q49 251 47 251Q45 249 31 249Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6673.8,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mspace" transform="translate(6951.8,0)"></g></g></g>',1),D=[q],V=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"→"),t("mi",null,"β"),t("mo",null,"⋅"),t("mspace",{linebreak:"newline"}),t("mi",null,"B"),t("mo",{stretchy:"false"},"→"),t("mi",null,"γ"),t("mo",null,"⋅"),t("mspace",{linebreak:"newline"})])],-1),I=t("p",null,"此时无论下一个输入符号时什么，都无法确定归约采用哪个产生式，我们将同时存在两个以上归约中项目的状态的称为归约-归约冲突",-1),j=t("h3",{id:"slr分析",tabindex:"-1"},[e("SLR分析 "),t("a",{class:"header-anchor",href:"#slr分析","aria-label":'Permalink to "SLR分析"'},"​")],-1),F=t("p",null,"由于多数实用程序的文法无法满足 LR(0) 文法的条件，于是前辈们设计出了简单LR(1)分析法（Simple LR parser）。SLR分析的基本思想是在对存在冲突的项目集中，向前看一个输入符号，通过检查当前符号的 FOLLOW 集来决定选用产生式，解决冲突。",-1),N=t("p",null,"SLR 分析可以解决部分冲突，但是无法解决 FOLLOW 集相交的冲突。",-1),E=t("h3",{id:"lr-1-分析",tabindex:"-1"},[e("LR(1)分析 "),t("a",{class:"header-anchor",href:"#lr-1-分析","aria-label":'Permalink to "LR(1)分析"'},"​")],-1),B=t("p",null,"在特定位置，A的后继符号集合是 FOLLOW 集的子集，",-1),G={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.782ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -716 5207.7 910","aria-hidden":"true"},J=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1027.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2305.6,0)"><path data-c="1D6FC" d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3167.8,0)"><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3668,0)"><path data-c="1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4234,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4678.7,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g></g></g>',1),z=[J],$=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"→"),t("mi",null,"α"),t("mo",null,"⋅"),t("mi",null,"β"),t("mo",null,","),t("mi",null,"a")])],-1),W=a('<p>LR(1)分析法对搜索符的计算方法比较确切，对文法放宽了要求，但由于他的构造对某些同心集的分裂使得状态急剧增长，从而导致存储容量的急剧增加。</p><h3 id="lalr分析" tabindex="-1">LALR分析 <a class="header-anchor" href="#lalr分析" aria-label="Permalink to &quot;LALR分析&quot;">​</a></h3><p>为了克服LR(0)分析法状态太多的缺点，可以采用对LR(1)项目集规范族合并同心集的方法，如果合并同心集后不产生新的冲突，则称为 LALR(1) 分析。</p><p>两个项目仅有展望符不同，则称为<strong>同心项目集</strong>，寻找具有相同核心的LR(1)项目集，并将这些项目集合并为一个项目集，然后根据合并后得到的构造语法分析表。</p><p>LALR分析法在形式上与LR(1)相同，大小在LR(0)/SLR相当，在分析能力上：LR(0)&lt;SLR &lt; LALR &lt; LR(1)</p><h4 id="归约-归约冲突-1" tabindex="-1">归约-归约冲突 <a class="header-anchor" href="#归约-归约冲突-1" aria-label="Permalink to &quot;归约-归约冲突&quot;">​</a></h4><h4 id="推迟错误的发现" tabindex="-1">推迟错误的发现 <a class="header-anchor" href="#推迟错误的发现" aria-label="Permalink to &quot;推迟错误的发现&quot;">​</a></h4><p>LALR分析法可能会作多余的归约动作，但绝不会作错误的移进操作</p><h2 id="二义性文法的lr分析" tabindex="-1">二义性文法的LR分析 <a class="header-anchor" href="#二义性文法的lr分析" aria-label="Permalink to &quot;二义性文法的LR分析&quot;">​</a></h2><p>二义性文法都不是 LR 文法。</p><p>二义性文法可以通过规定优先关系和结合性处理，可能构造出无冲突的 LR 分析表，且分析速度相较于无二义性文法的 LR 分析速度要快一些。</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li>王生原, 董渊, 张素琴, 吕映芝, 蒋维杜. 编译原理. 清华大学出版社</li></ul>',13);function U(K,X,Y,t3,e3,a3){return l(),Q("div",null,[r,t("p",null,[e("若有项目集 "),t("mjx-container",i,[(l(),Q("svg",T,h)),m]),e(" 且 "),t("mjx-container",c,[(l(),Q("svg",p,u)),_]),e("，则 "),t("mjx-container",x,[(l(),Q("svg",L,k)),f])]),b,t("mjx-container",H,[(l(),Q("svg",y,M)),R]),Z,C,S,t("mjx-container",P,[(l(),Q("svg",A,D)),V]),I,j,F,N,E,B,t("p",null,[e("规范LR(1)项目 "),t("mjx-container",G,[(l(),Q("svg",O,z)),$]),e("，其中 a 称为展望符")]),W])}const s3=s(n,[["render",U]]);export{Q3 as __pageData,s3 as default};
