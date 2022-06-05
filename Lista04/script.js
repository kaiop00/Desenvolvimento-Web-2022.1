window.addEventListener("load", function(){

    var textArea = document.getElementById("textarea")
    console.log(textArea)

    var contador = document.getElementById("contador")

    var btnEnviar = document.querySelector("#btnEnviar")
    
    console.log(btnEnviar)

    btnEnviar.disable = true
    

    console.log(btnEnviar.disable)

    console.log(contador);

    var maxChar = 140

    
    function statusEnvio (textarea, cont, btn) {
        let contagem = maxChar - textarea.value.length
        
        cont.innerHTML = contagem

        if(textArea.value.length === 0){
            btn.disable = true
            cont.style.color = "black"
        }
        else if(contagem < 140 && contagem >= 40 ) {
            cont.style.color = "black"
            btn.disable = false
        }else if(contagem < 40 && contagem >= 0 ){
            cont.style.color = "yellow"
            btn.disable = false
        }else{
            cont.style.color = "red"
            btn.disable = true
        }
    }


    textArea.addEventListener("input", function(){
        statusEnvio(textArea, contador, btnEnviar)
        
        textArea.style.height = "auto"
        textArea.style.height = `${this.scrollHeight}px`
    }) 
})