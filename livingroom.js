//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA9JuGP39MnoBz39_gOks97DazUfRagHkg",
      authDomain: "project-c-97.firebaseapp.com",
      databaseURL: "https://project-c-97-default-rtdb.firebaseio.com",
      projectId: "project-c-97",
      storageBucket: "project-c-97.appspot.com",
      messagingSenderId: "820726881208",
      appId: "1:820726881208:web:1f3fa4ba0562931d380d4d",
      measurementId: "G-PPE9D7LVHP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id) {
      console.log("Clicked On Like Button- " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_like
      });
}

function logout() {
       localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
         window.location.replace("index.html");
       }


       img3="";
       status3="";
       
       function preload(){
           img=loadImage("livingroom.jfif");
       }
       
       function setup(){
           canvas=createCanvas(640,420);
           canvas.center();
           objectDetector=ml5.objectDetector('cocossd', modelloaded);
           document.getElementById("status").innerHTML="status: detecting objects";
       }
       
       function modelloaded(){
           console.log("cocossd has loaded");
           status3=true;
           objectDetector.detect(img3, gotresults);
       }
       
       function gotresults(error, results)
       {
           if(error){
               console.log(error);
           }
           console.log(results);
       }
       function draw(){
           image(img, 0, 0, 640, 420);
           function draw(){
            image(img, 0, 0, 640, 420);
            function draw(){
          image(img, 0, 0, 640, 420);
          if(status3 !=""){
          for(i=0;i < objects.length;i++){
              document.getElementById("status").innerHTML="Status : Object Detected";
              r=random(255);
              g=random(255);
              b=random(255);
      
              fill(r,g,b);
              percent=floor(objects[i].confidence*100);
              text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
              noFill();
              stroke(r,g,b);
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          } 
          }
            /*fill("orange");
            text("Bed",45, 75);
            noFill();
            stroke("orange");
            rect( 30, 60, 420, 350);
          */
      }}
         
       }
       
       
       