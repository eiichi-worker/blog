---
title: 正規表現チェックツール (Javascript製)
date: 2017-05-29 11:38:00
---

(簡易)正規表現チェックツール
---
<script src="app.js"></script>

<h3>正規表現</h3>
/ <input type="text" id="input_pattern" placeholder="(入力例) .*"></input> / <input type="text" id="input_flag" placeholder="(入力例) g"></input>
<h3>検索対象文字列</h3>
<textarea id="terget_text" rows="5" style="width:100%;" placeholder="(入力例) 空き地は猫の集会"></textarea>
<button onclick="checkRegex()">チェック</button>

<h3>マッチプレビュー</h3> 
<div id="output"></div>
