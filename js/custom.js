/*global document*/
var dropdown = document.getElementById('dropDownIcon'),/*get the drop down icon*/
    navbar   = document.getElementById('topnav'),      /* get the ul list */
    x_icon   = document.getElementById('xIcon');       /* get the closing incon*/



dropdown.onclick = function(){           /*show the navigation bar*/
    x_icon.classList.remove('hidden-icon');
    this.classList.add('hidden-icon');
    x_icon.classList.add('xIcon');
    navbar.classList.add('responsive-ul');
}



x_icon.onclick = function() {           /*hide the navigation bar*/
    this.classList.add('hidden-icon');
    dropdown.classList.remove('hidden-icon');
    navbar.classList.remove('responsive-ul');
}
