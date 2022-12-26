 const firebaseConfig = {
    apiKey: "AIzaSyBu63JEZwmJNTpYhnRkbKC6CKEiVLjWvA8",
    authDomain: "udefindme.firebaseapp.com",
    projectId: "udefindme",
    storageBucket: "udefindme.appspot.com",
    messagingSenderId: "655893083515",
    appId: "1:655893083515:web:a26cb31db4ccdf742239de",
    measurementId: "G-69K5FBQHQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email sigin");
    var password  = document.getElementById("password signin");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("SignIn Succesfully")
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
  