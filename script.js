function carregar() {
    console.log('clique')

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var input = document.querySelector("#date")
    
    console.log(input.value)

    if (Number(input.value) >= 0 && Number(input.value) < 12) {
        img.src = 'imagens/7f35b7522489e4d48803964ed313d730.jpg'
        document.body.style.background = '#D97E09'

    }else if (Number(input.value) >= 12 && Number(input.value) < 18) {
        img.src = 'imagens/mary-marshall-new-city-ny-obituary.jpg'
        document.body.style.background = '#AA230D'

    }else {
        img.src = 'imagens/pwLHn8B833zvorJuiqBKpa-320-80.jpg'
        document.body.style.background = '#04244E'
    }

}