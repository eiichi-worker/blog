var clipboard = new Clipboard('.copy_btn');

setInterval("myTimeprev()", 1000);

function myTimeprev() {
    var date     = new Date();
    var date_utc = moment().tz("UTC");
    var date_jst = moment().tz("Asia/Tokyo");

    document.getElementById("output_realtime").innerHTML = Math.round(date.getTime() / 1000);
    document.getElementById("format_utc_00").innerHTML = date_utc.format("YYYY-MM-DD HH:mm:ss");
    document.getElementById("format_jst_00").innerHTML = date_jst.format("YYYY-MM-DD HH:mm:ss");

    document.getElementById("format_jst_01").innerHTML = date_jst.format("YYYY-MM-DD HH:mm:ss");
    document.getElementById("format_jst_02").innerHTML = date_jst.format("YYYY-MM-DD HH:mm");
    document.getElementById("format_jst_03").innerHTML = date_jst.format("YYYY-MM-DD");
    document.getElementById("format_jst_04").innerHTML = date_jst.format("MM-DD");
    document.getElementById("format_jst_05").innerHTML = date_jst.format("HH:mm:ss");
    document.getElementById("format_jst_06").innerHTML = date_jst.format("HH:mm");
}