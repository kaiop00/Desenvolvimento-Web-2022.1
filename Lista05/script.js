window.addEventListener("load", function(){

    var textArea = document.getElementById("textarea")
    var textAreaModal = document.getElementById("textareaModal")
    console.log(textAreaModal)

    var contador = document.getElementById("contador")

    let btnEnviar = document.getElementById("btnEnviar")
    btnEnviar.disabled =  true

    let btnEnviarModal = document.getElementById("btnEnviarModal")
    btnEnviarModal.disabled =  true

    var maxChar = 140

    function statusEnvio (textarea, cont, btn) {
        let contagem = maxChar - textarea.value.length
        
        cont.innerHTML = contagem

        if(textarea.value.length === 0){
            btn.disabled = true
            cont.style.color = "black"
        }
        else if(contagem < 140 && contagem >= 40 ) {
            cont.style.color = "black"
            btn.disabled = false
        }else if(contagem < 40 && contagem >= 0 ){
            cont.style.color = "yellow"
            btn.disabled = false
        }else{
            cont.style.color = "red"
            btn.disabled = true
        }
    }

    
    textArea.addEventListener("input", function(){

        statusEnvio(textArea, contador, btnEnviar)
        
        textArea.style.height = "auto"
        textArea.style.height = `${this.scrollHeight}px`

    })
    
    textAreaModal.addEventListener("input", function(){

        statusEnvio(textAreaModal, contadorModal, btnEnviarModal)

        textAreaModal.style.height = "auto"
        textAreaModal.style.height = `${this.scrollHeight}px`

    })
    
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

})