const urlParams = new URLSearchParams(window.location.search);
const nameCaptured = urlParams.get('nome');

const nome = document.getElementById("nome")
nome.innerText = nameCaptured
nomeFinal = nameCaptured
let pix_infos = []

const main = document.getElementById("main")
const inputs_pix = document.getElementById("inputs_pix")

const option_1 = document.getElementById("option_1")
const option_2 = document.getElementById("option_2")
const option_3 = document.getElementById("option_3")
const option_4 = document.getElementById("option_4")

const div_cpf_input = document.getElementById("div_cpf_input")
const div_email_input = document.getElementById("div_email_input")
const div_tel_input = document.getElementById("div_tel_input")
const div_CA_input = document.getElementById("div_CA_input")

function chave_select(btn, input, chave_pix){
    btn.addEventListener("click", () => {
        main.style.display = "none"
        inputs_pix.style.display = "flex"
        input.style.display = "flex"
        voltar.style.display = "flex"
        pix_infos.push(chave_pix)
        console.log(pix_infos)
    })
}

const voltar = document.getElementById("voltar")
voltar.addEventListener("click", () => {
    main.style.display = "flex"
    voltar.style.display = "none"
    inputs_pix.style.display = "none"
    div_cpf_input.style.display = "none"
    div_email_input.style.display = "none"
    div_tel_input.style.display = "none"
    div_CA_input.style.display = "none"
    pix_infos.pop()
})

chave_select(option_1, div_cpf_input, "CPF")
chave_select(option_2, div_email_input, "Email")
chave_select(option_3, div_tel_input, "Telefone")
chave_select(option_4, div_CA_input, "Chave Aleatória")

const enviar_01 = document.getElementById("enviar_01")
const enviar_02 = document.getElementById("enviar_02")
const enviar_03 = document.getElementById("enviar_03")
const enviar_04 = document.getElementById("enviar_04")

const cpf_input = document.getElementById("cpf_input")
const email_input = document.getElementById("email_input")
const tel_input = document.getElementById("tel_input")
const CA_input = document.getElementById("CA_input")

const modal = document.getElementById("modal")

function Entrar(btn, input, pix){
    btn.addEventListener("click", () => {
        if(input.value === ""){
            alert("-- Preencha o campo")
            return
        }
        modal.style.display = "flex"
        text_modal()
        pix = input.value
        pix_infos.push(pix)
        
    })
}
const pix = ""
Entrar(enviar_01, cpf_input, pix)
Entrar(enviar_02, email_input, pix)
Entrar(enviar_03, tel_input, pix)
Entrar(enviar_04, CA_input, pix)

const modal_text = document.getElementById("modal_text")
const comprovante = document.getElementById("comprovante")
function text_modal(){
    setTimeout(() => {
        modal_text.innerText = "Validando chave Pix"
    }, 1000)
    setTimeout(() => {
        modal_text.innerText = "Gerando dados de envio"
    }, 4000)
    setTimeout(() => {
        modal_text.innerText = "Verificando certificado H1A"
    }, 8000)
    setTimeout(() => {
        modal.style.display = "none"
        inputs_pix.style.display = "none"
        comprovante.style.display = "flex"
        let PixValue = pix_infos[1]
        let ChavePixValue = pix_infos[0]
        console.log(PixValue)
        console.log(ChavePixValue)
        console.log(nome)
        gerar_certificado(nomeFinal, PixValue, ChavePixValue)
    }, 9000)
}

const gerar_certif = document.getElementById("gerar_certif")
function gerar_certificado(nome, pix, chave){
    gerar_certif.addEventListener("click", () => {
        window.location.href = `profitvsl.html?nome=${nome}&chavePix=${chave}&pix=${pix}`
    })
}