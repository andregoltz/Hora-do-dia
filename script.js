
function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem') 
   var recado = document.getElementById('recado')
   var data = new Date()
   //var hora = data.getHours()
   var hora = 9
   msg.innerHTML = `Agora são ${hora} horas`
   if (hora>= 0 && hora < 12){
       //BOM DIA
       img.src = 'imagens/fotomanha.png'
       document.body.style.background = '#fde38c'
       recado.innerHTML = 'Já tomou seu café da manhã?'
   }else if (hora >= 12 && hora <= 18){
       //BOA TARDE
       img.src = 'imagens/fototarde.png'
       document.body.style.background = '#924e22'
       recado.innerHTML = 'Já tomou seu café da tarde?'
   }else {
       //BOA NOITE
       img.src = 'imagens/fotonoite.png'
       document.body.style.background = '#003a5c'
       recado.innerHTML = 'Está na hora de descansar!'
   }
}




