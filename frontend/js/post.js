
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

function cadastraUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:5000/users"
    let star = document.getElementById("star").valeu
    let comentario = document.getElementById("comentario").value
    let rate = document.getElementById("rate").value
    let notafiscal = document.getElementById("notafiscal").value
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



