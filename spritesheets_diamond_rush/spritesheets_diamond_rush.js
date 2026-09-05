//variables
let fondo, barra1, barra2, checkpoint, piedra, planta;

let protaQuieto = [];
let prota = [];
let protaUp = [];
let protaDn = [];
let protaRg = [];

let  n = 0; //prota
let num = 0; //serpiente



//prota
let fin = 686;
let costado = 629;
let arriba = 404;
let abajo = 338
  let derecha = 458;
let drcha = 540;
let dn = 226;
let Rg = 248;
let up = 302;
let posX = 0;

// serpiente
let posY = 159;
let upSep = 322;


let serpienteUp = [];
let serpienteDn = [];



let marcaTiempoSED= 0;
let velocidadSED = 150;

let marcaTiempoSEU = 0;
let velocidadSEU = 150;

let estadoSe;
let estadoP;
let contadorProta;
;

function preload() {

  fondo = loadImage('/assets/fondo.png');
  barra1 = loadImage('/assets/parte_arriba.png');
  barra2 = loadImage('/assets/parte_abajo.png');
  checkpoint = loadImage('/assets/checkpoint.png');
  piedra = loadImage ('/assets/piedra.png');
  planta = loadImage('/assets/planta.png');

  //---------------------------------------
  CargaPr(1, 4, prota);
  CargaPrQ (1, 6, protaQuieto);
  CargaSpU( 4, serpienteUp);
  CargaSpD (8, serpienteDn);

  //---------------------------------------------
  protaUp.push(loadImage('/assets/arriba1.png'));
  protaUp.push(loadImage('/assets/arriba2.png'));

  //---------------------------------------------
  protaDn.push(loadImage('/assets/abajo1.png'));
  protaDn.push(loadImage('/assets/abajo2.png'));

  //---------------------------------------------
  protaRg.push (loadImage('/assets/derecha1.png'));
  protaRg.push (loadImage('/assets/derecha2.png'));
}

function setup() {
  createCanvas(800, 600);

  contadorProta = 0;
  contadorProtaQ = 0;
  estadoP = 0;
  estadoSe = 0;
}

