function contar(){
    var ini = document.getElementById('inicio') 
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando: <BR>'
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F600}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F600}`
            }
        }
        res.innerHTML += `\u{1F449}`
    }
    
}