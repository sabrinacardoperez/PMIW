
//CARGA IMAGENES-----------------------------

function CargaPrQ (INICIO, FIN, ARREGLO) {
  for (let i = INICIO; i <= FIN; i++) {
    ARREGLO.push(loadImage('/assets/protaq'+i+'.png'));
  }
}

function CargaPr(INICIO, FIN, ARREGLO) {
  for (let i = INICIO; i <= FIN; i++) {
    ARREGLO.push(loadImage('/assets/prota0'+i+'.png'));
  }
}

function CargaSpU(FINU, ARREGLOU) {
  for (let i = 1; i <= FINU; i++) {
    ARREGLOU.push (loadImage('/assets/arriba_'+i+'.png'));
  }
}

function CargaSpD (FIND, ARREGLOD) {
  for (let j = 1; j <= FIND; j++) {
    ARREGLOD.push (loadImage('/assets/abajo_'+j+'.png'));
  }
}
//PROTA --------------------------------------
function SigEstadoP(nuevoEstado) {
  estadoP = nuevoEstado;
  contadorProta = 0;
  n = 0;
  return estadoP;
}

function SpritesProta(CANTIDAD, ARREGLO, ) {

  contadorProta++;

  if (contadorProta % CANTIDAD == 0) {
    n++;
  }

  if ( n >= ARREGLO.length ) {
    n = 0;
  }
}

function reset() {

  posX = 0;
  up = 302;
  Rg = 248;
  dn = 226;
  derecha = 458;
  abajo = 338;
  drcha = 540;
  arriba = 404;
  costado = 629;
  fin = 686;

  n = 0;
  contadorProta = 0;

  SigEstadoP(0);
}

  
  //SERPIENTE --------------------------------------
  function reiniciarVaSep(nuevoEstado) {
    num = 0;
    if (nuevoEstado == 0) {
      posY = 159;
    } else if (nuevoEstado == 1) {
      upSep = 322;
    }
    estadoSe = nuevoEstado
  }





  //POR SI FALLA --------------------------------------

  //protaQuieto.push(loadImage('/assets/protaq1.png'));
  //protaQuieto.push(loadImage('/assets/protaq2.png'));
  //protaQuieto.push(loadImage('/assets/protaq3.png'));
  //protaQuieto.push(loadImage('/assets/protaq4.png'));
  //protaQuieto.push(loadImage('/assets/protaq5.png'));
  //protaQuieto.push(loadImage('/assets/protaq6.png'));

  //prota.push(loadImage('/assets/prota01.png'));
  // prota.push(loadImage('/assets/prota02.png'));
  // prota.push(loadImage('/assets/prota03.png'));
  // prota.push(loadImage('/assets/prota04.png'));

  //serpienteUp.push(loadImage('/assets/arriba_1.png'));
  //serpienteUp.push(loadImage('/assets/arriba_2.png'));
  //  serpienteUp.push(loadImage('/assets/arriba_3.png'));
  //  serpienteUp.push(loadImage('/assets/arriba_4.png'));

  //serpienteDn.push(loadImage('/assets/abajo_1.png'));
  //serpienteDn.push(loadImage('/assets/abajo_2.png'));
  //serpienteDn.push(loadImage('/assets/abajo_3.png'));
  //serpienteDn.push(loadImage('/assets/abajo_4.png'));
  //serpienteDn.push(loadImage('/assets/abajo_5.png'));
  //serpienteDn.push(loadImage('/assets/abajo_6.png'));
  //serpienteDn.push(loadImage('/assets/abajo_7.png'));
  //serpienteDn.push(loadImage('/assets/abajo_8.png'));

  //---------------------------------------------
