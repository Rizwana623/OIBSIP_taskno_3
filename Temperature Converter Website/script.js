function covertTem(){
    var to=document.getElementById("to").value;
    var from=document.getElementById("from").value;
    var inputTemp=parseInt(document.getElementById("inputTemp").value);
    var ans;
    var unit;
    if(from=="Celsius" && to=="Fahrenheit"){
        ans=(inputTemp*9/5) + 32;
        unit="°F";
    }
    else if(from=="Fahrenheit" && to=="Celsius"){
        ans=(inputTemp-32)*5/9;
        unit="°C";
    }
    else if(from=="Celsius" && to=="Kelvin"){
        ans=inputTemp+273.15;
        unit="K"
    }
    else if(from=="Kelvin" && to=="Celsius"){
        ans=inputTemp-273.15;
        unit="°C"
    }
    else if(from=="Kelvin" && to=="Fahrenheit"){
        ans=(inputTemp-273.15)*9/5+32;
        unit="°F"
    }
    else if(from=="Fahrenheit" && to=="Kelvin"){
        ans=(inputTemp-32)*5/9+273.15;
        unit="K"
    }
    else if(from==to){
        alert("Enter the temperature and choose the type to convert");
        return;
    }   
    document.getElementById("outputTemp").value=ans+" "+unit;
}