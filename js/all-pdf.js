/* Get all the pdf files for all analysis.html */
import { getPdfs } from "./main.js";

/* Get recent pdfs for index.html */
const pdfs = getPdfs();

/* Load all pdfs in the html */
function loadAllPdfs(page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedPdfs = pdfs.slice(start, end);
    const pdfListElement = document.querySelector('.pdf ul');

    // Clear the existing list
    pdfListElement.innerHTML = '';

    // Add the PDFs to the list
    paginatedPdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pdf/${pdf.name}.pdf`;
        link.textContent = `${pdf.name.replace(/_/g, ' ').replace('.pdf', '')}`;
        link.setAttribute('download', pdf.name);
        listItem.appendChild(link);
        pdfListElement.appendChild(listItem);
        
    });

    // Set up pagination
    setupPagination(page, itemsPerPage);
}

/* Function to set up pagination */
function setupPagination(currentPage, itemsPerPage) {
    const totalPages = Math.ceil(pdfs.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination') || createPaginationElement();

    // Clear existing pagination
    paginationElement.innerHTML = '';

    // Add page links
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.className = (i === currentPage) ? 'active' : '';
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadAllPdfs(i, itemsPerPage);
        });
        paginationElement.appendChild(pageLink);
    }
}

/* Function to create pagination element if it does not exist */
function createPaginationElement() {
    const paginationElement = document.createElement('div');
    paginationElement.id = 'pagination';
    document.querySelector('section.all').appendChild(paginationElement);
    return paginationElement;
}

document.addEventListener('DOMContentLoaded', () => {
    loadAllPdfs(1, 10);
});