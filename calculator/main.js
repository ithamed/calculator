let decimal = false;
let operator = true;
$(".numbers").click(function(){
  $("#display")[0].innerHTML += this.innerHTML
  operator = false
})
$(".operator").click(function(){
  if(operator === false) {
    $("#display")[0].innerHTML += this.innerHTML
    operator = true
  }
  decimal = false
})
$("#decimal").click(function(){
  if(decimal == false){
    $("#display")[0].innerHTML += this.innerHTML
    decimal = true
  }
})
$("#delete").click(function(){
  $("#display")[0].innerHTML = ''
  decimal = false
  operator = true
})
$("#equal").click(function(){
  $("#display")[0].innerHTML = eval($("#display")[0].innerHTML);
})