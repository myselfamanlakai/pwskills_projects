// command for building logic in the program
const decreasebtn = document.querySelector("#decreasebtn");
const increasebtn = document.querySelector("#increasebtn");
const resetbtn = document.querySelector("#resetbtn");
const CounterApp = document.querySelector("#CounterApp");

let count=0;
increasebtn.onclick=function () {
    count++;
    CounterApp.textContent = count;

}
decreasebtn.onclick=function () {
    count--;
    CounterApp.textContent = count;

}
resetbtn.onclick=function(){
    count=0;
    CounterApp.textContent = count;

}