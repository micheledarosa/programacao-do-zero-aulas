function torrar (){
    console.log("torrando pão")
    injetarPao()
  }
  
  function injetarPao(){
    console.log("preparando para injetar o pão")
    console.log("...")
    console.log("finalizado")
  }
  
  torrar()
  
  /* usar padrão camel case
  usar nomes que indicam ações
  criar uma função para cada objetivo
  ter uma função principal (main) para chamar todas as funções */
  
  function getData(){
    console.log("pegando dados do usuário")
  }
  
  function checkValues(){
    console.log("validando dados")
  }
  
  function sendToDatadabase(){
    console.log("cadastrando dados")
  }
  
  function main(){
    getData()
    checkValues()
    sendToDatadabase()
  }
  