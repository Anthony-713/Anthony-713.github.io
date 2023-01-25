(function(){
    const material = [...document.querySelectorAll('.material_ar')];
    material.forEach(M =>[
        M.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            
            addPadding.classList.toggle('material_ar--add')
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    ])
})();