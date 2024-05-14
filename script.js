const outerDiv = document.getElementById('outerDiv');
const innerDiv = document.getElementById('innerDiv');

document.addEventListener('click', function(event) {
    if (outerDiv.style.right === '0px' && event.target !== outerDiv && event.target !== innerDiv) {
        outerDiv.style.right = '-280px';
    }
});

outerDiv.addEventListener('click', function(event) {
    outerDiv.style.right = '0';
    event.stopPropagation();
});

innerDiv.addEventListener('click', function(event) {
    outerDiv.style.right = '0';
    event.stopPropagation();
});
