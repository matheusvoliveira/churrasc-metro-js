
function calcular(){
    var adul = document.getElementById('adul').value
    var cri = document.getElementById('cri').value
    var dur = document.getElementById('dur').value
    var res = document.getElementById('res')
    var a = Number(adul)
    var c = Number(cri)
    var d = Number(dur)
    var car = (400 * a) + (200 * c)
    var cer = (1200 * a)
    var ref = (1000 * a) + (500 * c)
    if ( d >= 6){
        var car = (650 * a) + (325 * c)
        var cer = 1600 * a
        var ref = (1500 * a) + (750 * c)
    }
    res.innerHTML = `<p>${car}g de carne</p>`
    res.innerHTML += `<p>${cer}ml de cerveja</p> `
    res.innerHTML += `<p>${ref}ml de refrigerante</p>`
    
}