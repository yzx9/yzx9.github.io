import{_ as r,o as a,c as l,b as t,d as i,a as e}from"./chunks/framework.heUNgYAJ.js";const O=JSON.parse('{"title":"图","description":"","frontmatter":{"title":"图","date":"2019-10-24T19:30:32.000Z","updated":"2019-10-24T19:30:32.000Z","categories":["Computer Science","Data Structure","Graph"],"tags":["Data Structure"]},"headers":[{"level":1,"title":"图","slug":"图","link":"#图","children":[{"level":2,"title":"基本术语","slug":"基本术语","link":"#基本术语","children":[]},{"level":2,"title":"存储结构","slug":"存储结构","link":"#存储结构","children":[{"level":3,"title":"邻接矩阵表示法","slug":"邻接矩阵表示法","link":"#邻接矩阵表示法","children":[]},{"level":3,"title":"邻接表表示法 (图的数组表示法)","slug":"邻接表表示法-图的数组表示法","link":"#邻接表表示法-图的数组表示法","children":[]},{"level":3,"title":"十字链表","slug":"十字链表","link":"#十字链表","children":[]},{"level":3,"title":"邻接多重表","slug":"邻接多重表","link":"#邻接多重表","children":[]}]},{"level":2,"title":"遍历","slug":"遍历","link":"#遍历","children":[{"level":3,"title":"深度优先搜索 (Deep First Search)","slug":"深度优先搜索-deep-first-search","link":"#深度优先搜索-deep-first-search","children":[]},{"level":3,"title":"广度优先搜索 (Breadth First Search)","slug":"广度优先搜索-breadth-first-search","link":"#广度优先搜索-breadth-first-search","children":[]}]},{"level":2,"title":"最小生成树","slug":"最小生成树","link":"#最小生成树","children":[{"level":3,"title":"普里姆算法 (prim)","slug":"普里姆算法-prim","link":"#普里姆算法-prim","children":[]},{"level":3,"title":"克鲁斯卡尔算法 (kruskal)","slug":"克鲁斯卡尔算法-kruskal","link":"#克鲁斯卡尔算法-kruskal","children":[]}]},{"level":2,"title":"连通分量","slug":"连通分量","link":"#连通分量","children":[]},{"level":2,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":2,"title":"关键路径","slug":"关键路径","link":"#关键路径","children":[]},{"level":2,"title":"最短路径","slug":"最短路径","link":"#最短路径","children":[{"level":3,"title":"单源","slug":"单源","link":"#单源","children":[]},{"level":3,"title":"所有结点","slug":"所有结点","link":"#所有结点","children":[]}]}]}],"relativePath":"posts/2019/10/24/graph.md","filePath":"posts/2019/10/24/graph.md"}'),s={name:"posts/2019/10/24/graph.md"},T=e('<h1 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#基本术语">基本术语</a></li><li><a href="#存储结构">存储结构</a><ul><li><a href="#邻接矩阵表示法">邻接矩阵表示法</a></li><li><a href="#邻接表表示法-图的数组表示法">邻接表表示法 (图的数组表示法)</a></li><li><a href="#十字链表">十字链表</a></li><li><a href="#邻接多重表">邻接多重表</a></li></ul></li><li><a href="#遍历">遍历</a><ul><li><a href="#深度优先搜索-deep-first-search">深度优先搜索 (Deep First Search)</a></li><li><a href="#广度优先搜索-breadth-first-search">广度优先搜索 (Breadth First Search)</a></li></ul></li><li><a href="#最小生成树">最小生成树</a><ul><li><a href="#普里姆算法-prim">普里姆算法 (prim)</a></li><li><a href="#克鲁斯卡尔算法-kruskal">克鲁斯卡尔算法 (kruskal)</a></li></ul></li><li><a href="#连通分量">连通分量</a></li><li><a href="#拓扑排序">拓扑排序</a></li><li><a href="#关键路径">关键路径</a></li><li><a href="#最短路径">最短路径</a><ul><li><a href="#单源">单源</a></li><li><a href="#所有结点">所有结点</a></li></ul></li></ul></nav><h2 id="基本术语" tabindex="-1">基本术语 <a class="header-anchor" href="#基本术语" aria-label="Permalink to &quot;基本术语&quot;">​</a></h2>',3),o=t("li",null,"完全图 (每个顶点之间都有边/弧连接)",-1),n={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.356ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2367.3 899","aria-hidden":"true"},Q=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(600,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(898,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1383,0)"><g data-mml-node="mi"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(510,-150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g>',1),d=[Q],c=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n"),t("mi",null,"l"),t("mi",null,"o"),t("msub",null,[t("mi",null,"g"),t("mi",null,"n")])])],-1),m=t("li",null,"度 (v 相关联边数), 出度/入度",-1),u=t("li",null,"权 -> 网",-1),p=t("li",null,"路径/回路(环), 简单路径: 无重复顶点",-1),_=t("li",null,"连通图",-1),g=e('<h2 id="存储结构" tabindex="-1">存储结构 <a class="header-anchor" href="#存储结构" aria-label="Permalink to &quot;存储结构&quot;">​</a></h2><h3 id="邻接矩阵表示法" tabindex="-1">邻接矩阵表示法 <a class="header-anchor" href="#邻接矩阵表示法" aria-label="Permalink to &quot;邻接矩阵表示法&quot;">​</a></h3><ul><li>那当然是一个矩阵咯</li><li>优点: 方便啊</li><li>缺点: 对稀疏图来说, 浪费空间</li></ul><h3 id="邻接表表示法-图的数组表示法" tabindex="-1">邻接表表示法 (图的数组表示法) <a class="header-anchor" href="#邻接表表示法-图的数组表示法" aria-label="Permalink to &quot;邻接表表示法 (图的数组表示法)&quot;">​</a></h3><ul><li>数组储存顶点, 链表储存弧</li></ul><h3 id="十字链表" tabindex="-1">十字链表 <a class="header-anchor" href="#十字链表" aria-label="Permalink to &quot;十字链表&quot;">​</a></h3><h3 id="邻接多重表" tabindex="-1">邻接多重表 <a class="header-anchor" href="#邻接多重表" aria-label="Permalink to &quot;邻接多重表&quot;">​</a></h3><h2 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h2><p>visited[]</p><h3 id="深度优先搜索-deep-first-search" tabindex="-1">深度优先搜索 (Deep First Search) <a class="header-anchor" href="#深度优先搜索-deep-first-search" aria-label="Permalink to &quot;深度优先搜索 (Deep First Search)&quot;">​</a></h3><p>pre[]; // =&gt; 记录前驱结点, 同时充当 visited Stack stack;</p><h3 id="广度优先搜索-breadth-first-search" tabindex="-1">广度优先搜索 (Breadth First Search) <a class="header-anchor" href="#广度优先搜索-breadth-first-search" aria-label="Permalink to &quot;广度优先搜索 (Breadth First Search)&quot;">​</a></h3><p>pre[]; Query query;</p><h2 id="最小生成树" tabindex="-1">最小生成树 <a class="header-anchor" href="#最小生成树" aria-label="Permalink to &quot;最小生成树&quot;">​</a></h2><p>生成树:</p><ul><li>DFS -&gt; 深度优先生成树</li><li>BFS -&gt; 广度优先生成树</li></ul><p>最小生成树:</p><ul><li>一副连通加权无向图中一棵权值最小的生成树</li></ul><h3 id="普里姆算法-prim" tabindex="-1">普里姆算法 (prim) <a class="header-anchor" href="#普里姆算法-prim" aria-label="Permalink to &quot;普里姆算法 (prim)&quot;">​</a></h3><ol><li>任选起点</li><li>选择权值最小且连接已选结点与未选结点的边加入树</li><li>重复步骤 2</li></ol>',20),x=t("thead",null,[t("tr",null,[t("th",null,"存储结构"),t("th",null,"复杂度")])],-1),f=t("td",null,"邻接矩阵",-1),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.571ex",height:"2.452ex",role:"img",focusable:"false",viewBox:"0 -833.9 2462.6 1083.9","aria-hidden":"true"},b=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(1152,0)"><g data-mml-node="mi"><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(518,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(2073.6,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),v=[b],y=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("msup",null,[t("mi",null,"v"),t("mn",null,"2")]),t("mo",{stretchy:"false"},")")])],-1),M=t("td",null,"邻接表",-1),S={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.62ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4252 1000","aria-hidden":"true"},L=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mtext" transform="translate(1618,0)"><path data-c="A0" d="" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1868,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2166,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2651,0)"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mtext" transform="translate(3128,0)"><path data-c="A0" d="" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3378,0)"><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3863,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),Z=[L],P=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mtext",null," "),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mtext",null," "),t("mi",null,"v"),t("mo",{stretchy:"false"},")")])],-1),D=t("h3",{id:"克鲁斯卡尔算法-kruskal",tabindex:"-1"},[i("克鲁斯卡尔算法 (kruskal) "),t("a",{class:"header-anchor",href:"#克鲁斯卡尔算法-kruskal","aria-label":'Permalink to "克鲁斯卡尔算法 (kruskal)"'},"​")],-1),H=t("ol",null,[t("li",null,"边按权重 小->大 排序"),t("li",null,"选取权值最小且连接不处于同一连接分量的两结点的边加入树"),t("li",null,"重复步骤 2")],-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.09ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2692 899","aria-hidden":"true"},A=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mtext" transform="translate(466,0)"><path data-c="A0" d="" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(716,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1014,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1499,0)"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mtext" transform="translate(1976,0)"><path data-c="A0" d="" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2226,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g></g></g>',1),B=[A],I=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"e"),t("mtext",null," "),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mtext",null," "),t("mi",null,"e")])],-1),j=e('<p>并查集</p><h2 id="连通分量" tabindex="-1">连通分量 <a class="header-anchor" href="#连通分量" aria-label="Permalink to &quot;连通分量&quot;">​</a></h2><h2 id="拓扑排序" tabindex="-1">拓扑排序 <a class="header-anchor" href="#拓扑排序" aria-label="Permalink to &quot;拓扑排序&quot;">​</a></h2><h2 id="关键路径" tabindex="-1">关键路径 <a class="header-anchor" href="#关键路径" aria-label="Permalink to &quot;关键路径&quot;">​</a></h2><h2 id="最短路径" tabindex="-1">最短路径 <a class="header-anchor" href="#最短路径" aria-label="Permalink to &quot;最短路径&quot;">​</a></h2><h3 id="单源" tabindex="-1">单源 <a class="header-anchor" href="#单源" aria-label="Permalink to &quot;单源&quot;">​</a></h3><h3 id="所有结点" tabindex="-1">所有结点 <a class="header-anchor" href="#所有结点" aria-label="Permalink to &quot;所有结点&quot;">​</a></h3>',7);function N(F,E,R,G,J,z){return a(),l("div",null,[T,t("ul",null,[o,t("li",null,[i("稀疏图/稠密图: "),t("mjx-container",n,[(a(),l("svg",h,d)),c])]),m,u,p,_]),g,t("table",null,[x,t("tbody",null,[t("tr",null,[f,t("td",null,[t("mjx-container",k,[(a(),l("svg",w,v)),y])])]),t("tr",null,[M,t("td",null,[t("mjx-container",S,[(a(),l("svg",q,Z)),P])])])])]),D,H,t("p",null,[i("复杂度: "),t("mjx-container",V,[(a(),l("svg",C,B)),I])]),j])}const K=r(s,[["render",N]]);export{O as __pageData,K as default};
