(function search(){
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var addButton1 = document.getElementById('add-button1');
        var addButton2 = document.getElementById('add-button2');
        var list = document.getElementById('add-section');
        var flexDisplay = document.getElementById('display-flex');
        var countingEl = document.getElementById('counting');
        //var completeRedChange = document.getElementById('complete-red-change');


        //МОДАЛЬНОЕ ОКНО

        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        var closeButton = document.getElementById('close-button');

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        closeButton.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    //1 КНОПКА


    addButton1.addEventListener('click', function () {
        var div = document.createElement("div");
        div.className = "add-section-container"
        div.innerHTML =
        '<div class="circle-red"></div>' +
            '<div class="add-section-header">'+input1.value+'</div>' +
            '<div class="add-section-circle"><i class="fas fa-check check"></i></div>'
        list.appendChild(div);

        div.onclick = function() {
            div.classList.toggle('complete-red');
            var completeRed = document.querySelectorAll('.complete-red');

            if(completeRed.length > 0){
                //completeRedChange.innerHTML =
                    //' <div class="modal-body" id="complete-red-change">Вы точно хотите удалить выбранное? Среди них есть важные!</div>'

                countingEl.innerHTML =
                    '<div class="section-count" id="counting">Выбранно:'+completeRed.length+'</div>'
                flexDisplay.style.display = 'flex';
            }

            else{
                //completeRedChange.innerHTML =
                    //' <div class="modal-body" id="complete-red-change">Вы точно хотите удалить выбранное?</div>'

                countingEl.innerHTML =
                    '<div class="section-count" id="counting"></div>'
                flexDisplay.style.display = 'none';
            }
        };
    });

    document.getElementById("add-button1").onclick = function(e) {
        document.getElementById("input1").value = "";
    }

        //2 КНОПКА

    addButton2.addEventListener('click', function () {
        var div = document.createElement("div");

        div.className = "add-section-container"
        div.innerHTML =
            '<div class="circle-green"></div>' +
            '<div class="add-section-header">'+input2.value+'</div>' +
            '<div class="add-section-circle"><i class="fas fa-check check"></i></div>'

        list.appendChild(div);

        div.onclick = function() {
            div.classList.toggle('complete');
            var allComplete = document.querySelectorAll('.complete');
            if(allComplete.length > 0){
                countingEl.innerHTML =
                    '<div class="section-count" id="counting">Выбранно:'+allComplete.length+'</div>'
                flexDisplay.style.display = 'flex';
            }

            else{
                countingEl.innerHTML =
                    '<div class="section-count" id="counting"></div>'
                flexDisplay.style.display = 'none';

            }
        };
    });

    document.getElementById("add-button2").onclick = function(e) {
        document.getElementById("input2").value = "";
    }

        //КНОПКА ПО УДАЛЕНИЮ

    var deleteButton = document.getElementById('delete-button');
    deleteButton.onclick = function() {
        var allComplete = document.querySelectorAll('.complete');
        for (let i = 0; i < allComplete.length; i++) {
            allComplete[i].remove();
        }
        var completeRed = document.querySelectorAll('.complete-red');

        for (let i = 0; i < completeRed.length; i++) {
            completeRed[i].remove();
        }

        countingEl.innerHTML =
            '<div class="section-count" id="counting"></div>'
        flexDisplay.style.display = 'none';
    };

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