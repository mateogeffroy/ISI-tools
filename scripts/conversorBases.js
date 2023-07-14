document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miBoton').addEventListener('click', function(event){
        event.preventDefault();
        //numero, baseInicial, baseFinal y resultadoInput son las variables que permiten laburar el js
        var numero = document.getElementById("numero").value;
        var baseInicial = document.getElementById("baseInicial").value;
        var baseFinal = document.getElementById("baseFinal").value;
        var resultadoInput = document.getElementById("resultadoInput");
//-------------------------------------------------------FUNCIONES---------------------------------------------------
        function DecimalBO(numero, baseFinal){
            let resultado = "";
            while(numero > 0){
                resultado = (numero%baseFinal) + resultado;
                numero = Math.floor(numero/baseFinal);}
            return resultado;}
        function DecimalHexadecimal(numero){
            let hexadecimal = "";
            while (numero > 0){
                let aux = numero % 16;
                if (aux < 10){
                hexadecimal = aux + hexadecimal;}else{
                hexadecimal = String.fromCharCode(aux + 55) + hexadecimal;}
                numero = Math.floor(numero / 16);}
            return hexadecimal;}
        function BODecimal(numero, baseFinal){
            let resultado = 0;
            let posicion = 0;
            while(numero !== 0){
                let digito = numero % 10;
                resultado += digito * Math.pow(baseFinal, posicion);
                numero = Mate.floor(numero / 10);
                posicion++;}
            return resultado;}
        function HexadecimalDecimal(numero){
            let decimal = 0;
            let posicion = 0;
            let caracteresHexadecimales = "0123456789ABCDEF";
            for (let i = numero.length - 1; i >= 0; i--) {
                let caracter = numero.charAt(i);
                let valor = caracteresHexadecimales.indexOf(caracter);
                decimal += valor * Math.pow(16, posicion);
                posicion++;}
            return decimal;}
//-------------------------------------------------CONVERSIONES-------------------------------------------------------
        if(baseInicial === 10 && baseFinal === 2){ //Decimal a Binario
            resultadoInput.value = DecimalBO(numero, baseFinal);}
        if(baseInicial === 10 && baseFinal === 8){ //Decimal a Octal
            resultadoInput.value = DecimalBO(numero, baseFinal);}
        if(baseInicial === 10 && baseFinal === 16){ //Decimal a Hexadecimal
            resultadoInput.value = DecimalHexadecimal(numero);}
        if (baseInicial === 8 && baseFinal === 10){ //Octal a Decimal
            resultadoInput.value = BODecimal(numero, baseFinal);}
        if (baseInicial === 8 && baseFinal === 2){ //Octal a Binario
            let decimal = BODecimal(numero, baseFinal);
            resultadoInput.value = DecimalBO(decimal);}
        if (baseInicial === 8 && baseFinal === 16){ //Octal a Hexadecimal
            let decimal = BODecimal(numero, baseFinal);
            resultadoInput.value = DecimalHexadecimal(decimal);}
        if (baseInicial === 16 && baseFinal === 10){ //Hexadecimal a Decimal
            resultadoInput.value = HexadecimalDecimal(numero);}
        if (baseInicial === 16 && baseFinal === 2){ //Hexadecimal a Binario
            let decimal = HexadecimalDecimal(numero);
            resultadoInput.value = DecimalBO(decimal, baseFinal);}
        if (baseInicial === 16 && baseFinal === 8){ //Hexadecimal a Octal
            let decimal = HexadecimalDecimal(numero);
            resultadoInput.value = DecimalBO(decimal, baseFinal);}
        if (baseInicial === 2 && baseFinal === 10){ //Binario a Decimal
            resultadoInput.value = BODecimal(numero, baseFinal);}
        if (baseInicial === 2 && baseFinal === 8){ //Binario a Octal
            let decimal = BODecimal(numero, baseFinal);
            resultadoInput.value = DecimalBO(decimal, baseFinal);}
        if (baseInicial === 2 && baseFinal === 16){ //Binario a Hexadecimal
            let decimal = BODecimal(numero, baseFinal);
            resultadoInput.value = DecimalHexadecimal(decimal);}})})