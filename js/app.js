const fruits =[
    {name:"pineapple"},
    {name:"mango"},
    {name:"papya"}
]
const election =['razzak','alam','jayed','jayed','jayed','nipon','jayed'];
//eta theke jayed kotobar jevabe ber korbo


const election2 ={
    razzak:1,
    alomgir:1,
    jashim:1,
    jayed:4
}
console.log(election2.jayed);



const db={

}

const addToDb=(item)=>{
    //3 ways to add a propperty to a object
    // db.alom=1;system 1
    // db['alom']=1; second system
    // db[item]=1;
    let storedTraker=localStorage.getItem('cheacka-trekar');
    if(storedTraker){
        db=JSON.parse( storedTraker);
    }


    if(item in db){
        db[item]=db[item]+1;
        //bam pasher db[item ]hocce man set korar jonno r dan pasher db[item ]man koto ase seta pawar jonno ebong tar sathe 1 jog korar jonno

    }
    else{
        db[item]=1;
        //tem na thakle item er man 1 bosay dibo 
    }
    // console.log(item);
    localStorage.setItem('cheacka-trekar',JSON.stringify(db));

}

//local storage e data rakhte gele amake 3 ta kaj korte hobe segula holo
//1 : local storage.get item 
//2: local storage .set item 
//3:set item dite hole 2 ta jinish dite hobe ekta holo key opor ta hoilo value 

// local ba session storage ke sorasori db te rakha jay na 
//sekhetre amader jsson . stringify e convert korte hobe jodio dekhte object ba array er moto dekhabe 




// local storage theke jokhon amara abar data anbo tokhon 
// amader ke jshon.parse kore nite hobe karon data gula kintu amader string hishebe thakbe tai 
