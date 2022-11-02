(function () {
    
    var propMenu = {
        burgerMenu : document.getElementById('burger_menu'),   
        slideMenu : document.getElementById('slideMenu'),   
        MenuActive : false, 
        elementsMenu: document.querySelectorAll('#slideMenu nav a')  
    }
    
    var metMenu = {
        init: ()=>{
            
           propMenu.burgerMenu.addEventListener('click',metMenu.openMenu);
    
           for (let index = 0; index < propMenu.elementsMenu.length; index++) {
    
               propMenu.elementsMenu[index].addEventListener('click',metMenu.elementsMenuSelect);       
            
           }
    
        },
    
        openMenu: () => {
    
            if(propMenu.MenuActive === false){
    
                propMenu.MenuActive = true;
                propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
    
            }else{
                propMenu.MenuActive = false;            
                propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active','');
            }
        },
    
        elementsMenuSelect: () => {
    
            
                propMenu.MenuActive = false;            
                propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active','');             
            
    
        }
       
    }
    
    metMenu.init();
    
}())
