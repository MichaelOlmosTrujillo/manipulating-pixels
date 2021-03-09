const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;
// Función de javascript Image() (Estudiarla)
const images1 = new Image();
images1.src = '../images/chagalito.jpg';

images1.addEventListener('load', function(){
    //Dibuja la imagen en el canvas con el ancho y alto del canvas
    ctx.drawImage(images1, 0, 0, canvas.width, canvas.height);
    //Trae la información de la imagen 
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    scannedImageData = scannedImage.data;
    for(let i = 0; i < scannedImageData.length; i+=4){
        const suma = scannedImageData[i] + scannedImageData[i + 1] + scannedImageData[i + 2];
        const promedio = suma/3;
        let var1 = Math.random()*100;
        let var2 = Math.random()*100;
        let var3 = Math.random()*100;
        scannedImageData[i] -=  var1;
        scannedImageData[i+1] -=  var2;
        scannedImageData[i+2] +=  var3;

    }
    scannedImage.data = scannedImageData;
    ctx.putImageData(scannedImage, 0, 0); // Estudiar esta función
})