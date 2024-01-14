function carregar(){
    var msg = document.getElementById('div1')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        img.src = 'imagem/pexels-james-wheeler-1486974.jpg'
        document.body.style.background = '#FF92AF'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#FFA521'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#332A42'
    }
    
}