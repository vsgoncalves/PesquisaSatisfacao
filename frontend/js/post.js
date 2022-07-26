const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('notaFiscal');
document.getElementById('notaFiscalLabel').innerHTML = myParam
document.getElementById('notaFiscal').value = myParam

function fazPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        window.location = "agradecimento.html";
        console.log(this.responseText)
    }
    request.onerror = function() {
        console.log("Ocorreu um erro")
    }
    return request.responseText
    
}

function cadastroUsuario() {
    event.preventDefault()
    console.log("Cadastrando pesquisas")
    if (!document.querySelector('input[name="rate1"]:checked')) {
        alert('Por favor, selecione uma nota para experiência');
        return false
    }
    if (!document.querySelector('input[name="rate"]:checked')) {
        alert('Por favor, selecione uma nota para recomendação ao amigo.');
        return false
    }

    //let url = "http://127.0.0.1:3000/pesquisa"
    let url = "https://ec2-23-20-20-28.compute-1.amazonaws.com/api/pesquisa"
    //let experienciaCompra = document.querySelector('input[name="star"]:checked').value
    let experienciaCompra = document.querySelector('input[name="rate1"]:checked').value
    let comentario = document.querySelector('textarea[name="comentario"]').value
    let recomendacao = document.querySelector('input[name="rate"]:checked').value
    let notaFiscal = document.querySelector('input[name="notaFiscal"]').value
    body = {
        "experienciaCompra": experienciaCompra,
        "comentario": comentario,
        "recomendacao": recomendacao,
        "notaFiscal": notaFiscal,
    }
    fazPost(url, body)
   
}



