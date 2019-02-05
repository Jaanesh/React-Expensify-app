import * as firebase from 'firebase';

/* const config = {
    apiKey: "AIzaSyCaKk8Gm7_1pJo8xfxPJXyO2ZMr0GMj83E",
    authDomain: "react-expensify-e200c.firebaseapp.com",
    databaseURL: "https://react-expensify-e200c.firebaseio.com",
    projectId: "react-expensify-e200c",
    storageBucket: "react-expensify-e200c.appspot.com",
    messagingSenderId: "342949547600"
  }; */

  const config = {
    apiKey:process.env.FIREBASE_API_KEY ,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID ,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID 
  }; 

firebase.initializeApp(config);

let database=firebase.database();
let googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};

/* let arr=[{
    description:'description-1',
    note:'note-1',
    amount:'100',
    createdat:'23/1/2019'
},
{
    description:'description-2',
    note:'note-2',
    amount:'100',
    createdat:'23/1/2019'
},{
    description:'description-3',
    note:'note-3',
    amount:'100',
    createdat:'23/1/2019'
}
]; */

/* arr.forEach(eachExpense=>database.ref('expenses').push(eachExpense));

database.ref('expenses')
        .once('value')
        .then((snapShot)=>{
             let expense=[];
             snapShot.forEach(childSnapShot=>{
                  
                  expense.push({
                      id:childSnapShot.key,
                      ...childSnapShot.val()
                  });
             });

             console.log(expense);
        })
        .catch((e)=>{
            console.log("Exception ="+e);
        }); */

/* database.ref().on('value',(snapShot)=>{
    console.log("New Changes...............");
    let expenses=[];
    snapShot.forEach(childSnapShot=>{
        
         expenses.push({
             id:childSnapShot.key,
             ...childSnapShot.val()
         });
    });

    console.log(expenses);
},(e)=>{
    console.log("exception during subscription");
}); */

/* database.ref('expenses').on('child_removed',(snapShot)=>{
    console.log("child_removed...............");
    console.log(snapShot.key,snapShot.val());
},(e)=>{
    console.log('error in child_removed');
}); */

/* database.ref()
         .once('value')
         .then((snapshot)=>{
              let val=snapshot.val();
              console.log(val);
         })
         .catch((e)=>{
               console.log('error while fetching='+e);
         });

database.ref().on('value',(snapshot)=>{
    let val=snapshot.val();
    console.log('Name='+val.name+" is working in "+val.job.company);
},(e)=>{
    console.log('Error while subscribing changes='+e);
}) */

/* database.ref().set({
    name:'Jaanesh Rajendran',
    age:25,
    stressLevel:6,
    job:{
      title:'software Developer',
      company:'TCS'
    },
    location:{
        city:'Chennai',
        country:'India'
    }
}).then(()=>{
    console.log("data is saved");
}).catch((e)=>{
    console.log("Firebase exception="+e);
});

database.ref('attributes').set({ 
        height:'5.11',
        weight:'100'
}).then(()=>{
    console.log("data is saved");
}).catch((e)=>{
    console.log("Firebase exception="+e);
});

/* database.ref('/isSingle')
        .remove()
        .then(()=>{
            console.log("isSingle is removed");
        }).catch((e)=>{
            console.log("Firebase exception="+e);
        }); 


database.ref().update({
    'job/company':'IAS',
    stressLevel:10
}).then(()=>{
    console.log("updated is saved");
}).catch((e)=>{
    console.log("Firebase exception="+e);
}); */