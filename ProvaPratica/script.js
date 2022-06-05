var selectMT = document.getElementById("meioTransporte")
var selectTV = document.getElementById("tipoViagem")
console.log(selectTV)
console.log(selectMT)
var optionTV1 = document.createElement("option")
var optionTV2 = document.createElement("option")
var optionTV3 = document.createElement("option")
var optionTV4 = document.createElement("option")
var optionTV5 = document.createElement("option") 

optionTV1.textContent = "Internacional"
optionTV1.value = 5000

optionTV2.textContent = "Nacional"
optionTV2.value = 500

optionTV3.textContent = "Interestadual"
optionTV3.value = 150

optionTV4.textContent = "Intermunicipal"
optionTV4.value = 50

optionTV5.textContent = "Municipal"
optionTV5.value = 25

var btnEnviar = document.getElementById("btnEnviar")

var saldoAtual = 20000

var totalGasto = 0
var totalViagens = 0

function atualizaSaldo(s){
    let saldo = document.getElementById("saldo")
    saldoAtual -= s
    saldo.innerHTML = "Saldo Atual: " + saldoAtual
}

function atualizaTtlViagem(pontos){
    totalGasto += pontos
    totalViagens++
    let total = document.getElementById("total")
    total.innerHTML = "Total de viagens: " + totalViagens + " - " + totalGasto + " pontos gastos"
}

function clickBtnEnviar(){
    let check = document.getElementById("idaVolta")
    let valor = selectTV.options[selectTV.selectedIndex].value
    let diferenca = 0
    
    if(check.checked){
        diferenca = saldoAtual - valor * 2   
    }else {
        diferenca = saldoAtual - valor
    } 
    
    if(diferenca < 0){
        alert("Não possui pontos suficentes")
    }else{
        let mt = selectMT.options[selectMT.selectedIndex].textContent
        let tv = selectTV.options[selectTV.selectedIndex].textContent
        let p, iv
        
        if(check.checked){
            p = selectTV.options[selectTV.selectedIndex].value * 2
            iv = "Sim"
            atualizaSaldo(p)
        }else{
            p = selectTV.options[selectTV.selectedIndex].value * 1
            iv = "Não"
            atualizaSaldo(p)
        }
        
        let tb = document.getElementById("historico")
        
        let tr = document.createElement('tr')
        
        tr.innerHTML = `<td>${mt}</td><td>${tv}</td><td>${iv}</td><td>${p}</td>`

        tb.appendChild(tr)

        atualizaTtlViagem(p)

    }
    
}

function selectMTChange(){
    let optionValueMT = selectMT.options[selectMT.selectedIndex].value
    
    if(optionValueMT === "aviao"){
        selectTV.remove(optionTV3)
        selectTV.remove(optionTV4)
        selectTV.remove(optionTV5)
        
        selectTV.appendChild(optionTV1)
        selectTV.appendChild(optionTV2)
    
    }else if (optionValueMT === "onibus"){
        selectTV.remove(optionTV1)
        selectTV.remove(optionTV2)

        selectTV.appendChild(optionTV3)
        selectTV.appendChild(optionTV4)
        selectTV.appendChild(optionTV5)
    }
    console.log(selectTV)
}

selectMT.addEventListener("change", function() {
    selectMTChange()    
})

btnEnviar.addEventListener("click",function() {
    clickBtnEnviar()
})

window.addEventListener("load",selectMTChange)



