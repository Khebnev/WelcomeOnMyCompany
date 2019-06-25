menu.onclick = function myFunction(){
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav"){ //Если переменная Х.className будет идентична классу topnav тогда к нашему классу будет добавляться слово responsive
        x.className += "responsive";
        }
}