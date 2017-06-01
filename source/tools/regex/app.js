    function checkRegex() {
        var myRe = new RegExp(document.getElementById("input_pattern").value, document.getElementById("input_flag").value);
        // var myArray = myRe.exec(document.getElementById("terget_text").value);
        var myArray = document.getElementById("terget_text").value.match(myRe);
        var output = document.getElementById("terget_text").value.replace(myRe,"<b>$&</b>");

        document.getElementById("output").innerHTML = output;
        console.log(document.getElementById("input_pattern").value);
        console.log(document.getElementById("input_flag").value);
        console.log(myRe);
        console.log(myArray);

    }