function startClassification() { navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier(' teachablemachine.withgoogle.com/models/Ynbh6xvTc/model.json', modelReady);
 }
 function modelReady(){ 
     classifier.classify( gotResults);
 }
 function gotResults(error,results){
     if(error){
         console.error(error);
         
     }else(){
         console.log(results);
         random_number_r = math.floor(math.rendom() * 255)+1;
         random_number_g = math.floor(math.rendom() * 255)+1;
         random_number_b = math.floor(math.rendom() * 255)+1;

         document.getElementById("result_label").innerHTML = "i can hear - "+ results[0].label;
                  document.getElementById("result_confidence").innerHTML = "Accuracy-"+(results[0].confidance*100).toFixed(2)+"%";
                  document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
                   document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
                   img = document.getElementById('alien-1');
                   img1 = document.getElementById('alien-2');
                   img = document.getElementById('alien-3');
                   img = document.getElementById('alien-4');


     }



 }