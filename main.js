
var sell_price; 
var amount; 
 
function init () { 
    sell_price = document.form.sell_price.value; 
    amount = document.form.amount.value; 
    document.form.sum.value = sell_price; 
    change(); 
} 
function add () { 
    hm = document.form.amount; 
    hm.value ++ ; 
 
    var sum_ = parseInt(hm.value) * sell_price; 
  document.getElementById("my_sum").innerHTML=sum_;
} 
 
function del () { 
    hm = document.form.amount; 
        if (hm.value > 1) { 
            hm.value -- ; 
            var sum_ = parseInt(hm.value) * sell_price;
      document.getElementById("my_sum").innerHTML=sum_;
        } 
} 
 
function change () { 
    hm = document.form.amount; 
 
        if (hm.value < 0) { 
            hm.value = 0; 
        } 
    var sum_ = parseInt(hm.value) * sell_price; 
  document.getElementById("my_sum").innerHTML=sum_;
}  
