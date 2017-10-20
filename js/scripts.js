function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

function cargarData(){
  document.getElementById('depart-1').setAttribute('xlink:title', "Ahuachapán \n"+
  "Población:118,164 \n"+
  "Extencion Territorial: 244.8 km² \n"+
  "Fiestas Patronales: 05 al 14 de febrero, en honor del Dulce Nombre de Jesús.");

  document.getElementById('depart-2').setAttribute('xlink:title', "Cabañas \n"+
  "Población:41,216 \n"+
  "Extencion Territorial: 306.3 km² \n"+
  "Fiestas Patronales: Del 25 de noviembre al 5 de diciembre, en honor de Santa Bárbara.");

  document.getElementById('depart-3').setAttribute('xlink:title', "Chalatenango \n"+
  "Población:7,903 \n"+
  "Superficie:257.7 km² \n"+
  "Fiestas Patronales: Del 17 al 19 de marzo, en honor a San José y la Virgen María");

  document.getElementById('depart-4').setAttribute('xlink:title', "Cuscatlán \n"+
  "población: 216.446 \n"+
  "Superficie:756.2 km² \n"+
  "Fiestas Patronales: Durante la 3era y 4a semana de enero, en honor San Sebastián Mártir y a la Inmaculada Virgen de Concepción");

  document.getElementById('depart-5').setAttribute('xlink:title', "La Libertad \n"+
  "población: 216.446 \n"+
  "Superficie:756.2 km² \n"+
  "Fiestas Patronales: Durante la 3era y 4a semana de enero, en honor San Sebastián Mártir y a la Inmaculada Virgen de Concepción");

  document.getElementById('depart-6').setAttribute('xlink:title', "Morazán \n"+
  "Población: Puesto 12. \n"+
  "Superficie: 1,447 km² \n"+
  "Fiestas Patronales: Del 1 al 4 de octubre, en honor de San Francisco de Asís.");

  document.getElementById('depart-7').setAttribute('xlink:title', "La Paz \n"+
  "Población: Puesto 12. \n"+
  "Superficie: 1,447 km² \n"+
  "Fiestas Patronales: Del 1 al 4 de octubre, en honor de San Francisco de Asís.");
  
  document.getElementById('depart-8').setAttribute('xlink:title', "Santa Ana \n"+
  "Población: 264 091. \n"+
  "Superficie: 2,023 km² \n"+
  "Fiestas Patronales: Cada año son celebradas del 17 al 26 de julio, en la ciudad de Santa Ana");

  document.getElementById('depart-9').setAttribute('xlink:title', "San Miguel \n"+
  "Población: 264 091. \n"+
  "Superficie: 2,023 km² \n"+
  "Fiestas Patronales: Cada año son celebradas del 17 al 26 de julio, en la ciudad de Santa Ana");

  document.getElementById('depart-10').setAttribute('xlink:title', "Sonsonate \n"+
  "Población: 72 158 \n" +
  "Superficie: 1,226 km² \n"+
  "Fiestas Patronales: Del 25 de enero al 2 de febrero, en honor a la Virgen de Candelaria.");

  document.getElementById('depart-11').setAttribute('xlink:title', "San Salvador \n"+
  "Población: 2 557 761 \n" +
  "Superficie: 886.2 km² \n"+
  "Fiestas Patronales: Del 5 y 6 de agosto");

  document.getElementById('depart-12').setAttribute('xlink:title', "San Vicente \n"+
  "Población: 155 265 \n" +
  "Superficie: 1,184 km² \n"+
  "Fiestas Patronales:Del 12 al 31 de diciembre en honor a San Vicente Abad.");

  document.getElementById('depart-13').setAttribute('xlink:title', "La Unión \n"+
  "Población: 34,045 \n" +
  "Superficie: 2,074 km² \n"+
  "Fiestas Patronales: Del 1 al 15 de diciembre en honor a La Imaculada Concepción de María.");

  document.getElementById('depart-14').setAttribute('xlink:title', "Usulután \n"+
  "Población: 73,064 \n" +
  "Superficie: 2,130 km² \n"+
  "Fiestas Patronales: Del 1 al 15 de diciembre en honor a La Imaculada Concepción de María.");    
}

//llamada de función inicial
ready(cargarData);


