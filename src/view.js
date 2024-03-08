// Lógica para actualizar la interfaz de usuario con el resultado
export const view = {
    updateResult: function (result) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Resultado: ${result}`;
    }
  };