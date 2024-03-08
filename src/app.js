// Lógica principal de la aplicación
import { controller } from './controller.js';

export function convert(type) {
  const inputDecimalElement = document.getElementById('inputDecimal');
  const inputValue = inputDecimalElement.value;
  
  // Configura el número decimal en el modelo
  controller.setInput(inputValue);

  // Llama a la función de conversión correspondiente según el tipo
  switch (type) {
    case 'bin':
      controller.convertToBinary();
      break;
    case 'oct':
      controller.convertToOctal();
      break;
    case 'hex':
      controller.convertToHexadecimal();
      break;
    default:
      break;
  }
}