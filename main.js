//https://teachablemachine.withgoogle.com/models/qmEfz-r5v/model.json

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qmEfz-r5v/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    console.log("gotResult");
    if(error){
        console.error(error);
    }

    else if(results[0].label!=""){
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        img1=document.getElementById("img_display");

        if(results[0].label=="Background Noise"){
            img1.src="ear.png";
        }

        else if(results[0].label=="Bark"){
            document.getElementById("dog").innerHTML= results[0].label;
            document.getElementById("dog").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    
            img1.src="dog bark.jpg";
        }

        else if(results[0].label=="Meow"){
            document.getElementById("cat").innerHTML= results[0].label;
            document.getElementById("cat").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    
            img1.src="cat meowing.jpg";
        }

        else if(results[0].label=="Moo"){
            document.getElementById("cow").innerHTML= results[0].label;
            document.getElementById("cow").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    
            img1.src="cow mooing.png";
        }

        else if(results[0].label=="Roar"){
            document.getElementById("lion").innerHTML= results[0].label;
            document.getElementById("lion").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    
            img1.src="lion roar.jpg";
        }
        
    }
}