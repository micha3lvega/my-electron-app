const { ipcRenderer } = require('electron');

window.addEventListener("DOMContentLoaded", () => {

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

});

// Manejar el evento para mostrar la alerta
ipcRenderer.on('show-alert', () => {
  alert('¡Esta es una alerta desde el menú personalizado!');
});