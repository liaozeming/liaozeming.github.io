import{_ as n,p as s,q as a,Z as p}from"./framework-87c4c4c1.js";const t="/assets/14-04cd710a.png",e="/assets/15-7a769983.png",o={},c=p('<p>给你一个整数 n 和一个下标从 0 开始的 二维数组 queries ，其中 queries[i] = [typei, indexi, vali] 。</p><p>一开始，给你一个下标从 0 开始的 n x n 矩阵，所有元素均为 0 。每一个查询，你需要执行以下操作之一：</p><p>如果 typei == 0 ，将第 indexi 行的元素全部修改为 vali ，覆盖任何之前的值。 如果 typei == 1 ，将第 indexi 列的元素全部修改为 vali ，覆盖任何之前的值。 请你执行完所有查询以后，返回矩阵中所有整数的和。</p><h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h2><p><img src="'+t+`" alt="Alt text"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]
输出：23
解释：上图展示了每个查询以后矩阵的值。所有操作执行完以后，矩阵元素之和为 23 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h2><p><img src="`+e+`" alt="Alt text"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]
输出：17
解释：上图展示了每一个查询操作之后的矩阵。所有操作执行完以后，矩阵元素之和为 17 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路：</h2><p>后面的操作会覆盖前面的操作，当行操作后，列操作就少了一个需要增加的；同理，列操作也相同</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">matrixSumQueries</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> queries<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>
        vis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token builtin">type</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> val <span class="token keyword">in</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>queries<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> index <span class="token keyword">not</span> <span class="token keyword">in</span> vis<span class="token punctuation">[</span><span class="token builtin">type</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># 后面（&gt;i）没有对这一行/列的操作</span>
                <span class="token comment"># 这一行/列还剩下 n-len(vis[type^1]) 个可以填入的格子</span>
                ans <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>vis<span class="token punctuation">[</span><span class="token builtin">type</span> <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> val
                vis<span class="token punctuation">[</span><span class="token builtin">type</span><span class="token punctuation">]</span><span class="token punctuation">.</span>add<span class="token punctuation">(</span>index<span class="token punctuation">)</span>  <span class="token comment"># 标记操作过</span>
        <span class="token keyword">return</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">matrixSumQueries</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> queries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> queries<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">long</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> row <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> col <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> r <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">long</span> c <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">int</span> t <span class="token operator">=</span> queries<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> j <span class="token operator">=</span> queries<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> v <span class="token operator">=</span> queries<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">+=</span> v <span class="token operator">*</span> c<span class="token punctuation">;</span>
        row<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        r<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>col<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">+=</span> v <span class="token operator">*</span> r<span class="token punctuation">;</span>
        col<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        c<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[c];function l(u,k){return s(),a("div",null,i)}const d=n(o,[["render",l],["__file","17.html.vue"]]);export{d as default};
