//ADD YOUR FIREBASE LINKS HERE
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
    //firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    //document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="Kwitter_page.html"
    }
/*function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       */
      //Start code

      //End code

      //});});}
/*getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
*/
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");window.location="index.html";
}


function preload(){
      img=loadImage("Bedroom.jpg");
  }
  
        
  function setup(){
      canvas=createCanvas(640,420);
      canvas.center();
      objectDetector=ml5.objectDetector('cocossd', modelloaded);
      document.getElementById("status").innerHTML="status: detecting objects";
  }
  
  function modelloaded(){
      console.log("cocossd has loaded");
      status1=true;
      objectDetector.detect(img, gotresults);
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
    if(status1 !=""){
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
      fill("orange");
      text("Bed",45, 75);
      noFill();
      stroke("orange");
      rect( 30, 60, 420, 350);
    
}}