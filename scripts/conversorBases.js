document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miBoton').addEventListener('click', function(event){
        event.preventDefault();
        //numero, baseInicial, baseFinal y resultadoInput son las variables que permiten laburar el js
        var numero = document.getElementById("numero").value
        var baseInicial = document.getElementById("baseInicial").value
        var baseFinal = document.getElementById("baseFinal").value
        var resultadoInput = document.getElementById("resultadoInput")

//-------------------------------------------------------FUNCIONES---------------------------------------------------
        function DecimalBO(numero, baseFinal){
            let resultado = "";
            while(numero > 0){
                resultado = (numero%baseFinal) + resultado;
                numero = Math.floor(numero/baseFinal);
            }
            return resultado
        }
        function DecimalHexadecimal(numero){
            let hexadecimal = "";
            while (numero > 0) {
                let aux = numero % 16;
                if (aux < 10) {
                hexadecimal = aux + hexadecimal;
                } else {
                hexadecimal = String.fromCharCode(aux + 55) + hexadecimal;
                }
                numero = Math.floor(numero / 16);
            }
            return hexadecimal
        }
        function BODecimal(numero, baseFinal){
            let resultado = 0;
            let posicion = 0;
            while(numero !== 0){
                let digito = numero % 10;
                resultado += digito * Math.pow(baseFinal, posicion);
                numero = Mate.floor(numero / 10);
                posicion++;
            }
            return resultado
        }
        function HexadecimalDecimal(numero){
            let decimal = 0;
            let posicion = 0;
            let caracteresHexadecimales = "0123456789ABCDEF";
            for (let i = numero.length - 1; i >= 0; i--) {
                let caracter = numero.charAt(i);
                let valor = caracteresHexadecimales.indexOf(caracter);
                decimal += valor * Math.pow(16, posicion);
                posicion++;
            }
            return decimal
        }
//-------------------------------------------------CONVERSIONES-------------------------------------------------------
        //Conversion de Decimal a Binario
        if(baseInicial == 10 && baseFinal == 2){
            let resultado = DecimalBO(numero, baseFinal)
            resultadoInput.value = resultado
        }
        //Conversion de Decimal a Octal
        if(baseInicial == 10 && baseFinal == 8){
            let resultado = DecimalBO(numero, baseFinal)
            resultadoInput.value = resultado
        }
        //Conversion de Decimal a Hexadecimal
        if(baseInicial == 10 && baseFinal == 16){
            let resultado = DecimalHexadecimal(numero)
            resultadoInput.value = resultado
        }
        //Conversion de Octal a Decimal
        if (baseInicial == 8 && baseFinal == 10){
            let resultado = BODecimal(numero, baseFinal)
            resultadoInput.value = resultado
        }
        //Conversion de Octal a Binario
        if (baseInicial == 8 && baseFinal == 2){
            let decimal = BODecimal(numero, baseFinal)
            let binario = DecimalBO(decimal)
            resultadoInput.value = binario
        }
        //Conversion de Octal a Hexadecimal
        if (baseInicial == 8 && baseFinal == 16){
            let decimal = BODecimal(numero, baseFinal)
            let binario = DecimalHexadecimal(decimal)
            resultadoInput.value = binario
        }
        //Conversion de Hexadecimal a Decimal
        if (baseInicial == 16 && baseFinal == 10){
            let resultado = HexadecimalDecimal(numero)
            resultadoInput.value = resultado
        }
        //Conversion de Hexadecimal a Binario
        if (baseInicial == 16 && baseFinal == 2){
            let decimal = HexadecimalDecimal(numero)
            let binario = DecimalBO(decimal, baseFinal)
            resultadoInput.value = binario
        }
        //Conversion de Hexadecimal a Octal
        if (baseInicial == 16 && baseFinal == 8){
            let decimal = HexadecimalDecimal(numero)
            let octal = DecimalBO(decimal, baseFinal)
            resultadoInput.value = octal
        }
        //Conversion de Binario a Decimal
        if (baseInicial == 2 && baseFinal == 10){
            let resultado = BODecimal(numero, baseFinal)
            resultadoInput.value = resultado
        }
        //Conversion de Binario a Octal
        if (baseInicial == 2 && baseFinal == 8){
            let decimal = BODecimal(numero, baseFinal)
            let octal = DecimalBO(decimal, baseFinal)
            resultadoInput.value = octal
        }
        //Conversion de Binario a Hexadecimal
        if (baseInicial == 2 && baseFinal == 16){
            let decimal = BODecimal(numero, baseFinal)
            let hexadecimal = DecimalHexadecimal(decimal)
            resultadoInput.value=hexadecimal
        }
    })
})