const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector(".drop-area_letter");
const dragText1 = dropArea.querySelector(".drop-area_letter1");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input_file");
let files;

button.addEventListener('click', (e) => {
    input.click();
});

input.addEventListener('change', (e)=> {
    files = input.files;
    dropArea.classList.add('active');
    showFiles(files);
    dropArea.classList.remove('active');
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
    button.style.display = 'none';
    dragText.textContent = "Soltar para subir los archivos";
    dragText1.textContent = "";
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    button.style.display = 'inline';
    dragText.textContent = "Arrastrar y soltar el archivo";
    dragText1.textContent = "O";
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove('active');
    button.style.display = 'inline';
    dragText.textContent = "Arrastrar y soltar el archivo";
    dragText1.textContent = "O";
});

function showFiles(files){
    if(files.length === undefined){
        processFile(files);
    }
    else{
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(file){
    const docType = file.type;
    const validExtensions = "application/stl";

    if(validExtensions.includes(docType)){
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `
            <div id="${id}" class="file-container">
                <img src="${fileUrl}" alt="${file.name}" width = "50px">
                <div class="status">
                    <span>${file.name}</span>
                    <span class="status-text">
                        Loading...
                    </span>
                </div>
            </div>
            `;
            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        });

        fileReader.readAsDataURL(file);
        uploadFile(file, id);
    }
    else{
        alert("no es un archivo valido");
    }
}

async function uploadFile(file, id){
    const formData =  new FormData();
    formData.append("file", file);
    try{
        const response = await fetch("http://localhost:3000/upload",{
            method: "POST",
            body: formData,
        });
        const responseText = await response.text();
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success"> Archivo subido.</span>`;
    }
    catch (error){
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure"> El archivo no pudo subirse.</span>`;
    }   
}
