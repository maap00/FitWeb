var propScroll={
    positionAtual: window.pageYOffset,
    MildScroll: document.getElementsByClassName('mildScroll'),
    InitScroll : document.getElementsByClassName('mildInit'),
    destiny:null,
    destinyPx:null,
    interval:null

}

var metScroll={

    init: function(){
        for (let index = 0; index < propScroll.MildScroll.length; index++) {
            propScroll.MildScroll[index].addEventListener('click',metScroll.move)            
        }
        for (let index = 0; index < propScroll.InitScroll.length; index++) {
            propScroll.InitScroll[index].addEventListener('click',metScroll.moveInit)            
        }
    },
    move: function(e){
        e.preventDefault();
        clearInterval(propScroll.interval);
        propScroll.destiny = this.getAttribute('href');
        propScroll.destinyPx = document.querySelector(propScroll.destiny).offsetTop -94;
        propScroll.positionAtual= window.pageYOffset;

        propScroll.interval= setInterval(() => {

            if(propScroll.positionAtual < propScroll.destinyPx){

                propScroll.positionAtual += 30;

                if(propScroll.positionAtual >= propScroll.destinyPx){

                    clearInterval(propScroll.interval);
                }
            } else{
                propScroll.positionAtual -= 30;
                
                if(propScroll.positionAtual <= propScroll.destinyPx){
                    clearInterval(propScroll.interval);
                }
            }

            window.scrollTo(0,propScroll.positionAtual)

        }, 15); 
        
        
    },
    moveInit: function(e){
        e.preventDefault();
        clearInterval(propScroll.interval);
        propScroll.destiny = this.getAttribute('href');
        propScroll.positionAtual= window.pageYOffset;

        propScroll.interval = setInterval(()=>{
            
            if(propScroll.positionAtual > 0){
                propScroll.positionAtual -= 30;
                if(propScroll.positionAtual <= 0){
                    clearInterval(propScroll.interval);
                }
                
            }else{
                return;
            }
            
            
            
            window.scrollTo(0,propScroll.positionAtual)
            
        },15);

    }
}




metScroll.init();