function setup() {
    createCanvas(900, 800);//tela
    background("white");//cor da tela de fundo
  }
  
  function draw() {
    stroke("grey");//cor de fora
    fill("lightblue");//cor de dentro
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 15);//muda o tamanho
    }
  }