//criar uma referência ao form e aos elementos h3
//e h4(resposta)

const frm = Document.querySelector("form")
const resp1 = Document.querySelector("h3")
const resp2 = Document.querySelector("h4")

//cria um "ouvinte" de evento, acionando quando
//o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value /*obter
    os conteúdos dos campos*/
    const duracao = Number(frm.inDuracao.value)
    const horas = Math.floor(duracao/60) /*arredonda
    para baixo o resultado*/

    const minutos = duracao % 60
    //obtem o resto da divisao

    resp1.innerText = titulo //exibe as respostas 
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    e.preventDefault() //evita o envio do form
})  