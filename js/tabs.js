(function(){
    
    // Propiedades de los Tabs 
    var propTabs ={
        SelectEncabezado: document.getElementById('encabezado_menu').firstElementChild,
        SelectFirstContent: document.getElementById('contenido_menu').firstElementChild,
        MenuLink: document.querySelectorAll('#encabezado_menu li a'),
        Li_MenuLink: document.querySelectorAll('#encabezado_menu li'),
        MenuContent: document.querySelectorAll('#contenido_menu > Div'),
        ContentActive: null  
    
    
    }
    // Metodos de las Propiedades 
    
    var methoTabs= {
        init: function () {
            propTabs.SelectEncabezado.className = 'active';
            propTabs.SelectFirstContent.className = 'active;'   
            
            for (let index = 0; index < propTabs.MenuLink.length; index++) {
                propTabs.MenuLink[index].addEventListener('click',methoTabs.evento);
                
            }
            
        },
    
        evento: function(e){
            // e.preventDefault(); elimina la accion por defecto, elimina  del URL #Cafe #Postre
            e.preventDefault();
    
            for (let index = 0; index < propTabs.Li_MenuLink.length; index++) {
                propTabs.Li_MenuLink[index].className = '';
               
            }
            for (let index = 0; index < propTabs.MenuContent.length; index++) {
                propTabs.MenuContent[index].className = '';           
            }
    
            this.parentElement.className = 'active';
            propTabs.ContentActive = this.getAttribute('href');
            document.querySelector(propTabs.ContentActive).className = 'active';
            
    
    
    
        }
    
    
    
    
    
    }
    
    methoTabs.init()
}())
