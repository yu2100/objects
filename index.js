

 //1. Using the constructor method, ceeate an InstagramPost() constructor function that takes the properties below as arguments.
 //   .Handle of author
 //   .content
 //   .an image link posted by the author of the post
 //   .number of views
 //   .number of likes

function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

const instagramPost1  = new instagramPost('ake.precious', 'Food', 'https://bit.ly/3xRt3MD', 126, 74,);
console.log(instagramPost1);

 //2. Create 2 Instagram post objects from the constructor function you created above

const instagramPost2  = new instagramPost('tiwasavage', 'Music','https://bit.ly/3Sv8XRR', 28435948, 409844);
const instagramPost3 = new instagramPost('dhassiecollections','https://bit.ly/3SqFwjP', 'Fashion', 50, 12);

console.log(instagramPost2);
console.log(instagramPost3);


 //3a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function 

//FACTORY METHOD
function createPerson(name, age, location){
    return{
        name : name,
        age : age,
        location : location,
    }
}

const createPerson1  = createPerson('Musa', '19', 'Lekki, Lagos State');
console.log(createPerson1);


 //3b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Musa's Jamb scores. Add the object as a property to Musa object you created above in (a) above

//  //FACTORY FUNCTION
function createJambScores(eng, govt, lit, crk){
    return{
        eng : eng,
        govt : govt,
        lit : lit,
        crk : crk,
    }
}

const musaJambScores  = createJambScores('60', '29', '73', '84');
console.log(musaJambScores);

createPerson1.createJambScores = musaJambScores; 
console.log(createPerson1);



//4. What are different ways you can clone an object? Give examples for each of them
//Different ways to clone an Object
//Option 1 - Using Object.assign()

const firstSchool = {
    author: 'Federal Government College',
    location: 'Lagos',
    yearStarted: 2002,
}

const secondSchool = Object.assign({},firstSchool)
console.log(firstSchool);
console.log(secondSchool);  

secondSchool.location = 'Abuja ';
console.log('After change location of second school');
console.log(firstSchool);
console.log(secondSchool);

//Option 2 - Using spread syntax 
const thirdSchool = {...firstSchool};
thirdSchool.location = 'Delta'; 
console.log({firstSchool});
console.log({thirdSchool});

//Option 3 - Using the method JSON.parse()

const fourthSchool = JSON.parse
fourthSchool.location = 'Cross-river';
console.log({firstSchool});
console.log({fourthSchool});

//5. As Nigeria goes to polls, here is an object representing some of the Presidential Candidates:
// const presidentialCandidates = {
//     AAC: "Omoyele Sowore",
//     ACCORD: " Christopher Imumolen",
//     APC: "Bola Ahmed Tinubu",
//     LP: "Peter Obi",
//     NNPP: "Rabiu Kwankwaso",
//     PDP: "Atiku Abubakar",
// };
// Using any of the enumeration methods taught in class (for in...in or for...of), log out each of the presidential candidates in this format:'Omoyele Sowore is the presidential candidate of AAC'

const presidentialCandidates = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar",
};

//enumeration method - For..in
for (const value in presidentialCandidates) {
    console.log(presidentialCandidates[value]+ " is the presidential candidate of " +value)
 
}

// //enumeration method - For..of
// for (let [value, candidate] of Object.entries(presidentialCandidates)) {
//     console.log(candidate+ " is the presidential candidate of " +value)
// }