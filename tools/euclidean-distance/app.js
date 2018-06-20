    function calcDistance() {
        var inputA = document.getElementById("input_a").value.split(" ");
        var inputB = document.getElementById("input_b").value.split(" ");

        console.log(inputA);
        console.log(inputB);

        var tmpAnswer = 0.0;
        for(var i = 0; i < inputA.length; i++) {
            tmpAnswer += Math.pow(inputA[i] - inputB[i], 2);
            console.log(i + " " + inputA[i] + " " + inputB[i] + " " + tmpAnswer);
        }


        document.getElementById("output").innerHTML = Math.sqrt(tmpAnswer);
    }