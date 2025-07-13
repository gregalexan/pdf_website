/* Array to hold the list of files */
const files = [
    /* The Format is: 
        name: COMPANY - DD_MM_YYYY
    */
    { name: 'Amazon - 27_07_2024', type: 'pdf' },
    { name: 'Salesforce - 04_07_2024', type: 'pdf' },
    { name: 'Booking - 01_10_2024', type: 'pdf' },
    { name: 'Hims & Hers - 03_11_2024', type: 'xlsx' }, // New XLSX entry
    { name: 'Zeta - 13_07_2025', type: 'pdf' },
    

    /* TODO: ADD MORE FILES HERE LIKE THIS */
];

files.forEach(file => {
    const datePart = file.name.split('-')[1]; // Extracts DD-MM-YYYY format
    const [day, month, year] = datePart.split('_');
    file.date = `${year}-${month}-${day.replace(' ','')}`; // Converts to YYYY-MM-DD
});

/* Sort files by date (newest first) */
files.sort((a, b) => new Date(b.date) - new Date(a.date));

export const getFiles = () => {
    console.log(files);
    return files;
}
