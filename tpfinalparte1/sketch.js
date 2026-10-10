let ptname,presentacionft;
let tipografia;
let tipografia2;
let pantalla;

async function setup(){
  tipografia2 = await loadFont ('/assets/Bouncy-Thin-PERSONAL_USE_ONLY.otf');
  tipografia = await loadFont('/assets/Bouncy-PERSONAL_USE_ONLY.otf');
  ptname = await loadImage('/assets/mousepiInicio.png');
  presentacionft = await loadImage('/assets/presentacion.png');
   createCanvas(800, 450);
  pantalla = 0;
}

function draw() {

  if (pantalla == 0){
      background(0);
  image (ptname,0,0,800,450);
 
  textFont(tipografia);
   fill(0)
   rect(219,354,365,58,12);
  fill (227, 227, 227);
  textSize(45)
  text('Press E to Start',235, 396 );
  }
   
      //------------------------------------------------
       else if (pantalla == 1) { 
      background (0);
      textFont(tipografia2);
      fill(0)
      textSize(25)
       image (presentacionft,130,10,550,440);
       text('Jack Pepper, detective privado', 176, 81)
       text('y veterano de guerra.', 176,111 )
       text('Vive en la ciudad de Mouseberg', 176, 141)
       text('Hace una semana, Steve', 176, 181)
       text('desaparecio sin dejar rastro...', 176, 211)
       text('y Jack ha decidido hacerse', 176,241 )
       text('cargo del caso.', 176,271 )
      text('Para encontrarlo, deberá', 176,311 )
      text('seguir pistas, resolver acertijos', 176, 341  )
      text('y descifrar las misteriosas ', 176, 371  )
        text('cartas que alguien le envía...', 176,401 )   
   }
   if (pantalla == 2){
 background (0);
      textFont(tipografia2);
      fill(0)
      textSize(35)
       image (presentacionft,130,10,550,440)
 text('¿Podra desenmascarar', 174, 211)
  text('al responsable antes ', 184, 241)
 text('de que sea tarde?', 234, 271)
   }
   console.log("X: " + mouseX + " | Y: " + mouseY);
    }
  
 
  function keyPressed(){
    
    if (key == 'e' || key === 'E'){
      console.log("Tecla presionada:");
      pantalla ++;

    }

  }

    
   
