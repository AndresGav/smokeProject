export default function changeBackColor(valorHumo){

    document.getElementById("valorPPMID").innerHTML = valorHumo

    if ( valorHumo>= 400 ){ //PARTES POR MILLON
        document.getElementById("cambiarBack").classList.remove('bg-blue-500');
        document.getElementById("cambiarBack").classList.add('bg-red-500');
        
        //console.log("es mayor ")
    }else{
        document.getElementById("cambiarBack").classList.remove('bg-red-500');
        document.getElementById("cambiarBack").classList.add('bg-blue-500');
       //console.log("es es menor")
    }

    
}