var player1, player2;
var esc1, esc2;
var point1 = 0,point2 = 0;
var rodada = 1

function jogar(params) {
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value
    document.getElementById("titulo").innerText = `RODADA ${rodada}`
}

function pedra1(params) {
    esc1 = "pedra"
    document.getElementById("escolha1").style.display = "none"
    document.getElementById("escolha2").style.display = "block"
    console.log(esc1)
}

function papel1(params) {
    esc1 = "papel"
    document.getElementById("escolha1").style.display = "none"
    document.getElementById("escolha2").style.display = "block"
    console.log(esc1)
}

function tesoura1(params) {
    esc1 = "tesoura"
    document.getElementById("escolha1").style.display = "none"
    document.getElementById("escolha2").style.display = "block"
    console.log(esc1)
}

function pedra2(params) {
    esc2 = "pedra"
    console.log(esc2)
    if (esc1 == esc2) {
        document.getElementById("titulo").innerText = "EMPATOU"
        document.getElementById("pr").style.visibility = "visible"
        rodada++
        point1++
        point2++
    }
else if(esc1 == "pedra" && esc2 == "papel"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "pedra" && esc2 == "tesoura"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1 == "papel" && esc2 == "tesoura"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "papel" && esc2 == "pedra"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1=="tesoura" && esc2 =="papel"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1 =="tesoura" && esc2 == "pedra"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
if (point1 == 3 && point2 == 3) {
    document.write("EMPATOU")
}
else if(point1 == 3){
    document.write(player1 + " VENCEU")
}
else if(point2 == 3){
    document.write(player2 + " VENCEU")
}
}

function papel2(params) {
    esc2 = "papel"
    console.log(esc2)
    if (esc1 == esc2) {
        document.getElementById("titulo").innerText = "EMPATOU"
        document.getElementById("pr").style.visibility = "visible"
        rodada++
        point1++
        point2++
    }
else if(esc2 == "papel" && esc1 == "pedra"  ){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "pedra" && esc2 == "papel"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    point1++
    rodada++
}
else if(esc1 == "papel" && esc2 == "tesoura"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "papel" && esc2 == "pedra"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    point1++
    rodada++
}
else if(esc1=="tesoura" && esc2 =="papel"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    point1++
    rodada++
}
else if(esc1 =="tesoura" && esc2 == "pedra"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
if (point1 == 3 && point2 == 3) {
    document.write("EMPATOU")
}
else if(point1 == 3){
    document.write(player1 + " VENCEU")
}
else if(point2 == 3){
    document.write(player2 + " VENCEU")
}
}

function tesoura2(params) {
    esc2 = "tesoura"
    console.log(esc2)
    if (esc1 == esc2) {
        document.getElementById("titulo").innerText = "EMPATOU"
        document.getElementById("pr").style.visibility = "visible"
        point1++
        rodada++
        point2++
    }
else if(esc1 == "pedra" && esc2 == "papel"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "pedra" && esc2 == "tesoura"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1 == "papel" && esc2 == "tesoura"){
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
else if(esc1 == "papel" && esc2 == "pedra"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1=="tesoura" && esc2 =="papel"){
    document.getElementById("titulo").innerText = player1+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point1++
    rodada++
}
else if(esc1 =="tesoura" && esc2 == "pedra"){   
    document.getElementById("titulo").innerText = player2+" Ganhou a rodada!"
    document.getElementById("pr").style.visibility = "visible"
    point2++
    rodada++
}
if (point1 == 3 && point2 == 3) {
    document.write("EMPATOU")
}
else if(point1 == 3){
    document.write(player1 + " VENCEU")
}
else if(point2 == 3){
    document.write(player2 + " VENCEU")
}
}

function proxima(params) {
    document.getElementById("titulo").innerText = `RODADA: ${rodada}`
    document.getElementById("escolha2").style.display = "none"
    document.getElementById("escolha1").style.display = "block"
}
function reload(params) {
    document.location.reload(true)
}

