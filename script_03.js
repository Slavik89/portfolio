function closeMenu() {
    var y = document.querySelector('#nav ul');    
    var el = document.querySelector('#nav button');    
    var cross = document.querySelector('#nav img');
    
    y.style.display = 'none';      
    el.style.display = 'block';
    cross.style.display = 'none';
}