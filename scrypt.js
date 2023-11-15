function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value == 0 || fim.value == 0 || passo.value == 0 ) {
        alert('[ERRO] FALTAM DADOS')
    }   else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p =  Number(passo.value)
        for (var c = i; c <= f; c += p ) {
            res.innerHTML +=`${c}  \u{2015} `


        }
    }
}