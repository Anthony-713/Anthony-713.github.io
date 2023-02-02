(function(){
    const material = document.querySelectorAll('.MTitle');
    material.forEach(materiales =>[
        materiales.addEventListener('click', ()=>{
            let height = 0;
            let answer = materiales.nextElementSibling;
            let addPadding = materiales.parentElement.parentElement;
            
            addPadding.classList.toggle('material_ar--add')
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    ]);

    const zonaop = document.querySelectorAll('.TSelector');
    zonaop.forEach(opcion => [
        opcion.addEventListener('click', ()=>{
            const select = opcion.querySelector('.TSeleccionado');
            const opciones = opcion.querySelector('.opciones');
            const contenidoselect = opcion.querySelector('.tscontenido');
            const hiddenInput = opcion.querySelector('.inputselect');

            select.classList.toggle('active');
            opciones.classList.toggle('active');

            selectop(opciones, contenidoselect, hiddenInput);
            })
    ]);

    function selectop( opciones, contenidoselect, hiddenInput){
        opciones.querySelectorAll('.opcion').forEach((op) =>{
            op.addEventListener('click', (e)=>{
                e.preventDefault();
                contenidoselect.innerHTML = e.currentTarget.innerHTML;
                hiddenInput.value = e.currentTarget.querySelector('.tamaños').innerText;
            })
        });
    }
})();