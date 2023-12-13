import{_ as s,o as e,c as a,a as i}from"./chunks/framework.heUNgYAJ.js";const E=JSON.parse('{"title":"将错误视为一等公民","description":"","frontmatter":{"date":"2022-03-30T00:00:00.000Z","updated":"2022-03-30T00:00:00.000Z","author":"Celeste","location":"Shanghai University, Shanghai","tags":["Go"],"categories":["Computer Science","Language","Go"]},"headers":[{"level":1,"title":"将错误视为一等公民","slug":"将错误视为一等公民","link":"#将错误视为一等公民","children":[{"level":2,"title":"Read More","slug":"read-more","link":"#read-more","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}]}],"relativePath":"drafts/error-handing-in-go.md","filePath":"drafts/error-handing-in-go.md"}'),n={name:"drafts/error-handing-in-go.md"},t=i(`<h1 id="将错误视为一等公民" tabindex="-1">将错误视为一等公民 <a class="header-anchor" href="#将错误视为一等公民" aria-label="Permalink to &quot;将错误视为一等公民&quot;">​</a></h1><p>Go 的哲学中将错误视为一等公民。在普通函数中，通常将错误作为最后一个返回值来传递错误。在并发程序中，错误处理更加困难。当一个并发进程独立于其父进程或兄弟进程运行时发生错误，它往往 <strong>缺少足够的上下文(Context)</strong> 来处理错误。</p><p>一般来说，你的并发进程应该把他们的错误发送到你的程序的另一部分，它拥有程序更完整的状态，可以做出更明智的决定。一个直接的方法是在构建 goroutine 的返回值时，将错误与结果类型紧密结合，并通过<strong>相同的通信线</strong>传递，就像常规的同步函数一样：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Error </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http.Response</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> checkStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(done </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;-chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, urls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;-chan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Result {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>将错误视为一等公民有效的将错误处理从生产者 goroutine 中转移到了消费者甚至是 main goroutine，以便做出更明智的决定。</p><h2 id="read-more" tabindex="-1">Read More <a class="header-anchor" href="#read-more" aria-label="Permalink to &quot;Read More&quot;">​</a></h2><ul><li><a href="https://devblogs.microsoft.com/oldnewthing/20040422-00/?p=39683" target="_blank" rel="noreferrer">Cleaner, more elegant, and wrong</a></li><li><a href="https://devblogs.microsoft.com/oldnewthing/20050114-00/?p=36693" target="_blank" rel="noreferrer">Cleaner, more elegant, and harder to recognize</a></li></ul><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2>`,8),r=[t];function l(h,o,p,d,k,c){return e(),a("div",null,r)}const u=s(n,[["render",l]]);export{E as __pageData,u as default};
