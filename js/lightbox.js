(function(){
// Objeto con todas las propiedades del efecto lightbox
// todas de agrupan en un Array

var lightBoxGroup = {

    imgContainer: document.getElementsByClassName('lightbox'),
    img:null,
    imgSrc:null,
    bodyDom: document.getElementsByTagName('body')[0],
    lightBox_container:null,
    modal: null,
    closeModal: null
}

// console.log(lightBoxGroup.imgContainer[0])

var methoLightBox = {
    Init: function(){
        for (let index = 0; index <  lightBoxGroup.imgContainer.length; index++) {
            lightBoxGroup.imgContainer[index].addEventListener('click',methoLightBox.captureImg);
            
        }
    },
    
    captureImg: function(){
        lightBoxGroup.img = this;
        methoLightBox.lightBox(lightBoxGroup.img);
    },

    lightBox: function(img){
        lightBoxGroup.imgSrc = window.getComputedStyle(img,null).backgroundImage.slice(5,-2);
        
        lightBoxGroup.bodyDom.appendChild(document.createElement('DIV')).setAttribute('id','lightBox_container');

        lightBoxGroup.lightBox_container = document.getElementById('lightBox_container');
        
        lightBoxGroup.lightBox_container.style.width= '100%';
        lightBoxGroup.lightBox_container.style.height= '100%';
        lightBoxGroup.lightBox_container.style.position= 'fixed';
        lightBoxGroup.lightBox_container.style.zIndex= '1000';
        lightBoxGroup.lightBox_container.style.background= 'rgba(0,0,0,0.8)';
        lightBoxGroup.lightBox_container.style.top= '0';
        lightBoxGroup.lightBox_container.style.left= '0';
        
        // agregadomos un nuevo DIV al div creado y se agrega un atributo id='modal'
        lightBoxGroup.lightBox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal');
        
        // Seleccionamos dicho DIV para agregarle la imagen
        lightBoxGroup.modal = document.getElementById('modal');
        
        lightBoxGroup.modal.style.height = '100%';
        lightBoxGroup.modal.appendChild(document.createElement('IMG')).setAttribute('src',lightBoxGroup.imgSrc);
        
        lightBoxGroup.modal.getElementsByTagName('img')[0].setAttribute('class','class-modal');

        lightBoxGroup.modal.innerHTML += '<i id="close_modal" class="fa fa-close" aria-hidden="true"></i>';
        
        lightBoxGroup.closeModal = document.getElementById('close_modal');
        
        lightBoxGroup.closeModal.addEventListener('click',methoLightBox.closeModalAction);
        
    },

    closeModalAction: function(){
        lightBoxGroup.bodyDom.removeChild(lightBoxGroup.lightBox_container);
    }

}

methoLightBox.Init();


}())
