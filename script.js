function calcular(tipo, valor) {
    if(tipo === 'acao') {
      if(valor === 'c') {
        //limpar o resultado
        document.getElementById('resultado').value = ''
      }

      //Montar a expressão
      if(valor === '+' || valor === '-' || valor === '*' || valor=== '/' || valor === '.') {
        document.getElementById('resultado').value += valor
      } 

      if(valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        //console.log(eval(valor_campo))

        document.getElementById('resultado').value = valor_campo
      }

    } else if(tipo === 'valor') {
      document.getElementById('resultado').value += valor  
    }
  }
