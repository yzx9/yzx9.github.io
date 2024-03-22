import{g as l,h as e,o as a,j as i}from"./chunks/framework.BOQ8FqoK.js";const g=JSON.parse('{"title":"从 url -> 网页","description":"","frontmatter":{"date":"2019-10-28T00:00:00.000Z","updated":"2019-10-28T00:00:00.000Z","categories":["Computer Science","Front End"],"tags":["Browser"]},"headers":[{"level":1,"title":"从 url -> 网页","slug":"从-url-网页","link":"#从-url-网页","children":[]},{"level":1,"title":"1. 请求内容","slug":"_1-请求内容","link":"#_1-请求内容","children":[]},{"level":1,"title":"2. 构建朴素的 DOM 树","slug":"_2-构建朴素的-dom-树","link":"#_2-构建朴素的-dom-树","children":[{"level":2,"title":"流式解析","slug":"流式解析","link":"#流式解析","children":[]}]},{"level":1,"title":"3. 计算 CSS","slug":"_3-计算-css","link":"#_3-计算-css","children":[{"level":2,"title":"流式渲染","slug":"流式渲染","link":"#流式渲染","children":[]},{"level":2,"title":"渲染顺序","slug":"渲染顺序","link":"#渲染顺序","children":[]},{"level":2,"title":"选择器","slug":"选择器","link":"#选择器","children":[]},{"level":2,"title":"没有父选择器","slug":"没有父选择器","link":"#没有父选择器","children":[]}]},{"level":1,"title":"4. 渲染","slug":"_4-渲染","link":"#_4-渲染","children":[{"level":2,"title":"盒模型","slug":"盒模型","link":"#盒模型","children":[]},{"level":2,"title":"排版","slug":"排版","link":"#排版","children":[]},{"level":2,"title":"流式渲染","slug":"流式渲染-1","link":"#流式渲染-1","children":[]}]},{"level":1,"title":"5. 位图合成(可选)","slug":"_5-位图合成-可选","link":"#_5-位图合成-可选","children":[]},{"level":1,"title":"6. 绘制","slug":"_6-绘制","link":"#_6-绘制","children":[]}],"relativePath":"posts/2019/10/28/browser-rendering-process.md","filePath":"posts/2019/10/28/browser-rendering-process.md"}'),r={name:"posts/2019/10/28/browser-rendering-process.md"},t=i('<h1 id="从-url-网页" tabindex="-1">从 url -&gt; 网页 <a class="header-anchor" href="#从-url-网页" aria-label="Permalink to &quot;从 url -&gt; 网页&quot;">​</a></h1><ul><li><a href="#从-url---网页">从 url -&gt; 网页</a></li><li><a href="#1-请求内容">1. 请求内容</a></li><li><a href="#2-构建朴素的-dom-树">2. 构建朴素的 DOM 树</a><ul><li><a href="#流式解析">流式解析</a></li></ul></li><li><a href="#3-计算-css">3. 计算 CSS</a><ul><li><a href="#流式渲染">流式渲染</a></li><li><a href="#渲染顺序">渲染顺序</a></li><li><a href="#选择器">选择器</a></li><li><a href="#没有父选择器">没有父选择器</a></li></ul></li><li><a href="#4-渲染">4. 渲染</a><ul><li><a href="#盒模型">盒模型</a></li><li><a href="#排版">排版</a></li><li><a href="#流式渲染-1">流式渲染</a></li></ul></li><li><a href="#5-位图合成可选">5. 位图合成(可选)</a></li><li><a href="#6-绘制">6. 绘制</a></li></ul><h1 id="_1-请求内容" tabindex="-1">1. 请求内容 <a class="header-anchor" href="#_1-请求内容" aria-label="Permalink to &quot;1. 请求内容&quot;">​</a></h1><p>HTTP / HTTPS 请求数据, url -&gt; 文本内容</p><h1 id="_2-构建朴素的-dom-树" tabindex="-1">2. 构建朴素的 DOM 树 <a class="header-anchor" href="#_2-构建朴素的-dom-树" aria-label="Permalink to &quot;2. 构建朴素的 DOM 树&quot;">​</a></h1><h2 id="流式解析" tabindex="-1">流式解析 <a class="header-anchor" href="#流式解析" aria-label="Permalink to &quot;流式解析&quot;">​</a></h2><p>状态机分词: <a href="https://github.com/aimergenge/toy-html-parser" target="_blank" rel="noreferrer">https://github.com/aimergenge/toy-html-parser</a></p><h1 id="_3-计算-css" tabindex="-1">3. 计算 CSS <a class="header-anchor" href="#_3-计算-css" aria-label="Permalink to &quot;3. 计算 CSS&quot;">​</a></h1><h2 id="流式渲染" tabindex="-1">流式渲染 <a class="header-anchor" href="#流式渲染" aria-label="Permalink to &quot;流式渲染&quot;">​</a></h2><p>每生成一个dom节点, 便立刻去匹配相应的css规则</p><h2 id="渲染顺序" tabindex="-1">渲染顺序 <a class="header-anchor" href="#渲染顺序" aria-label="Permalink to &quot;渲染顺序&quot;">​</a></h2><p>父节点 -&gt; 子节点</p><h2 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h2><ul><li>混合选择器</li></ul><p>在激活的时候父元素已经确定好了</p><ul><li>后代选择器</li></ul><p>所有元素都是父元素，并选中自己的子元素</p><ul><li>子元素选择器</li></ul><p>只有父元素为当前节点的 dom 元素会被选中</p><ul><li>在父元素结束标签时，关闭选择器</li></ul><h2 id="没有父选择器" tabindex="-1">没有父选择器 <a class="header-anchor" href="#没有父选择器" aria-label="Permalink to &quot;没有父选择器&quot;">​</a></h2><p>在保证选择器在 DOM 树构建到当前节点时, 已经可以准确判断是是否匹配, 不需要后续节点信息, 保证了上述三条的正常工作</p><h1 id="_4-渲染" tabindex="-1">4. 渲染 <a class="header-anchor" href="#_4-渲染" aria-label="Permalink to &quot;4. 渲染&quot;">​</a></h1><p><strong>作用</strong> 得到内存中的位图</p><p>流式渲染</p><h2 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-label="Permalink to &quot;盒模型&quot;">​</a></h2><p>box-sizing: content-box, border-box, inherit</p><h2 id="排版" tabindex="-1">排版 <a class="header-anchor" href="#排版" aria-label="Permalink to &quot;排版&quot;">​</a></h2><ul><li>正常流: <ul><li>顺次排版</li><li>文字流: 行模型, 折行</li><li>盒模型</li></ul></li><li>绝对定位</li><li><strong>浮动定位</strong>: 先进正常流, 再浮动, 会引起整行重排</li><li>flex</li><li>grid</li><li>表格排版</li></ul><h2 id="流式渲染-1" tabindex="-1">流式渲染 <a class="header-anchor" href="#流式渲染-1" aria-label="Permalink to &quot;流式渲染&quot;">​</a></h2><h1 id="_5-位图合成-可选" tabindex="-1">5. 位图合成(可选) <a class="header-anchor" href="#_5-位图合成-可选" aria-label="Permalink to &quot;5. 位图合成(可选)&quot;">​</a></h1><p><strong>作用</strong> 把子元素合成到父元素盒中</p><p><strong>目的</strong> 加快绘制速度, 最大程度优化渲染</p><p><strong>方法</strong> 猜测不变的元素</p><ul><li>position</li><li>transform</li><li>will-change CSS3 谨慎使用</li></ul><h1 id="_6-绘制" tabindex="-1">6. 绘制 <a class="header-anchor" href="#_6-绘制" aria-label="Permalink to &quot;6. 绘制&quot;">​</a></h1>',36),o=[t];function n(h,s,d,u,c,p){return a(),e("div",null,o)}const f=l(r,[["render",n]]);export{g as __pageData,f as default};
