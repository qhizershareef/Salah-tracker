// Your web app's Firebase configuration
var d= new Date();
let final_date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
console.log (final_date);

  var firebaseConfig = {
/**  Add Your firebase config which is provided by firebase **/
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var messageref= firebase.database().ref(`/${final_date}`);


function addInToFirebase(temparr){
    var newMessageRef= messageref.push();
    newMessageRef.update({
        Date:final_date,
        Fajar:temparr[0],
        Zohar:temparr[1],
        Asar:temparr[2],
        Maghrib:temparr[3],
        Isha:temparr[4]
    });
}
