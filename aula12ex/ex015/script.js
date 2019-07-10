function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/bebe-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/idoso-homem.png')
            }
                
        } else if (formSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/bebe-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulta-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}