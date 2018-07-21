function showMenu() {
    var y = document.querySelector('#main-menu-container');    
    var el = document.querySelector('#nav button');    
    var cross = document.querySelector('#nav img');
    
    y.style.display = 'flex';      
    el.style.display = 'none';
    cross.style.display = 'block';
}