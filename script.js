function inserirAluno(total_horas) {
    var matricula = prompt("insira sua matricula")
    var nome = prompt("insira seu nome")
    var qtdFaltas = parseInt(prompt("quantas faltas vc teve no semestre?"))
    var notaB1 = parseFloat(prompt("nota do B1"))
    var notaB2 = parseFloat(prompt("nota do B2"))
    var media = (notaB1 + notaB2) / 2
    
    if((qtdFaltas / total_horas) > 0.25) {
        var situacao = "Reprovado por Faltas"
        var notaPF = "N/A"
        var notaFinal = "N/A"
    }else {
        if (media >= 7) {
            situacao = "Aprovado"
            notaFinal = media
            notaPF = "N/A"
        }else {
            var notaPF = parseFloat(prompt("nota da PF"))
            var notaFinal = (media + provaFinal) / 2 
            
            if (notaFinal >= 5) {
                situacao = "Aprovado"
            }else {
                situacao = "Reprovado por Notas"
            }
        }
    }

    var tabela = document.querySelector("#tb")
    var novaLinha = tabela.insertRow()

    novaLinha.insertCell(0).innerText = matricula
    novaLinha.insertCell(1).innerText = nome
    novaLinha.insertCell(2).innerText = qtdFaltas
    novaLinha.insertCell(3).innerText = notaB1
    novaLinha.insertCell(4).innerText = notaB2
    novaLinha.insertCell(5).innerText = media
    novaLinha.insertCell(6).innerText = notaPF
    novaLinha.insertCell(7).innerText = notaFinal
    novaLinha.insertCell(8).innerText = situacao
}