const apiUrl = "http://localhost:8080"

const escolherPaoUl = document.querySelector(".escolher-pao")
const preparandoPaoUl = document.querySelector(".preparando-pao")
const prontoPaoUl = document.querySelector(".pronto-pao")

let paoEscolhas = []

function pegarTiposPao() {
  const endpoint = `${apiUrl}/paes`
  fetch(endpoint, {
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(body => {
      console.log({ body })
      paoEscolhas = body;     
    })
}

pegarTiposPao()