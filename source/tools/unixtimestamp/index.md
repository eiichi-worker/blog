---
title: Unixtimestamp
date: 2017-05-11 01:38:58
---

現在のUnixtimestamp
---
<script language="javascript" type="text/javascript">
setInterval("myTimeprev()",1000);

function myTimeprev(){
    var target = document.getElementById("output");
	var nowDate　=　new Date();
    target.innerHTML = Math.round( nowDate.getTime() / 1000 );;
}
</script>

<div id="output"></div>
