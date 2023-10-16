let value =  document.getElementById('value');
let result = 0;

function decrease(){
   if(result > 1 )
   result--;
   document.getElementById('value').innerHTML = result
}

function increase(){
    result++;
    document.getElementById('value').innerHTML = result
}