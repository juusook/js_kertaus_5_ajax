const numero = prompt('Anna numero:');
try {
  if (numero === '' || numero.trim() === null || isNaN(Number(numero))) {
    throw new Error('Syöte ei ole numero');
  }
  // 2. Tämä suoritetaan kun virhettä ei ole.
  if (!numero()) {
    console.log('Numero on nolla');
  } else {
    console.log('Numero on ' + numero);
  }
  // 3. Tämä suoritetaan jos syötteessä on virhe.
} catch (error) {
  console.error(`Virhe pysäytetty: ${error.message}`);
}
