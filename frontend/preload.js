const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  selectSaveDirectory: () => ipcRenderer.invoke('select-directory'),
  uploadDirectory: (directoryPath) => ipcRenderer.invoke('upload-directory', directoryPath),
  transformImage: (action) => ipcRenderer.invoke('transform-image', action)
});
