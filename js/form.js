(function () {
    
    var PropForm = {
        form: document.formulario_contacto,
        elementForm: document.formulario_contacto.elements,
        error: null,
        textError: null
    }
    
    var MetForm = {
    
        init: function(){
            for (let index = 0; index < PropForm.elementForm.length; index++) {
                if(PropForm.elementForm[index].type == 'text' || PropForm.elementForm[index].type == 'email'|| PropForm.elementForm[index].nodeName.toLowerCase() == 'textarea'){
    
                    PropForm.elementForm[index].addEventListener('focus',MetForm.focusInput);
                    PropForm.elementForm[index].addEventListener('blur',MetForm.bruInput);                
                }            
            }
            PropForm.form.addEventListener('submit',MetForm.validator);
        },
        focusInput: function(){
            this.parentElement.children[1].className= 'label active'
    
        },
        bruInput: function(){
            if(this.value == ''){
                this.parentElement.children[1].className= 'label'
            }
        },
        validator: function(e){
            for (let index = 0; index < PropForm.elementForm.length; index++) {
    
                if(PropForm.elementForm[index].value == ''){
                    e.preventDefault();
    
                    if (PropForm.elementForm[index].parentElement.children.length < 3){
    
                        PropForm.error = document.createElement('p');
                        PropForm.textError = document.createTextNode('Agrega un contenido en el campo ' + PropForm.elementForm[index].name);
                        PropForm.error.appendChild(PropForm.textError);
                        PropForm.error.className = 'error';
                        
                        PropForm.elementForm[index].parentElement.appendChild(PropForm.error)
                    } 
    
    
                } else {
    
                    if (PropForm.elementForm[index].parentElement.children.length >= 3){
                       PropForm.error = PropForm.elementForm[index].parentElement.getElementsByTagName('p')[0];
                       PropForm.elementForm[index].parentElement.removeChild(PropForm.error);
                    }
                }
                
            }
        }
       
    }
    
    MetForm.init();
}())
