document.addEventListener('DOMContentLoaded', function () {

    //At beginning, set all of the pages to have a display of none except page1.
    document.querySelectorAll('.pages').forEach(p => {
        p.style.display = 'none';
    })
    document.querySelector('#page1').style.display = 'block';
    //Set the home page link to be white, to show that user is on the home page.
    document.querySelector('#page-one').style.color = 'white';

    // Add on click function to the nav anchor elements so that they change which page is showing 
    document.querySelectorAll('.nav-item').forEach(a => {
        a.onclick = function() {
            showPage(String(this.dataset.page));
            //The following code sets the page clicked on to have a white colour, 
            //and the rest to go back to normal. This tells the user the page currently showing.
            document.querySelectorAll('.nav-link').forEach(p => {
                p.style.color = '#241d15';
            })
            this.style.color = 'white';
            //Hide message saying email has been recieved on contact page
            document.querySelector('#thanks-message').style.display = 'none';
            //Set input fields on form to be empty
            document.querySelector('#fullname').value = '';
            document.querySelector('#emailaddress').value = '';
            document.querySelector('#message').value = '';
        } 
    })
})

//This function is called when the anchor elements are clicked on.
function showPage(page) {
    document.querySelectorAll('.pages').forEach(p => {
        p.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}

