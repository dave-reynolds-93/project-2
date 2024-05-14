document.addEventListener('DOMContentLoaded', function () {

    //At beginning, set all of the pages to have a display of none except page1.
    document.querySelectorAll('p').forEach(p => {
        p.style.display = 'none';
    })
    document.querySelector('#page1').style.display = 'block';

    // Add on click function to the nav anchor elements so that they change which page is showing 
    document.querySelectorAll('a').forEach(a => {
        a.onclick = function() {
            showPage(String(this.dataset.page));
        } 
        
    })
})

//This function is called when the anchor elements are clicked on.
function showPage(page) {
    document.querySelectorAll('p').forEach(p => {
        p.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}