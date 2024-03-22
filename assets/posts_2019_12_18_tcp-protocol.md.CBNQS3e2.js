import{g as t,h as e,o as a,j as o}from"./chunks/framework.BOQ8FqoK.js";const l="/assets/tcp-header.DcrQ4GbT.jpg",r="/assets/tcp-state-machine.COlqB_vj.jpg",i="/assets/tcp-state-transition.BpOOtpTi.jpg",n="/assets/tcp-shake-hands.CGyFgGry.jpg",s="/assets/tcp-wave.BSJxdi9V.jpg",m=JSON.parse('{"title":"TCP协议","description":"","frontmatter":{"title":"TCP协议","date":"2019-12-18T09:56:00.000Z","updated":"2019-12-18T09:56:00.000Z","categories":["Computer Science","Network"],"tags":["Network"]},"headers":[{"level":1,"title":"TCP","slug":"tcp","link":"#tcp","children":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"报文格式","slug":"报文格式","link":"#报文格式","children":[]},{"level":2,"title":"有限状态机及状态变迁","slug":"有限状态机及状态变迁","link":"#有限状态机及状态变迁","children":[]},{"level":2,"title":"三次握手","slug":"三次握手","link":"#三次握手","children":[{"level":3,"title":"为什么需要第三次握手?","slug":"为什么需要第三次握手","link":"#为什么需要第三次握手","children":[]},{"level":3,"title":"SYN Flood 攻击","slug":"syn-flood-攻击","link":"#syn-flood-攻击","children":[]}]},{"level":2,"title":"四次挥手","slug":"四次挥手","link":"#四次挥手","children":[{"level":3,"title":"为什么需要四次挥手?","slug":"为什么需要四次挥手","link":"#为什么需要四次挥手","children":[]},{"level":3,"title":"FIN_WAIT_2 状态一直未接受到 FIN 怎么办?","slug":"fin-wait-2-状态一直未接受到-fin-怎么办","link":"#fin-wait-2-状态一直未接受到-fin-怎么办","children":[]},{"level":3,"title":"为什么存在 TIME_WAIT 状态?","slug":"为什么存在-time-wait-状态","link":"#为什么存在-time-wait-状态","children":[]}]},{"level":2,"title":"可靠传输","slug":"可靠传输","link":"#可靠传输","children":[{"level":3,"title":"自动重传请求协议 ARQ","slug":"自动重传请求协议-arq","link":"#自动重传请求协议-arq","children":[]}]},{"level":2,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[]},{"level":2,"title":"Q&A","slug":"q-a","link":"#q-a","children":[{"level":3,"title":"为什么多个TCP可以连接同一端口，比如HTTP的80端口?","slug":"为什么多个tcp可以连接同一端口-比如http的80端口","link":"#为什么多个tcp可以连接同一端口-比如http的80端口","children":[]},{"level":3,"title":"RST 是什么，为什么会出现","slug":"rst-是什么-为什么会出现","link":"#rst-是什么-为什么会出现","children":[]}]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[]}]}],"relativePath":"posts/2019/12/18/tcp-protocol.md","filePath":"posts/2019/12/18/tcp-protocol.md"}'),p={name:"posts/2019/12/18/tcp-protocol.md"},c=o('<h1 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h1><p>Transmission Control Protocol，传输控制协议。TCP 属于传输层通信协议，基于TCP的应用层协议有: HTTP(s)，SMTP，FTP，Telnet 和 POP3等。</p><p><strong>优点</strong>: 提供可靠传输，具有拥塞控制</p><p><strong>缺点</strong>: 传输效率低，慢启动</p><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><p><strong>面向连接</strong>：使用 TCP 传输数据前，需先建立连接，传输完成后需释放连接。</p><p><strong>全双工通信</strong>：建立 TCP 连接后，双方都可以发送数据</p><p><strong>可靠通信</strong>：TCP协议保证数据不丢失，无差错，不重复且按序到达</p><p><strong>面向字节流</strong>：数据以流的形式传输</p><blockquote><p>TCP 会将数据报文分为数据段(data segment)传输，但由于其可靠性，上层可将其视为字节流传输</p></blockquote><h2 id="报文格式" tabindex="-1">报文格式 <a class="header-anchor" href="#报文格式" aria-label="Permalink to &quot;报文格式&quot;">​</a></h2><p><img src="'+l+'" alt="TCP Header - 20 byte"></p><p>报文首部最小长度为20字节</p><p><strong>源端口，目的端口</strong>： 表明发送端所使用的端口号和要连接的目标主机的端口号，不包含IP地址。</p><p><strong>序号（seq）</strong>： 表明发送的数据包的顺序，一般为上次发送包中的顺序号+1。 若该数据包是整个TCP连接中的第一个包（SYN包），则该值是随机生成的。</p><p><strong>确认号（ack）</strong>： 表明本端TCP已经接收到的数据，其值表示期待对端发送的下一个字节的序号。 实际上告诉对方，在这个序号减1以前的字节已正确接收。 若该数据包是整个TCP连接中的第一个包（SYN包），则确认号一般为0。</p><p><strong>数据偏移</strong>： 表示以32位（4字节）为单位的TCP分组头的总长度（首部长度），用于确定用户数据区的起始位置。 在没有可变内容的情况下，TCP头部的大小为20字节，对应该值为5。</p><p><strong>标志位</strong>：</p><ul><li>紧急标志位（URG）：开启时表明此数据包处于紧急状态应该优先处理</li><li>确认标志位（ACK）：开启时表明确认号有效，否则忽略确认号</li><li>推送标志位（PSH）：开启时表明应该尽快交付给应用进程，而不必等到缓存区填满才推送，比如 telnet 的场景</li><li>复位标志位（RST）：开启时表明TCP连接出现连接出现错误，数据包非法拒绝连接</li><li>同步标志位（SYN）：开启时表明连接建立的标志</li><li>终止标志位（FIN）：开启时表明释放一个连接</li></ul><p><strong>窗口大小</strong>： 表明期望接受到的数据包字节数，用于拥塞控制。</p><p><strong>校验和</strong>： 实现对TCP报文头以及数据区进行校验。</p><p><strong>紧急指针</strong>： 在紧急状态下（URG打开），指出窗口中紧急数据的位置（末端）。</p><p><strong>选项（可变）</strong>： 用于支持一些特殊的变量，比如最大分组长度(MSS)，然后将其填充为32 bit的整数倍。</p><h2 id="有限状态机及状态变迁" tabindex="-1">有限状态机及状态变迁 <a class="header-anchor" href="#有限状态机及状态变迁" aria-label="Permalink to &quot;有限状态机及状态变迁&quot;">​</a></h2><p><img src="'+r+'" alt="TCP State Machine"></p><p><img src="'+i+'" alt="TCP State Transition"></p><h2 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h2><p><img src="'+n+'" alt="TCP Shake hands"></p><p><strong>第一次握手</strong>： 客户端向服务器发送请求连接报文，SYN=1，seq=x(随机值)，客户端进入 SYN_SEND 状态，同时打开定时器</p><p><strong>第二次握手</strong>： 服务器向客户端回信，SYN=1，ACK=1，seq=y(随机值)，ack=x+1，服务器端进入 SYN-RCVD 状态</p><p><strong>第三次握手</strong>： 客户端向服务器回信，SYN=0，ACK=1，seq=x+1，ack=y+1，此次握手可以携带数据</p><h3 id="为什么需要第三次握手" tabindex="-1">为什么需要第三次握手? <a class="header-anchor" href="#为什么需要第三次握手" aria-label="Permalink to &quot;为什么需要第三次握手?&quot;">​</a></h3><p>这主要是为了防止已失效的连接请求报文段突然又传送到了B(服务器端)，因而产生错误。所谓“已失效的连接请求报文段”是这样产生的：</p><p><strong>正常情况</strong></p><p>A发出连接请求，但因连接请求报文丢失而未收到确认，于是A再重传一次连接请求。后来收到了确认，建立了连接。数据传输完毕后，就释放了连接。A共发送了两个连接请求报文段，其中第一个丢失，第二个到达了B，没有“已丢失的连接请求报文段”。</p><p><strong>异常情况</strong></p><p>A发出的第一个连接请求报文段并没有丢失，而是在某些网络节点长时间滞留了，以致延误到连接释放以后的某个时间才能到达B。</p><p>本来这是一个早已失效的报文段。但B收到此失效的连接请求报文段后，就误认为A又发出了一次新的连接请求。于是又向A发出确认报文段，同意建立连接。</p><p>假定不采用三次握手，那么只要B发出确认，新的连接就建立了。由于现在A并没有发出建立连接的请求，因此不会理睬B的确认，也不会向B发送数据。但B却以为新的连接已经建立了，并一直等待A发来数据，B的许多资源就这样浪费了。</p><p>采用三次握手的方法可以防止上述异常现象的发生。</p><blockquote><p><strong>如果在规定时间内未收到回信</strong></p><p>会重新发送SYN报文段。如果在几次重发后仍然没有得到服务器的SYN+ACK响应就会放弃，端口切换CLOSE状态，并报告上层。</p></blockquote><h3 id="syn-flood-攻击" tabindex="-1">SYN Flood 攻击 <a class="header-anchor" href="#syn-flood-攻击" aria-label="Permalink to &quot;SYN Flood 攻击&quot;">​</a></h3><p>syn flood 是一种经典的 ddos攻击手段，这里面用到了TCP 三次握手存在的漏洞。 在上面的图中，可以看到当服务端接收到 SYN 后进入 SYN-RECV 状态，此时的连接称为<strong>半连接</strong>，同时会被服务端写入一个<strong>半连接队列</strong>。</p><p>如果攻击者在短时间内不断的向服务端发送大量的 SYN 包而不响应，那么服务器的 半连接队列很快会被写满，从而导致无法工作。实现 syn flood 的手段，可以通过伪造源 IP 的方式，这样服务器的响应就永远到达不了客户端 (握手无法完成)，或通过设定客户端防火墙规则达到同样的目的。</p><p>对 syn flood 实现拦截是比较困难的，可以通过启用 syn_cookies 的方式实现缓解，但最好的办法是通过专业的防火墙来解决。</p><h2 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h2><p><img src="'+s+'" alt="TCP wave"></p><h3 id="为什么需要四次挥手" tabindex="-1">为什么需要四次挥手? <a class="header-anchor" href="#为什么需要四次挥手" aria-label="Permalink to &quot;为什么需要四次挥手?&quot;">​</a></h3><p>当一方发送了FIN，则表示在这一方不再会有数据的发送，进入半关闭状态，但是仍需要接受对方发送的消息。</p><p>其中当被动关闭方受到对方的FIN时，此时往往可能还有数据需要发送过去，因此无法立即发送FIN(也就是无法将FIN与ACK合并发送)，</p><p>而是在等待自己的数据发送完毕后再单独发送FIN，因此整个过程需要四次交互。</p><h3 id="fin-wait-2-状态一直未接受到-fin-怎么办" tabindex="-1">FIN_WAIT_2 状态一直未接受到 FIN 怎么办? <a class="header-anchor" href="#fin-wait-2-状态一直未接受到-fin-怎么办" aria-label="Permalink to &quot;FIN_WAIT_2 状态一直未接受到 FIN 怎么办?&quot;">​</a></h3><p>1。为实现全双工，TCP协议规定需要一直等待FIN才会进入<code>TIME_WAIT</code>，即使网线被剪短... 2。从Telnet，FTP，到Apache，Nginx，几乎所有的TCP服务的实现均遵循了收到客户端的FIN之后立即发送FIN这么一个不成文的事实，也就是说，对于主动关闭的一方，当它发送完FIN进入<code>FIN_WAIT_2</code>状态后，可以在预期的时间内收到对端的FIN从而进入TIMEWAIT状态 3。Linux 2.2 以上可以根据<code>tcp_fin_timeout</code>配置定时器时长，默认 60s，超时后并不会进入TIMEWAIT状态，也不会发送reset。而 Windows 下表现一致，但是会发送reset</p><h3 id="为什么存在-time-wait-状态" tabindex="-1">为什么存在 TIME_WAIT 状态? <a class="header-anchor" href="#为什么存在-time-wait-状态" aria-label="Permalink to &quot;为什么存在 TIME_WAIT 状态?&quot;">​</a></h3><p>当客户端收到了对方的FIN时，会进入TIME_WAIT状态，需要等待 2MSL 以直到确认不会再有重传的数据包之后再进入CLOSED状态</p><p>这么做的原因主要是为了可靠的关闭连接。为了防止网络不稳定情况，比如: 发送给对方的ACK可能会无法及时收到，此时对方可能重传FIN过来，如果提前进入CLOSE则会返回RST而不是ACK，就会影响关闭流程。</p><p>如果频繁的主动关闭连接，可能会产生大量<code>TIME_WAIT</code>，由于<code>TIME_WAIT</code>的连接占用了一个句柄及少量内存(4K)，那么就有可能会影响其他连接的建立，</p><blockquote><p>MSL叫Max Segment Lifetime，也就是关于一个数据包在网络中传输的最大生命周期的预设。关于其时长，RFC 中有 <code>Arbitrarily defined to be 2 minutes.</code></p></blockquote><h2 id="可靠传输" tabindex="-1">可靠传输 <a class="header-anchor" href="#可靠传输" aria-label="Permalink to &quot;可靠传输&quot;">​</a></h2><p>1。无差错 2。发送&amp;接受效率匹配</p><h3 id="自动重传请求协议-arq" tabindex="-1">自动重传请求协议 ARQ <a class="header-anchor" href="#自动重传请求协议-arq" aria-label="Permalink to &quot;自动重传请求协议 ARQ&quot;">​</a></h3><p><strong>定义</strong> 传输出现差错时，接收方自动请求发送方重传出错数据</p><p><strong>作用</strong> 无差错传输</p><p><strong>确认机制</strong> 1。发送方每发送一帧，都需要等待接收方应答信号 2。接收方每接受一帧，都需要反馈一个应答信号 3。若接收方不反馈应答信号，则发送方必需一直等待</p><p><strong>超时重传</strong> 1。发送方发送帧后开启计时器 2。超时后重发该数据帧，直到发送成功为止</p><h4 id="停等式-arq-stop-and-wait" tabindex="-1">停等式 ARQ (Stop and Wait) <a class="header-anchor" href="#停等式-arq-stop-and-wait" aria-label="Permalink to &quot;停等式 ARQ (Stop and Wait)&quot;">​</a></h4><p>发送窗口大小 = 1 接受窗口大小 = 1</p><h4 id="后退n帧协议-连续arq协议" tabindex="-1">后退N帧协议 (连续ARQ协议) <a class="header-anchor" href="#后退n帧协议-连续arq协议" aria-label="Permalink to &quot;后退N帧协议 (连续ARQ协议)&quot;">​</a></h4><p>发送窗口大小 &gt; 1 接受窗口大小 = 1</p><h5 id="累计确认" tabindex="-1">累计确认 <a class="header-anchor" href="#累计确认" aria-label="Permalink to &quot;累计确认&quot;">​</a></h5><p>收到多个数据分组后，只需对按序到达的最后一个分组确认</p><p><strong>优点</strong> 实现简单</p><p><strong>缺点</strong> 无法向发送方反馈所有正确接收到的分组信息</p><h5 id="后退n帧" tabindex="-1">后退N帧 <a class="header-anchor" href="#后退n帧" aria-label="Permalink to &quot;后退N帧&quot;">​</a></h5><h2 id="拥塞控制" tabindex="-1">拥塞控制 <a class="header-anchor" href="#拥塞控制" aria-label="Permalink to &quot;拥塞控制&quot;">​</a></h2><p>慢启动，拥塞避免，快速重传，快速恢复</p><h2 id="q-a" tabindex="-1">Q&amp;A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q&amp;A&quot;">​</a></h2><h3 id="为什么多个tcp可以连接同一端口-比如http的80端口" tabindex="-1">为什么多个TCP可以连接同一端口，比如HTTP的80端口? <a class="header-anchor" href="#为什么多个tcp可以连接同一端口-比如http的80端口" aria-label="Permalink to &quot;为什么多个TCP可以连接同一端口，比如HTTP的80端口?&quot;">​</a></h3><p>TODO</p><h3 id="rst-是什么-为什么会出现" tabindex="-1">RST 是什么，为什么会出现 <a class="header-anchor" href="#rst-是什么-为什么会出现" aria-label="Permalink to &quot;RST 是什么，为什么会出现&quot;">​</a></h3><p>RST 是一个特殊的标记，用来表示当前应该立即终止连接。以下这些情况都会产生RST：</p><ul><li>向一个未被监听的端口发送数据</li><li>对方已经调用 close 关闭连接</li><li>存在一些数据未处理(接收缓冲区)，请求关闭连接时，会发送RST强制关闭</li><li>某些请求发生了超时</li></ul><p>RST 机制有时候也会被利用，做一些<a href="https://nmap.org/man/zh/man-port-scanning-techniques.html" target="_blank" rel="noreferrer">端口扫描</a></p><h2 id="exercises" tabindex="-1">Exercises <a class="header-anchor" href="#exercises" aria-label="Permalink to &quot;Exercises&quot;">​</a></h2><p>1。A,B两台机器都正常工作,B机器未监听任何端口。如果A机器向B机器80端口发送SYN包,会收到何种类型的回包?</p><blockquote><p>RST包</p></blockquote><p>2。TCP建立连接的过程采用三次握手，已知第三次握手报文的发送序列号为1000，确认序列号为2000，请问第二次握手报文的发送序列号和确认序列号分别为?</p><blockquote><p>1999,1000</p></blockquote>',88),h=[c];function d(g,T,u,q,P,k){return a(),e("div",null,h)}const _=t(p,[["render",d]]);export{m as __pageData,_ as default};
