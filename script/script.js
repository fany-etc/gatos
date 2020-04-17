var unete = document.getElementById('unete')
var usuario = document.getElementById('usuario')
var ingreso = document.getElementById('ingreso')

ingreso.addEventListener('click',function(){
  if (usuario.classList[1]=="d-none"){
    usuario.classList.remove('d-none')
    unete.classList.add('d-none')
  }else if (unete.classList[1]=="d-none"){
    unete.classList.remove('d-none')
    usuario.classList.add('d-none')
  }
})