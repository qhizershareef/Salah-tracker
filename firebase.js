// Your web app's Firebase configuration
var d= new Date();
let final_date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
console.log (final_date);

  var firebaseConfig = {
    apiKey: "AIzaSyBNmtWamIMlz2vsHkH_J5oa1HLv05SV6_Y",
    authDomain: "salah-count.firebaseapp.com",
    databaseURL: "https://salah-count.firebaseio.com",
    projectId: "salah-count",
    storageBucket: "salah-count.appspot.com",
    messagingSenderId: "851272485923",
    appId: "1:851272485923:web:8175f2f8567dfc02d33596",
    measurementId: "G-N5QNLK45XJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var messageref= firebase.database().ref(`/${final_date}`);


function addInToFirebase(temparr){
    //var newMessageRef= messageref.child(final_date).push();
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
