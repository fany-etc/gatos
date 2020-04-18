function showMyMap(option) {
    // var mapProp= {
    //   center:new google.maps.LatLng(51.508742,-0.120850),
    //   zoom:5,
    // };
    // var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
console.log(option)

    // mapsCity[option];

    // mapsCity[0] = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d79847.50056319387!2d-99.19426217287358!3d19.341787723853137!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%20cerca%20de%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1587087866105!5m2!1ses-419!2smx";
    //  //ciudad de Mèxico

    //  mapsCity[1] = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d119501.17655581703!2d-100.48025843430412!3d20.612066387984342!3m2!1i1024!2i768!4f13.1!2m1!1sveterinaria!5e0!3m2!1ses!2smx!4v1587090058800!5m2!1ses!2smx"; //queretaro

    //  mapsCity[2] = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d119452.13214062169!2d-103.40545403424899!3d20.67449591788428!3m2!1i1024!2i768!4f13.1!2m1!1sveterinario!5e0!3m2!1ses-419!2smx!4v1587090140237!5m2!1ses-419!2smx"; // guadalajara

    //  mapsCity[3] = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d230186.27506831233!2d-100.44318331747426!3d25.64938935236423!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias!5e0!3m2!1ses-419!2smx!4v1587090203148!5m2!1ses-419!2smx"; //monterrey

    
    let mapFrame = document.getElementById("myMap");
    let mapTitle = document.getElementById("mapTitle");

    let cityName = mapsCity[option].name;
    let cityMap = mapsCity[option].map;

console.log(cityName);
console.log(cityMap);


    //mapFrame.innerHTML= "<iframe src=\"" + mapsCity∫[option] + "\" width=\"470\" height=\"420\" frameborder=\"0\" style=\"border:0;\ allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";
    mapTitle.innerHTML=cityName;
    mapFrame.innerHTML= "<iframe src=\"" + cityMap + "\" width=\"470\" height=\"420\" frameborder=\"0\" style=\"border:0;\ allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";

    }


function ShowText(option){

    console.log(option)
    let infoName = infoCares[option].name;
    let infoText = infoCares[option].text;

    let listTitle = document.getElementById("listTitle");
    let listText = document.getElementById("listText");

    listTitle.innerHTML = infoName;
    listText.innerHTML = infoText;
}




