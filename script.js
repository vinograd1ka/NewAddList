(function search(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var addButton1 = document.getElementById('add-button1');
    var addButton2 = document.getElementById('add-button2');
    var list = document.getElementById('add-section');
    var check = document.getElementById('check');

    addButton1.addEventListener('click', function () {
        var div = document.createElement("div");

        div.className = "add-section-container"
        div.innerHTML =
        '<div class="circle-red"></div>' +
            '<div class="add-section-header">'+input1.value+'</div>' +
            '<div class="add-section-circle"><i class="fas fa-check check"></i></div>'

        list.appendChild(div);

        div.onclick = function() {
            if(div.classList.contains('complete')){
                div.classList.remove("complete");
            }

            else{
                div.classList.add('complete')
            }
        };

    });


    document.getElementById("add-button1").onclick = function(e) {
        document.getElementById("input1").value = "";
    }

    addButton2.addEventListener('click', function () {
        var div = document.createElement("div");

        div.className = "add-section-container"
        div.innerHTML =
            '<div class="circle-green"></div>' +
            '<div class="add-section-header">'+input2.value+'</div>' +
            '<div class="add-section-circle"><i class="fas fa-check check"></i></div>'

        list.appendChild(div);

        div.onclick = function() {
            if(div.classList.contains('complete')){
                div.classList.remove("complete");
            }

            else{
                div.classList.add('complete')
            }
        };

    });

    document.getElementById("add-button2").onclick = function(e) {
        document.getElementById("input2").value = "";
    }
})();