var input=document.getElementById("input");
        var output=document.getElementById("output");
        function calculate(a){
            input.value+=a;
        }
        function equal(){
            output.value=eval(input.value);
        }
        function del(){
            input.value=input.value.slice(0,-1);
        }
        function AC(){
            input.value="";
            output.value="0";
        }
        function sqrt(){
            var square=Math.sqrt(input.value);
            output.value=square;
        }
        function cbrt(){
            var cube=Math.cbrt(input.value);
            output.value=cube;
        }
        function pi(){
            input.value='pi';
            output.value=Math.PI;
        }
        function square(){
            output.value=Math.pow(input.value,2);
        }
        function cube(){
            output.value=Math.pow(input.value,3);
        }
        function per(){
            var percentage=eval(input.value);
            var temp=percentage*100;
            output.value=temp+"%";
        }
        function inverse(){
            output.value=1/(input.value);
        }
        function log(){
            output.value=Math.log10(input.value);
        }
        function ln(){
            output.value=Math.log(input.value);
        }
        function factorial(){
            var fact=input.value;
            let answer = 1;
            if (fact == 0 || fact == 1){
            answer = 1;
            }else{
            for(var i = fact; i >= 1; i--){
                answer = answer * i;
            }
            }
            output.value=answer;
        }
        function abs(){
            output.value=Math.abs(input.value);
        }
        function round(){
            output.value=Math.round(input.value);
        }
        function sine(){
    output.value= Math.sin(input.value);
}

function cos(){
    output.value= Math.cos(input.value);
    
}
function tan(){
    output.value= Math.tan(input.value);
    
}