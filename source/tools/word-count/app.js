    function wordCount() {
        var input = document.getElementById("input_text").value;
        console.log(input);

        document.getElementById("output_all").innerHTML = input.length;
        document.getElementById("output_exclude_linebreaks").innerHTML = input.replace(/(\r\n|\r|\n)/g, '').length;
        document.getElementById("output_space").innerHTML = input.length - input.replace(/( |　)/g, '').length;
    }