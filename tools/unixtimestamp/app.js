window.onload = function(){
    var clipboard = new Clipboard('.copy_btn');

    setInterval("myTimeprev()", 1000);
    
    setNowDateTime();
    toTimestamp();
}


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
function setNowDateTime() {
    var date_jst = moment().tz("Asia/Tokyo");

    document.getElementById("from_date").value = date_jst.format("YYYY-MM-DD");
    document.getElementById("from_time").value = date_jst.format("HH:mm:ss");
}

function toTimestamp() {
    var from_date = document.getElementById("from_date").value;
    var from_time = document.getElementById("from_time").value;
    var date_jst = moment(from_date+" "+from_time, "YYYY-MM-DD HH:mm:ss").tz("Asia/Tokyo");

    document.getElementById("output_from_datetime").innerHTML = from_date+" "+from_time;
    document.getElementById("output_to_timestamp").innerHTML = Math.floor(date_jst.format("X"));
}

function add(type) {
    var add_num = parseInt(document.getElementById("add_num").value);
    var from_date = document.getElementById("from_date").value;
    var from_time = document.getElementById("from_time").value;
    
    var date_jst = moment(from_date+" "+from_time, "YYYY-MM-DD HH:mm:ss").tz("Asia/Tokyo");
    
    console.log( date_jst.format("YYYY-MM-DD HH:mm:ss"));
    date_jst = date_jst.add(add_num, type)
    console.log( date_jst.format("YYYY-MM-DD HH:mm:ss"));

    document.getElementById("from_date").value = date_jst.format("YYYY-MM-DD");
    document.getElementById("from_time").value = date_jst.format("HH:mm:ss");
}
