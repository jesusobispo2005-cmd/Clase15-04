export function palindromo(palabra){
 const textoLimpio = palabra.toLowerCase().replace(/[\W_]/g, '');

 const textoReverso = textoLimpio.split('').reverse().join('');;

return textoLimpio === textoReverso;
}