function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
    window.alert('verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menino-criança.jpg')
             } else if (idade < 21){
                img.setAttribute('src', 'homem-jovem.jpg')
             } else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.jpg')
             } else {
                 img.setAttribute('src', 'idoso.jpg')
             }
            
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'memina-criança.jpg')
             } else if (idade < 21){
                img.setAttribute('src', 'mulher-jovem.jpg')
             } else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
             } else {
                 img.setAttribute('src', 'idosa.jpg')
             }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}