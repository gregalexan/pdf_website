/* Javascript File to get dynamically pdf files from "pdf/" and import them in html. */
/* Index.html will have the recent 5 - 10 pdf max (probably 7). */
/* All-Analysis.html will have all the pdf folders and I will try to implement Pagination. */

/* Array to hold the list of PDFs */
const pdfs = [
    /* The Format is: 
        name: COMPANY - DD_MM_YYYY
    */
    { name: 'Amazon - 27_07_2024'},
    { name: 'Salesforce - 04_08_2024'},

    /* TODO: ADD MORE PDF HERE LIKE THIS  */
];

pdfs.forEach(pdf => {
    const datePart = pdf.name.split('-')[1] // Extracts DD-MM-YYYY format
    const [day, month, year] = datePart.split('_');
    pdf.date = `${year}-${month}-${day.replace(' ','')}` // Converts to YYYY-MM-DD
})

/* Sort PDFs by date (newest first) */
pdfs.sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPdfs = () => {
    console.log(pdfs);
    return pdfs;
}
