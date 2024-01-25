let media = document.querySelector('#btnMedia');

let resultado = document.querySelector('#resultado');

media.addEventListener('click', calcularMedia);

function calcularMedia(){
    let nota1 = document.querySelector('#cx1').value;
    let nota2 = document.querySelector('#cx2').value;
    let media = (Number(nota1) + Number(nota2)) / 2;

    resultado.innerHTML = `A média entre ${nota1} e ${nota2} é: ${media}`
}