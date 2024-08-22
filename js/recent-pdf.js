import { getPdfs } from "./main.js";

const pdfs = getPdfs()
const allPdfs = pdfs.length;

/* Load Recent PDFs for index.html */
function loadRecentPdfs(numberOfPdfs) {
    const recentPdfs = pdfs.slice(0, numberOfPdfs);
    const desktopList = document.getElementById('desktop-ul'); // Gets the ul for desktop screens
    const mobileList = document.getElementById('mobile-ul'); // Gets the ul for mobile screens
    renderPdfs(recentPdfs, desktopList) // Adding the li element to desktop
    renderPdfs(recentPdfs, mobileList) // Adding the li element to mobile
}
function renderPdfs(recentPdfs, listElement) {
    recentPdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pdf/${pdf.name}.pdf`;
        link.textContent = `${pdf.name.replace(/_/g, ' ').replace('.pdf', '')}`;
        link.setAttribute('download', pdf.name);
        listItem.appendChild(link);
        listElement.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let numberOfPdfs = 0
    if (allPdfs > 5) { // If there are more pdfs than 5
        numberOfPdfs = 5 // then show only the 5 most recent
    } else {
        numberOfPdfs = allPdfs // if there are up to 5 pdfs show them all
    }
    loadRecentPdfs(numberOfPdfs);
});
