---
title: 文字数カウントツール
date: 2017-06-11 23:35:00
---

文字数カウントツール
---

<script src="app.js"></script>

<textarea id="input_text" rows="10" style="width:100%;"></textarea>

<button onclick="wordCount()">カウント</button>

<h3>結果</h3> 
<div id="output"></div>
<table>
    <tr>
        <td>文字数</td>
        <td id="output_all"></td>
    </tr>
        <tr>
        <td>文字数（改行除く）</td>
        <td id="output_exclude_linebreaks"></td>
    </tr>
        <tr>
        <td>スペースの数（半角全角）</td>
        <td id="output_space"></td>
    </tr>
</table>