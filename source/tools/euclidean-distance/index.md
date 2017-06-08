---
title: N次元のユークリッド距離の計算ツール
date: 2017-06-09 00:50:00
---

N次元のユークリッド距離の計算ツール
---
ユークリッド距離とは要は2点の距離。  
N次元でも割と簡単に計算できる。  
[ユークリッド距離 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E8%B7%9D%E9%9B%A2)


<script src="app.js"></script>

<h3>N次元のユークリッド距離</h3>
2地点の座標を入力。多次元の場合は半角スペース区切りで入力。<br>
A地点 <input type="text" id="input_a" placeholder="(入力例) 0.2251 -0.1002 1.225" style="width:100%;"></input><br>
B地点 <input type="text" id="input_b" placeholder="(入力例) 0.2251 -0.1002 1.225" style="width:100%;"></input><br>
<button onclick="calcDistance()">計算</button>

<h3>計算結果</h3> 
<div id="output"></div>
