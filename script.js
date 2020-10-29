(function search(){
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var addButton1 = document.getElementById('add-button1');
        var addButton2 = document.getElementById('add-button2');
        var list = document.getElementById('add-section');
        var flexDisplay = document.getElementById('display-flex');
        var countingEl = document.getElementById('counting');
        var completeRedChange = document.getElementById('change-red');

        //МОДАЛЬНОЕ ОКНО
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        var closeButton = document.getElementById('close-button');

        btn.onclick = function() {
            var allImportant = document.querySelectorAll('.important');
            var allComplete = document.querySelectorAll('.complete');

            if(allImportant.length > 0){
                completeRedChange.innerHTML =
                    '<p class="complete-red-change">Вы точно хотите удалить выбранное ('+allImportant.length+')? Там есть важные!</p>'
                modal.style.display = "block";
            }

            else{
                modal.style.display = "none";
                for (let i = 0; i < allComplete.length; i++) {
                    allComplete[i].remove();

                    countingEl.innerHTML =
                        '<div class="section-count" id="counting"></div>'
                    flexDisplay.style.display = 'none';
                }
            }
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
        div.id = 'add-section-container'
        div.innerHTML =
        '<div class="circle-red"></div>' +
            '<div class="add-section-header" id="section-header">'+input1.value+'</div>'
            +
            '<div class="add-section-circle" id="click-circle"><i class="fas fa-check check"></i></div>'
        list.appendChild(div);

        div.onclick = function(event) {
            var sectionHeader = div.getElementsByClassName('add-section-header')[0].innerHTML
            var target = event.target;

            if (target.classList.contains('add-section-circle')) {
                div.classList.toggle('complete');
                div.classList.toggle('important');

                var allComplete = document.querySelectorAll('.complete');
                var allImportant = document.querySelectorAll('.important');
                countingEl.innerHTML =
                    '<div class="section-count" id="counting">Выбранно:'+allComplete.length+'</div>'
                flexDisplay.style.display = 'flex';

                completeRedChange.innerHTML =
                    '<p class="complete-red-change">Вы точно хотите удалить выбранное ('+allImportant.length+')? Там есть важные!</p>'
            }

            else if (target.classList.contains('add-section-header')) {
                div.innerHTML =
                    ''
                var CircleRed = document.createElement("div");
                CircleRed.className = "circle-red"
                div.appendChild(CircleRed);

                var input = document.createElement('input');
                input.className = "input-change"
                input.value = sectionHeader;
                div.appendChild(input);

                var addSectionCircle = document.createElement("div");
                addSectionCircle.className = "add-section-circle"
                div.appendChild(addSectionCircle);

                input.addEventListener('blur', function () {
                    div.removeChild(input);
                    div.className = "add-section-container"
                    div.innerHTML =
                        '<div class="circle-red"></div>' +
                        '<div class="add-section-header" id="section-header">'+input.value+'</div>' +
                        '<div class="add-section-circle" id="click-circle"><i class="fas fa-check check"></i></div>'
                    list.appendChild(div);
                })
                flexDisplay.style.display = 'none';
            }
        };


        /*
        div.classList.toggle('complete');
        div.classList.toggle('important');
        var allComplete = document.querySelectorAll('.complete');
        var allImportant = document.querySelectorAll('.important');

        if(allComplete.length > 0){
            countingEl.innerHTML =
                '<div class="section-count" id="counting">Выбранно:'+allComplete.length+'</div>'
            flexDisplay.style.display = 'flex';

            completeRedChange.innerHTML =
                '<p class="complete-red-change">Вы точно хотите удалить выбранное ('+allImportant.length+')? Там есть важные!</p>'
        }

        else{
            countingEl.innerHTML =
                '<div class="section-count" id="counting"></div>'
            flexDisplay.style.display = 'none';
        }*/
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
            '<div class="add-section-circle" id="click-circle"><i class="fas fa-check check"></i></div>'
        list.appendChild(div);





        div.onclick = function(e) {
            var sectionHeader = div.getElementsByClassName('add-section-header')[0].innerHTML


            var target = event.target;

            if (target.classList.contains('add-section-circle')) {
                div.classList.toggle('complete');
                div.classList.toggle('important');

                var allComplete = document.querySelectorAll('.complete');
                var allImportant = document.querySelectorAll('.important');
                countingEl.innerHTML =
                    '<div class="section-count" id="counting">Выбранно:'+allComplete.length+'</div>'
                flexDisplay.style.display = 'flex';

                completeRedChange.innerHTML =
                    '<p class="complete-red-change">Вы точно хотите удалить выбранное ('+allImportant.length+')? Там есть важные!</p>'
            }

            else if (target.classList.contains('add-section-header')) {
                div.innerHTML =
                    ''
                var CircleGreen = document.createElement("div");
                CircleGreen.className = "circle-green"
                div.appendChild(CircleGreen);

                var input = document.createElement('input');
                input.className = "input-change"
                input.value = sectionHeader;
                div.appendChild(input);

                var addSectionCircle = document.createElement("div");
                addSectionCircle.className = "add-section-circle"
                div.appendChild(addSectionCircle);

                input.addEventListener('blur', function () {
                    div.removeChild(input);
                    div.className = "add-section-container"
                    div.innerHTML =
                        '<div class="circle-green"></div>' +
                        '<div class="add-section-header" id="section-header">'+input.value+'</div>' +
                        '<div class="add-section-circle" id="click-circle"><i class="fas fa-check check"></i></div>'
                    list.appendChild(div);
                })
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
        var allImportant = document.querySelectorAll('.important');

        for (let i = 0; i < allComplete.length; i++) {
            allComplete[i].remove();
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