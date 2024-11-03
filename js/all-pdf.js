import { getFiles } from "./main.js";

const files = getFiles();

function loadAllFiles(page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedFiles = files.slice(start, end);
    const fileListElement = document.querySelector('.pdf ul');

    // Clear the existing list
    fileListElement.innerHTML = '';

    // Add the files to the list
    paginatedFiles.forEach(file => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pdf/${file.name}.${file.type}`; // Adjusted to include type
        link.textContent = `${file.name.replace(/_/g, ' ').replace(`.${file.type}`, '')}`;
        link.setAttribute('download', file.name);
        listItem.appendChild(link);
        fileListElement.appendChild(listItem);
    });

    // Set up pagination
    setupPagination(page, itemsPerPage);
}

function setupPagination(currentPage, itemsPerPage) {
    const totalPages = Math.ceil(files.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination') || createPaginationElement();

    // Clear existing pagination
    paginationElement.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.className = (i === currentPage) ? 'active' : '';
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadAllFiles(i, itemsPerPage);
        });
        paginationElement.appendChild(pageLink);
    }
}

function createPaginationElement() {
    const paginationElement = document.createElement('div');
    paginationElement.id = 'pagination';
    document.querySelector('section.all').appendChild(paginationElement);
    return paginationElement;
}

document.addEventListener('DOMContentLoaded', () => {
    loadAllFiles(1, 10);
});
