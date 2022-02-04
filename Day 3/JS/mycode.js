//define a new js reusable function
function myFirstFunction(){
    alert('welcome to js'); 
    console.log('hey there');
}

function onAync(){
    console.log("at start of code");
    //JS will not wait here, it will run the below fux as Sync
    setTimeout(function(){
        console.log("at end of code");
    },10000);
    console.log("i am leaving the function w/o blocking user");
}

function onLogin(){
    //Step 1: access the object of my input fields
    //var oUser = ;
    var oPassword = document.getElementById("password");
    //Step 2: get the value for those fields
    //chaining
    var sUserId = document.getElementById("username").value;
    var sPassword = oPassword.value;
    //Step 3: Comparision logic IF
    if(sUserId === sPassword){
        //Step 4: If same then change
        document.write("<h3 style='color:green'>Login Success</h3>");
    }else{
        //Step 5: Else error
        alert("dude Try later your luck :)")
    }
}

function onMagicJQ(){
    $(".spiderman").css("background-color","brown").css("color","yellow");
}

function hide(){
    var flag = true;
    $(".avengers").fadeOut(5000,function(){
        if(flag === true){
            alert("the effect is now over");
            flag = false;
        }        
    });
    //$(".avengers").hide();
}

function dance(){
    $("input").animate({
        width: "20px",
        height: "35px"
    });
    $("input").animate({
        width: "120px",
        height: "25px"
    }, function(){
        dance();
    });
}

function show(){
    $(".avengers").fadeIn(5000);
    //$(".avengers").show();
}

function onMagic(){

    //Step 1: get the object of all the title area - array
    var aElements = document.getElementsByClassName("spiderman");
    //Step 2: loop over the array and process each element one by one
    for(var i=0;i<aElements.length;i++){
        //Step 3: Change the css of each element within the loop
        var oTitle = aElements[i];
        if(oTitle.innerText === "What is HTML?"){
            debugger;
        }
        oTitle.style.backgroundColor = "black";
        oTitle.style.color = "white";
    }                
}

function Call(){
    $.ajax("https://api.covid19api.com/summary",{
        success: (data) => {
            console.log(data);
            var aCountries = data.Countries;
            for (let i = 0; i < aCountries.length; i++) {
                const element = aCountries[i];
                var text = element.Date + "  " + element.Country + "  " + element.NewConfirmed;
                onAddNew(text);
            }
        },
        error: function(){
            alert("sever error came");
        }
    });    
}

function onAddNew(xText){
    //Step 1: Get the object of our target element
    var oTarget = document.getElementById("exodus");
    //Step 2: Create new html element using dom object
    var oNewElement = document.createElement("h4");
    //Step 3: Create new text node
    //var oTextNode = document.createTextNode(document.getElementById("username").value);
    var oTextNode = document.createTextNode(xText);
    //Step 4: Append text node as child of new element
    oNewElement.appendChild(oTextNode);
    //Step 5: Append New Element as Child of HTML target
    oTarget.appendChild(oNewElement);

}