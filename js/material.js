(function(){
    const material = [...document.querySelectorAll('.MTitle')];
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
    const selector = document.querySelector('#TSelect');
    const opciones = document.querySelector('#opciones');
    const contenidoselect = document.querySelector('#TSelect .tscontenido');
    const hiddenInput = document.querySelector('#inputselect');
    
    document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
        opcion.addEventListener('click', (e)=>{
            e.preventDefault();
            contenidoselect.innerHTML = e.currentTarget.innerHTML;
            selector.classList.toggle('active');
            opciones.classList.toggle('active');
            hiddenInput.value = e.currentTarget.querySelector('.tamaños').innerText;
        });
    });
    selector.addEventListener('click', ()=>{
        selector.classList.toggle('active');
        opciones.classList.toggle('active');
    });
    
})();