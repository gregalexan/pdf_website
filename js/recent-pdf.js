import { getFiles } from "./main.js";

const files = getFiles();
const allFiles = files.length;
console.log(allFiles);

/* Load Recent Files for index.html */
function loadRecentFiles(numberOfFiles) {
    const recentFiles = files.slice(0, numberOfFiles);
    const desktopList = document.getElementById('desktop-ul');
    const mobileList = document.getElementById('mobile-ul');
    renderFiles(recentFiles, desktopList);
    renderFiles(recentFiles, mobileList);
}

function renderFiles(recentFiles, listElement) {
    recentFiles.forEach(file => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pdf/${file.name}.${file.type}`; // Adjusted to include type
        link.textContent = `${file.name.replace(/_/g, ' ').replace(`.${file.type}`, '')}`;
        link.setAttribute('download', file.name);
        listItem.appendChild(link);
        listElement.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let numberOfFiles = allFiles > 5 ? 5 : allFiles;
    loadRecentFiles(numberOfFiles);
});