function draw() {

  background(0);


  //----------------------------------------------------
  image (fondo, 0, 0, 800, 600);
  image(checkpoint, 51, 328, 54, 54);
  //----------------------------------------------------lado izquierdo
  image(piedra, 271, 381, 55, 55);
  image(piedra, 326, 381, 55, 55);
  image(piedra, 326, 330, 55, 55);
  //-----------------------------------------------------lado derecho
  image(piedra, 437, 381, 54, 54);
  image(piedra, 437, 330, 54, 54);


  //serpiente ----------------------
  switch(estadoSe) {
  case 0:


    image (serpienteDn [num], 378, posY, 64, 64);

    if (posY < 322) {
      posY +=1;
    }

    if ( millis() - marcaTiempoSED >= velocidadSED ) {
      num++;
      if ( num >= serpienteDn.length) {
        num = 0;
      }
      marcaTiempoSED = millis();
    }
    if (posY == 322) {
      reiniciarVaSep(1)
    }
    break;

  case 1:

    image(serpienteUp [num], 370, upSep, 64, 64);
    if (upSep > 159) {
      upSep -=1;
    }

    if ( millis() - marcaTiempoSEU >= velocidadSEU ) {
      num++;
      if ( num >= serpienteUp.length) {
        num = 0;
      }
      marcaTiempoSEU = millis();
    }
    if (upSep == 159) {
      reiniciarVaSep(0);
    }

    break;
  }


  // PROTA -------------------------------------

  switch (estadoP) {
  case 0:

    image (prota[n], posX, 316, 53, 78);

    if (posX < 270) {
      posX += 1;
    }

    SpritesProta( 10, prota);

    if (posX == 270) {
      SigEstadoP(1);
    }
    break;



  case 1:

    image(protaQuieto[n], 270, 320, 65, 65);

    contadorProta++;

    if (contadorProta % 20 == 0) {
      n++;
    }

    if ( n >= protaQuieto.length ) {
      n = 0;
      SigEstadoP (2);
    }
    break;
    //----------------------------
  case 2:

    image(protaUp [n], 246, up, 110, 110);


    if ( up > 244) {
      up -= 1;
    }

    SpritesProta( 20, protaUp);

    if ( up == 244) {
      SigEstadoP (3);
    }

    break;
    //-----------------------------------------
  case 3:

    if (Rg < 271) {
      Rg += 1;
      SpritesProta(10, protaRg);
    } else if (estadoSe == 0 && posY > 240) {
      if (Rg < 469) {
        Rg += 1;
        SpritesProta(10, protaRg);
      }
    } else if (estadoSe == 1 && upSep < 240) {
      if (Rg < 469) {
        Rg += 1;
        SpritesProta(10, protaRg);
      }
    } else if (Rg >= 295 && Rg < 470) {
      Rg += 1;
      SpritesProta(10, protaRg);
    }
    image(protaRg[n], Rg, 249, 100, 100);

    if (Rg == 469) {
      SigEstadoP(4);
    }
    break;
    //-----------------------------------------
  case 4:

    image (protaDn [n], 456, dn, 125, 125);
    SpritesProta(10, protaDn);

    if (dn < 333) {
      dn += 1;
    }

    if ( dn == 333) {
      SigEstadoP (5);
    }
    break;
    //-----------------------------------------
  case 5:

    image(protaQuieto[n], 479, 364, 75, 75);

    contadorProta++;

    if (contadorProta % 20 == 0) {
      n++;
    }

    if ( n >= protaQuieto.length ) {
      n = 0;
      SigEstadoP (6);
    }
    break;
    //-----------------------------------------

  case 6:


    image (protaRg [n], derecha, 360, 105, 105);

    if (derecha < 514) {
      derecha += 1
    }
    SpritesProta(10, protaRg);

    if ( derecha == 514) {
      SigEstadoP (7);
    }
    break;
    //-----------------------------------------

  case 7:

    image (protaDn [n], 512, abajo, 125, 125);

    SpritesProta(10, protaDn);

    if ( abajo < 395) {
      abajo += 1;
    }

    if ( abajo == 395) {
      SigEstadoP (8);
    }
    break;
    //-----------------------------------------

  case 8:
    image(protaQuieto[n], 540, 420, 75, 75);

    contadorProta++;

    if (contadorProta % 20 == 0) {
      n++;
    }

    if ( n >= protaQuieto.length ) {
      n = 0;
      SigEstadoP (9);
    }
    break;
    //-----------------------------------------

  case 9:
    image (prota[n], drcha, 423, 56, 81);

    SpritesProta(10, prota);

    if (drcha < 658) {
      drcha +=1;
    }

    if (drcha == 654) {
      SigEstadoP (10);
    }

    break;
    //-----------------------------------------

  case 10:
    image(protaQuieto[n], 644, 420, 75, 75);

    contadorProta++;

    if (contadorProta % 20 == 0) {
      n++;
    }

    if ( n >= protaQuieto.length ) {
      n = 0;
      SigEstadoP (11);
    }
    break;
    //-----------------------------------------
  case 11:

    image (protaUp [n], 630, arriba, 110, 110, );

    if (arriba > 350) {
      arriba -= 1
    }
    SpritesProta (10, protaUp);

    if (arriba == 350) {
      SigEstadoP (12);
    }
    break;
    //-----------------------------------------
  case 12:
    image (protaRg [n], costado, 359, 100, 100);

    if (costado < 652) {
      costado += 1
    }
    SpritesProta(10, protaRg);

    if ( costado == 652) {
      SigEstadoP (13);
    }

    break;
    //-----------------------------------------
  case 13:

    image (prota[n], fin, 370, 56, 81);

    SpritesProta(10, prota);

    if (fin < 800) {
      fin +=1;
    }

    if (fin == 800) {
      reset();
    }
  }



  image (barra1, 0, 0);
  image (barra2, 0, 487);







  console.log (upSep);
  console.log (posY);
  console.log("Clic en X: " + mouseX + ", Y: " + mouseY);
}
