function extendBar(button) {

    document.getElementById("page-names-column").style.marginLeft = 0;
    //document.getElementById("main_content").style.marginLeft = "-17%";

    var buttonID = button.id;
    console.log(buttonID)

    if (buttonID == "home-button"){
        console.log("home")
        document.getElementById("home-bar").style.visibility = "visible";

    }

    if (buttonID == "green-button"){
        console.log("green")
        document.getElementById("green-bar").style.visibility = "visible";

    }

    if (buttonID == "space-button"){
        document.getElementById("space-bar").style.visibility = "visible";

    }

    if (buttonID == "healthcare-button"){
        document.getElementById("healthcare-bar").style.visibility = "visible";

    }

    if (buttonID == "engineering-button"){
        document.getElementById("engineering-bar").style.visibility = "visible";

    }

    if (buttonID == "weather-button"){
        document.getElementById("weather-bar").style.visibility = "visible";

    }

    if (buttonID == "maths-button"){
        document.getElementById("maths-bar").style.visibility = "visible";

    }
}

function retractBar(button){
    console.log("retract")
    document.getElementById("page-names-column").style.marginLeft = "-17%";
    //document.getElementById("main_content").style.marginLeft = "0%";

    var buttonID = button.id;

    if (buttonID == "home-button"){
        document.getElementById("home-bar").style.visibility = "hidden";

    }

    if (buttonID == "green-button"){
        document.getElementById("green-bar").style.visibility = "hidden";

    }

    if (buttonID == "space-button"){
        document.getElementById("space-bar").style.visibility = "hidden";

    }

    if (buttonID == "healthcare-button"){
        document.getElementById("healthcare-bar").style.visibility = "hidden";

    }

    if (buttonID == "engineering-button"){
        document.getElementById("engineering-bar").style.visibility = "hidden";

    }

    if (buttonID == "weather-button"){
        document.getElementById("weather-bar").style.visibility = "hidden";

    }

    if (buttonID == "maths-button"){
        document.getElementById("maths-bar").style.visibility = "hidden";

    }
}