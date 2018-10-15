//function Iniciar(){
//    var c = document.getElementById("canvasTopo");
//    var ctx = c.getContext("2d");
//
//    // Create gradient
//    var grd = ctx.createLinearGradient(50, 1000, 1500, 1000);
//    grd.addColorStop(0, "#57b2d8");
//    grd.addColorStop(1, "white");
//
//    // Fill with gradient
//    ctx.fillStyle = grd;
//    ctx.fillRect(0, 0, 1500, 550);
//}

//    function iniciaAJAX() 
//    {
//        var objetoAJAX;
//
//        if (window.XMLHttpRequest) 
//         objetoAJAX = new XMLHttpRequest();
//
//        else 
//             if(window.ActiveXObject) 
//             {
//                 objetoAJAX = new ActiveXObject("Msxml2.XMLHTTP");
//                 if (!objetoAJAX) 
//                 {
//                     objetoAJAX = new ActiveXObject("Microsoft.XMLHTTP");
//                 }
//             } 
//             else 
//             {
//                 alert("Seu navegador não suporta esta aplicação");
//             }
//
//      return objetoAJAX;
//    }
//
//    var requisicaoAjax = iniciaAJAX();
//
//    if (requisicaoAjax) 
//    {
//        requisicaoAjax.onreadystatechange = function () {
//         if (requisicaoAjax.readyState == 4) 
//         {
//             //alert("Chegou a requisição do Servidor");
//             if (requisicaoAjax.status == 200) 
//             {
//                 alert("Chegou a requisição feita ao servidor");
//             } 
//
//             else 
//             {
//                 alert("Problema na comunicação com o servidor");
//             }
//         }
//     }
//    }
//
//    requisicaoAjax.open("GET", "HelloWorld.txt", true);
//    requisicaoAjax.setRequestHeader("Content-Type", "application/text");
//    requisicaoAjax.send();

function VerificarCampos() {
    var campos = document.getElementsByTagName("input");
    var radios = document.getElementsByName("radioBut");

    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value == "") {
            alert("Preencha todos os campos.");
            break;
        }
    }

    if (radios.isSelected())


        var senhas = document.getElementsByClassName("senha");

    if (senhas.length != 0)
        ValidarSenha();
}

function ValidarSenha() {
    var senhas = document.getElementsByClassName("senha");

    var i = 0;

    if (senhas[i].value != senhas[i + 1].value) {
        alert("Senhas incompatíveis.");

        senhas[i].value = "";
        senhas[i + 1].value = "";
    }
}
