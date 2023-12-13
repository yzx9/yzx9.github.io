import{_ as e,o as a,c as n,a as s}from"./chunks/framework.heUNgYAJ.js";const f=JSON.parse('{"title":"代码整洁之道——命名","description":"","frontmatter":{"date":"2021-03-11T17:12:23.000Z","updated":"2021-03-11T17:12:23.000Z","categories":["Computer Science","Coding Style"],"tags":["Clean Code","Naming"]},"headers":[{"level":1,"title":"代码整洁之道——命名","slug":"代码整洁之道——命名","link":"#代码整洁之道——命名","children":[{"level":2,"title":"有意义的命名","slug":"有意义的命名","link":"#有意义的命名","children":[]},{"level":2,"title":"描述性的命名与重构","slug":"描述性的命名与重构","link":"#描述性的命名与重构","children":[]},{"level":2,"title":"适当的语境与单词顺序","slug":"适当的语境与单词顺序","link":"#适当的语境与单词顺序","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}]}],"relativePath":"posts/2021/03/11/naming-for-clean-code.md","filePath":"posts/2021/03/11/naming-for-clean-code.md"}'),l={name:"posts/2021/03/11/naming-for-clean-code.md"},o=s(`<h1 id="代码整洁之道——命名" tabindex="-1">代码整洁之道——命名 <a class="header-anchor" href="#代码整洁之道——命名" aria-label="Permalink to &quot;代码整洁之道——命名&quot;">​</a></h1><ol><li>Choose descriptive and unambiguous names.</li><li>Make meaningful distinction.</li><li>Use pronounceable names.</li><li>Use searchable names.</li><li>Replace magic numbers with named constants.</li><li>Avoid encodings. Don&#39;t append prefixes or type information.</li></ol><h2 id="有意义的命名" tabindex="-1">有意义的命名 <a class="header-anchor" href="#有意义的命名" aria-label="Permalink to &quot;有意义的命名&quot;">​</a></h2><p>选取一个命名首先应该是一个有意义的命名，并且是一个没有误导性的名称：</p><ul><li><code>accountList</code> 不是一个好名称，最好不要用一个<code>list</code>来表示一个列表，即使它真的是一个列表，它对程序员有特殊的意义，至少<code>accounts</code>都比它好</li><li><code>a1</code> <code>a2</code> 也不是个好名称，除了循环变量常常是 <code>i</code> <code>j</code> <code>k</code> 外，尽量用一个有意义的名字</li><li><code>nameString</code> 更离谱了，难不成 <code>name</code> 会是个浮点数？对了，还有 <code>Variable</code> <code>Info</code>……</li><li><code>HolyHandGrenade</code> 说实话我查了会儿词典才懂得这和 <code>DeleteItems</code> 是一个意思，别用这类与文化紧密相关的命名（也许哪天是个老外维护你的代码呢</li><li><code>HP</code> 是什么呢，会是惠普吗？别用一个缩写了（中文名首字母就更难受了），别太在意名称的长短，现在谁的编辑器没有变量改名和智能推导呢？</li></ul><h2 id="描述性的命名与重构" tabindex="-1">描述性的命名与重构 <a class="header-anchor" href="#描述性的命名与重构" aria-label="Permalink to &quot;描述性的命名与重构&quot;">​</a></h2><p>使用一个描述性的名称，</p><h2 id="适当的语境与单词顺序" tabindex="-1">适当的语境与单词顺序 <a class="header-anchor" href="#适当的语境与单词顺序" aria-label="Permalink to &quot;适当的语境与单词顺序&quot;">​</a></h2><p>为了达意，你还可以为你的命名加上一个语境，例如 <code>AddrFirstName</code>、 <code>AddrLastName</code>和<code>AddrState</code>，除了可以帮助你快速了解这个字段，还可以让你的编辑器帮助你补齐字段。为了达成这一目标，你可以重新组织你的单词顺序：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Bad</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- ClearSearchButton.vue</span></span>
<span class="line"><span>|- ExcludeFromSearchInput.vue</span></span>
<span class="line"><span>|- LaunchOnStartupCheckbox.vue</span></span>
<span class="line"><span>|- RunSearchButton.vue</span></span>
<span class="line"><span>|- SearchInput.vue</span></span>
<span class="line"><span>|- TermsCheckbox.vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Good</span></span>
<span class="line"><span>components/</span></span>
<span class="line"><span>|- SearchButtonClear.vue</span></span>
<span class="line"><span>|- SearchButtonRun.vue</span></span>
<span class="line"><span>|- SearchInputQuery.vue</span></span>
<span class="line"><span>|- SearchInputExcludeGlob.vue</span></span>
<span class="line"><span>|- SettingsCheckboxTerms.vue</span></span>
<span class="line"><span>|- SettingsCheckboxLaunchOnStartup.vue</span></span></code></pre></div><p>你可能会疑惑：</p><blockquote><p>“为什么我们给组件命名时不多遵从自然语言呢？”</p></blockquote><p>在自然的英文里，形容词和其它描述语通常都出现在名词之前，否则需要使用连接词。比如：</p><ul><li>Coffee <em>with</em> milk</li><li>Soup <em>of the</em> day</li><li>Visitor <em>to the</em> museum</li></ul><p>如果你愿意，你完全可以在组件名里包含这些连接词，但是单词的顺序很重要。 因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。</p><p>不过也别加上无用的语境，例如每个变量都加上你的公司缩写 <code>GSD(Gas Station Deluxe)</code>，即使你很爱他 😃</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>从写下第一行代码开始，命名就不断纠缠着程序员，作为”两大难题“之一，命名显得格外重要，它值得你画上一些时间去修改变量或者函数的名字，项目的下一个接手者会感谢你的。</p><p>最后，不妨上 <a href="https://unbug.github.io/codelf/" target="_blank" rel="noreferrer">CODELF</a> 搜搜看，看看其他人都是怎么命名的吧。</p><blockquote><p>There are only two hard things in Computer Science: cache invalidation and naming things.</p><p>-- Phil Karlton</p></blockquote><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><p>Robert C. Martin. Clean code</p></li><li><p>Evan You. <a href="https://v3.vuejs.org/style-guide/#order-of-words-in-component-names-strongly-recommended" target="_blank" rel="noreferrer">Order of words in component names</a></p></li></ul>`,22),t=[o];function i(c,p,r,d,u,h){return a(),n("div",null,t)}const g=e(l,[["render",i]]);export{f as __pageData,g as default};
