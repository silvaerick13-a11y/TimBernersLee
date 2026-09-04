const curiosidades = [
  "O primeiro servidor web do mundo rodava em um computador NeXT no CERN.",
  "Tim Berners-Lee escreveu o primeiro navegador e servidor web sozinho.",
  "O primeiro site da história ainda está online no endereço info.cern.ch.",
  "Ele fundou o W3C (World Wide Web Consortium) em 1994 para definir os padrões da web."
];

const btn = document.getElementById('btnCuriosidade');
const texto = document.getElementById('curiosidadeText');

btn.addEventListener('click', () => {
  const indiceSorteado = Math.floor(Math.random() * curiosidades.length);
  texto.textContent = curiosidades[indiceSorteado];
});