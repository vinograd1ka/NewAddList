(function search(){
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var addButton1 = document.getElementById('add-button1');
        var addButton2 = document.getElementById('add-button2');
        var list = document.getElementById('add-section');
        var deleteButton = document.getElementById('delete-button');
        var countingEl = document.getElementById('counting');
        var count = 0;
        addButton1.addEventListener('click', function () {
            var div = document.createElement("div");

            div.className = "add-section-container"
            div.innerHTML =
            '<div class="circle-red"></div>' +
                '<div class="add-section-header">'+input1.value+'</div>' +
                '<div class="add-section-circle"><i class="fas fa-check check"></i></div>'

            list.appendChild(div);

            /*div.onclick = function() {
                if(div.classList.contains('complete')){
                    div.classList.remove("complete");
                }

                else{
                    div.classList.add('complete');
                }
            };*/

            div.onclick = function() {
                div.classList.toggle('complete');
                if(div.classList.contains('complete')){
                    count++
                    countingEl.innerHTML =
                        '<div class="section-count" id="counting">Выбранно: '+count+' </div>'
                }

                else{
                    count--
                    countingEl.innerHTML =
                        '<div class="section-count" id="counting">Выбранно: '+count+' </div>'
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

            /*div.onclick = function() {
                if(div.classList.contains('complete')){
                    div.classList.remove("complete");
                }
                else{
                    div.classList.add('complete')
                }
            };*/

            div.onclick = function() {
                div.classList.toggle('complete');
                if(div.classList.contains('complete')){
                    count++
                    countingEl.innerHTML =
                        '<div class="section-count" id="counting">Выбранно: '+count+' </div>'
                }

                else{
                    count--
                    countingEl.innerHTML =
                        '<div class="section-count" id="counting">Выбранно: '+count+' </div>'
                }
            };
        });

    deleteButton.onclick = function() {
        var addComplete = document.querySelectorAll('.complete');
        for (let i = 0; i < addComplete.length; i++) {
            count--;
            addComplete[i].style.display = 'none';
        }
    };

    if(count === 0){
        countingEl.style.display = 'none';
        deleteButton.style.display = 'none';
    }

    else{
        countingEl.style.display = 'block';
        deleteButton.style.display = 'block';
    }
        document.getElementById("add-button2").onclick = function(e) {
            document.getElementById("input2").value = "";
        }


})();


/*var string = 'asdasdasf'; //string
console.log(string.length);//вывведет длинну строки

var number = 12345.6789;//number
console.log(number.toFixed(1));//Вернёт '12345.7': округлением


var x = false; //boolean
if (x) {
    // этот код не будет выполнен
}

var foo = null; ///null
console.log(foo); //null


console.log(number.length) //undefined
var func1 = function myFunction() { //function

}
console.log(func1.name);//вернет имя функции

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

typeof 0 // "number"

let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};
 */