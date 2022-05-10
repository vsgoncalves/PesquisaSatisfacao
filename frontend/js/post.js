
function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastroUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:3000"
    let star = document.querySelector('input[name="star"]:checked').value
    let comentario = document.querySelector('textarea[name="comentario"]').value
    let rate = document.querySelector('input[name="rate"]:checked').value
    let notafiscal = document.querySelector('input[name="notafiscal"]').value
    console.log(star)
    console.log(comentario)
    console.log(rate)
    console.log(notafiscal)

    body = {
        "Experiência": star,
        "Comentário": comentario,
        "Voto": rate,
        "Número da nota fiscal": notafiscal,

    }

    fazPost(url, body)
}



