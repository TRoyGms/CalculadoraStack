// Lógica del controlador
import { model } from './model.js';
import { view } from './view.js';

export const controller = {
  // Configura el número decimal en el modelo
  setInput: function (value) {
    model.decimalNumber = value;
  },

  // Convierte decimal a binario utilizando una pila
  convertToBinary: function () {
    const decimalNumber = parseInt(model.decimalNumber);
    const binaryResult = this.decimalToBinary(decimalNumber);
    view.updateResult(binaryResult);
  },

  // Utiliza una pila para convertir decimal a binario
  decimalToBinary: function (decimalNumber) {
    const stack = [];
    while (decimalNumber > 0) {
      stack.push(decimalNumber % 2);
      decimalNumber = Math.floor(decimalNumber / 2);
    }

    if (stack.length === 0) {
      return '0';
    }

    let binaryResult = '';
    while (stack.length > 0) {
      binaryResult += stack.pop();
    }

    return binaryResult;
  },

  // Convierte decimal a octal y actualiza la interfaz de usuario
  convertToOctal: function () {
    const decimalNumber = parseInt(model.decimalNumber);
    const octalResult = decimalNumber.toString(8);
    view.updateResult(octalResult);
  },
  
  // Convierte decimal a hexadecimal y actualiza la interfaz de usuario
  convertToHexadecimal: function () {
    const decimalNumber = parseInt(model.decimalNumber);
    const hexadecimalResult = decimalNumber.toString(16).toUpperCase();
    view.updateResult(hexadecimalResult);
  }
};

