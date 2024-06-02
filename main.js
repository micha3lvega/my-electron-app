const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

/**
 * En Windows y Linux, al salir de todas las ventanas generalmente se cierra una aplicación por completo.
 * Para implementar esto, escucha el evento 'window-all-closed' del módulo app
 * y llame a app.quit() si el usuario no está en macOS (darwin).
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/*
 * Mientras que las aplicaciones de Linux y Windows se cierran cuando no tienen ventanas abiertas,
 * las aplicaciones de macOS generalmente siguen ejecutándose incluso sin ninguna ventana abierta,
 * y activar la aplicación cuando no hay ventanas disponibles debería abrir una nueva.
 */
app.whenReady().then(() => {
  createWindow();

  /*
   Para implementar esta función, escucha el evento activate del módulo app 
   y llame a su método existente createWindow() si no hay ventanas del navegador abiertas.
  */
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});