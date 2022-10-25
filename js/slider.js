
var propSlider = {
    slider: document.getElementById('slider'),
    firstSlider: null
}

var metSlider = {

    init: function(){
        setInterval(metSlider.moveSlider,3000)
    },


    moveSlider: function(){
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function(){
            propSlider.firstSlider= propSlider.slider.firstElementChild;
            propSlider.slider.appendChild(propSlider.firstSlider);
            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = 0;

        },1000)
    }

}

metSlider.init();



