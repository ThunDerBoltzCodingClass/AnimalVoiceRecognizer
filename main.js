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

    else if(results[0].label=="Bark"){
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        document.getElementById("dog").innerHTML= results[0].label;
        document.getElementById("dog").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("dog").innerHTML= results[0].label;
        document.getElementById("dog").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("dog").innerHTML= results[0].label;
        document.getElementById("dog").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("dog").innerHTML= results[0].label;
        document.getElementById("dog").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img1=document.getElementById("");

        if(results[0].label=="Bark"){
            img1.src="dog bark.jpg";
        }

        else if(results[0].label=="Meow"){
            img1.src="cat meowing.jpg";
        }

        else if(results[0].label=="Moo"){
            img1.src="cow mooing.png";
        }

        else if(results[0].label=="Roar"){
            img1.src="lion roar.jpg";
        }
        
    }
}