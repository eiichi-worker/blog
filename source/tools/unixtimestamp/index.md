---
title: Unixtimestamp
date: 2017-05-11 01:38:58
---

現在のUnixtimestamp
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.6.1/clipboard.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.13/moment-timezone.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.13/moment-timezone-with-data.min.js"></script>
<script src="app.js"></script>
<table>
    <tr>
        <th colspan="3">現在のタイムスタンプ</th>
    </tr>
    <tr>
        <td>unixtimestamp</td>
        <td id="output_realtime"></td>
        <td><button class="copy_btn" data-clipboard-target="#output_realtime">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <th colspan="3">UTCとJSTで確認</th>
    </tr>
    <tr>
        <td>UTC</td>
        <td id="format_utc_00"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_utc_00">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>JST (UTC+9)</td>
        <td id="format_jst_00"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_00">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <th colspan="3">JSTでフォーマット</th>
    </tr>
    <tr>
        <td>YYYY-MM-DD HH:mm:ss</td>
        <td id="format_jst_01"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_01">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>YYYY-MM-DD HH:mm</td>
        <td id="format_jst_02"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_02">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>YYYY-MM-DD</td>
        <td id="format_jst_03"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_03">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>MM-DD</td>
        <td id="format_jst_04"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_04">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>HH:mm:ss</td>
        <td id="format_jst_05"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_05">クリップボードにコピー</button></td>
    </tr>
    <tr>
        <td>HH:mm</td>
        <td id="format_jst_06"></td>
        <td><button class="copy_btn" data-clipboard-target="#format_jst_06">クリップボードにコピー</button></td>
    </tr>
</table>

日時をUnixtimestampに変換
---
<div>
    <input type="date" id="from_date" value=""></input>
    <input type="time" id="from_time" value="" step="1"></input>
    <button onclick="toTimestamp()">変換</button>
</div>
<div>
    <input type="number" id="add_num" value="0"></input>
    <button onclick="add('days')">日後</button>
    <button onclick="add('hours')">時間後</button>
    <button onclick="add('minutes')">分後</button>
</div>
<table>
    <tr>
        <th colspan="3">変換後のタイムスタンプ</th>
    </tr>
    <tr>
        <td id="output_from_datetime"></td>
        <td id="output_to_timestamp"></td>
        <td><button class="copy_btn" data-clipboard-target="#output_realtime">クリップボードにコピー</button></td>
    </tr>
</table>