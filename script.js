function calcular(){
  A=inputA.value
  B=inputB.value
  C=inputC.value
  var deletar= document.getElementById("botao")
  deletar.parentNode.removeChild(deletar)
  
     Delta=(B*B-(4*A*C))
  x=(-B+(Math.sqrt(Delta)))/(2*A)
  x2=(-B-(Math.sqrt(Delta)))/(2*A)
  subtitulo.innerHTML="Resultado"
  
  if(Delta<0){
    resultados.innerHTML='<li> S=Ø'
  }
  
  if(Delta>0){
  resultados.innerHTML=`<li> x'= ${x}</li>
<li> x"= ${x2}`
}
  suaequacao.innerHTML= "Sua Equação"
  if(A>=0 && B>=0 && C>=0){
    equacao.innerHTML= `${A}x²+${B}x+${C}=0`
  }
  else if(A<0 && B>=0 && C>=0){
    equacao.innerHTML= `${A}x²+${B}x+${C}=0`
  }
  else if(A<0 && B<0 && C>=0){
    equacao.innerHTML= `${A}x²${B}x+${C}=0`
  }
  else if(A<0 && B<0 && C<0){
    equacao.innerHTML= `${A}x²${B}x${C}=0`
  }
  else if(A>=0 && B<0 && C<0){
    equacao.innerHTML= `${A}x²${B}x${C}=0`
  }
  else if(A>=0 && B<0 && C>=0){
    equacao.innerHTML= `${A}x²${B}x+${C}=0`
  }
  else if (A>=0 && B>=0 && C<0){
    equacao.innerHTML= `${A}x²+${B}x${C}=0`
  }
  else if (A<0 && B>=0 && C<0){
    equacao.innerHTML= `${A}x²+${B}x${C}=0`
  }
}