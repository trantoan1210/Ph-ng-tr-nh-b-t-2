function number() {
let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
let number3 = document.getElementById('number3').value;
number4 = [(number2**2) - (4 * number1 * number3)];

if  (number4<0){
        document.getElementById('ketqua').innerHTML = 'Vô nghiệm';
    }
    else{
        if (number4==0){
        nood = (-number2/(2*number1));
        document.getElementById('ketqua').innerHTML = 'X='+ nood;
        }
        else{
            X1= ((-number2+Math.sqrt(number4))/(2 *number1));
            X2= ((-number2-Math.sqrt(number4))/(2 *number1));

            document.getElementById('ketqua').innerHTML = 'X1='+X1+',X2='+X2;
        }
    }
}