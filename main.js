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


