function calculate(){
     var billAmount = document.getElementById("input1").value;
    var service = document.getElementById("serviceQt").value;
    var noOfPeople = document.getElementById("input2").value;

    var res =(billAmount*(service/100))/noOfPeople;
document.getElementById("print").innerHTML=res;

    
}