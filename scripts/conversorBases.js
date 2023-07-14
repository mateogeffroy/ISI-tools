document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miBoton').addEventListener('click', function(event){
        event.preventDefault();
        //numero, baseInicial, baseFinal y resultadoInput son las variables que permiten laburar el js
        var numero = document.getElementById("numero").value
        var baseInicial = document.getElementById("baseInicial").value
        var baseFinal = document.getElementById("baseFinal").value
        var resultadoInput = document.getElementById("resultadoInput")

        //Conversion de Decimal a Binario
        if(baseInicial == 10 && baseFinal == 2){
            let binario = "";
            while(numero > 0){
                binario = (numero%2) + binario;
                numero = Math.floor(numero/2);
            }
            resultadoInput.value=binario
        }
        //Conversion de Decimal a Octal
        if(baseInicial == 10 && baseFinal == 8){
            let octal = "";
            while(numero > 0){
                octal = (numero%8) + octal;
                numero = Math.floor(numero/8);
            }
            resultadoInput.value=octal
        }
        //Conversion de Decimal a Hexadecimal
        if(baseInicial == 10 && baseFinal == 16){
            var hexadecimal = "";
            while (numero > 0) {
                var aux = numero % 16;
                if (aux < 10) {
                hexadecimal = aux + hexadecimal;
                } else {
                hexadecimal = String.fromCharCode(aux + 55) + hexadecimal;
                }
                numero = Math.floor(numero / 16);
            }
            resultadoInput.value=hexadecimal
        }
        //Conversion de Octal a Binario
        if (baseInicial == 8 && baseFinal == 2){
            var decimal = 0
            var posicion = 0
            while(numero!==0){
                var digito = numero % 10
                decimal += digito * Math.pow(8, posicion)
                numero = Math.floor(numero / 10)
                posicion++
            }
            let binario = "";
            while(decimal > 0){
                binario = (decimal%2) + binario;
                decimal = Math.floor(decimal/2);
            }
            resultadoInput.value=binario
        }
        //Conversion de Octal a Decimal
        if (baseInicial == 8 && baseFinal == 10){
            var resultado = 0
            var posicion = 0
            while(numero!==0){
                var digito = numero % 10
                resultado += digito * Math.pow(8, posicion)
                numero = Math.floor(numero / 10)
                posicion++
            }
            resultadoInput.value = resultado
        }
        //Conversion de Octal a Hexadecimal
        if (baseInicial == 8 && baseFinal == 16){
            var decimal = 0
            var posicion = 0
            while(numero!==0){
                var digito = numero % 10
                decimal += digito * Math.pow(8, posicion)
                numero = Math.floor(numero / 10)
                posicion++
            }
            var hexadecimal = "";
            while (decimal > 0) {
                var aux = decimal % 16;
                if (aux < 10) {
                hexadecimal = aux + hexadecimal;
                } else {
                hexadecimal = String.fromCharCode(aux + 55) + hexadecimal;
                }
                decimal = Math.floor(decimal / 16);
            }
            resultadoInput.value=hexadecimal
        }
        //Conversion de Hexadecimal a Binario
        if (baseInicial == 16 && baseFinal == 2){
            var decimal = 0;
            var posicion = 0;
            var caracteresHexadecimales = "0123456789ABCDEF";
            for (var i = numero.length - 1; i >= 0; i--) {
                var caracter = numero.charAt(i);
                var valor = caracteresHexadecimales.indexOf(caracter);
                decimal += valor * Math.pow(16, posicion);
                posicion++;
            }
            let binario = "";
            while(decimal > 0){
                binario = (decimal%2) + binario;
                decimal = Math.floor(decimal/2);
            }
            resultadoInput.value=binario
        }
        //Conversion de Hexadecimal a Octal
        if (baseInicial == 16 && baseFinal == 8){
            var decimal = 0;
            var posicion = 0;
            var caracteresHexadecimales = "0123456789ABCDEF";
            for (var i = numero.length - 1; i >= 0; i--) {
                var caracter = numero.charAt(i);
                var valor = caracteresHexadecimales.indexOf(caracter);
                decimal += valor * Math.pow(16, posicion);
                posicion++;
            }
            let octal = "";
            while(decimal > 0){
                octal = (decimal%8) + octal;
                decimal = Math.floor(decimal/8);
            }
            resultadoInput.value=octal
        }
        //Conversion de Hexadecimal a Decimal
        if (baseInicial == 16 && baseFinal == 10){
            var resultado = 0;
            var posicion = 0;
            var caracteresHexadecimales = "0123456789ABCDEF";
            for (var i = numero.length - 1; i >= 0; i--) {
                var caracter = numero.charAt(i);
                var valor = caracteresHexadecimales.indexOf(caracter);
                resultado += valor * Math.pow(16, posicion);
                posicion++;
            }
            resultadoInput.value=resultado
        }
        //Conversion de Binario a Octal
        if (baseInicial == 2 && baseFinal == 8){
            var decimal = 0;
            var posicion = 0;
            while (numero !== 0) {
                var digito = numero % 10;
                decimal += digito * Math.pow(2, posicion);
                numero = Math.floor(numero / 10);
                posicion++;
            }
            let octal = "";
            while(decimal > 0){
                octal = (decimal%8) + octal;
                decimal = Math.floor(decimal/8);
            }
            resultadoInput.value=octal
        }

        //Conversion de Binario a Decimal
        if (baseInicial == 2 && baseFinal == 10){
            var resultado = 0;
            var posicion = 0;
            while (numero !== 0) {
                var digito = numero % 10;
                resultado += digito * Math.pow(2, posicion);
                numero = Math.floor(numero / 10);
                posicion++;
            }
            resultadoInput.value=resultado
        }
        //Conversion de Binario a Hexadecimal
        if (baseInicial == 2 && baseFinal == 16){
            var decimal = 0;
            var posicion = 0;
            while (numero !== 0) {
                var digito = numero % 10;
                decimal += digito * Math.pow(2, posicion);
                numero = Math.floor(numero / 10);
                posicion++;
            }
            var hexadecimal = "";
            while (decimal > 0) {
                var aux = decimal % 16;
                if (aux < 10) {
                hexadecimal = aux + hexadecimal;
                } else {
                hexadecimal = String.fromCharCode(aux + 55) + hexadecimal;
                }
                decimal = Math.floor(decimal / 16);
            }
            resultadoInput.value=hexadecimal
        }
    })
})