// var convert=()=>{
//    var number=document.getElementById('data').value;
//    var mile=number*0.5;
//    console.log(mile)
// }
//convert into mile


// var data=document.querySelector('#myform')
// data.addEventListener('submit' ,(runevent)=>{
//    runevent.preventDefault();
//    let formdata=new FormData(data);
//  console.log(formdata.get("name",'password')) 
// })
// var elm=document.createElement('div')

// var cel =document.querySelector('#temp').value;
// const convert=()=>{
//    const fara=cel * 1.8 + 32;
//    elm.innerHTML=`<div>temp in fara: ${fara}</div> `
//    document.body.appendChild(elm)
// }


// var num=document.querySelector('#num').value;
// var sign=document.getElementById('res')
// var res='';
// function guessSign(){
//       if(num>0) res='positive'
//    else if (num<0) res='negatiev'
//    else res='zero'
//    sign.innerHTML=`no is :${res} `
// }

// var Genrate=()=>{
//    var res=document.querySelector('#res')
//    const num=document.querySelector('#num').value
//    let otp=''
//    let count=0;
//    for(let i=1;i<=num;i++){
//       count=0;
//      for(let j=1;j<=i;j++){
//       if(i%j==0){
//          count++;
//      }
//      }
//      if(count===2){
//          otp += i;
//      }
//    }
   
//    res.innerHTML=`OTP IS: ${otp}`
   
// }



// var first=parseInt( document.querySelector('#num').value) 
// var second=parseInt(document.querySelector('#num1').value)
// var res=document.querySelector('#res');

// function maximum(){
//    let maxi=0;
//    if(first>second) maxi=first;
//    else maxi=second
//    res.innerHTML=`maximum element is : ${maxi} `

// }


// var res=document.querySelector('#res');
// function table(){
//    var num=parseInt(document.querySelector('#num1').value)
//    let fact=0;
//    for(let i=1;i<=10;i++){
//       fact = fact + num;
//       let element =document.createElement('div')
      
//       element.innerHTML=`${num} * ${i} = ${fact}`
//       document.body.appendChild(element)
//    }
  
  
// }

// var res=document.querySelector('#res');
// function CheckLastDigit(){
//    var num1=parseInt(document.querySelector('#num').value)
//    var num2=parseInt(document.querySelector('#num1').value)
//    let num1Array=num1.toString().split('').map(Number)
//    let num2Array=num2.toString().split('').map(Number)
//    for(let i=num1Array.length;i>=0;i--){
//       if(num1Array[i]===num2Array[i]){
//          let ans= i
//          res.innerHTML=` yes they are same: ${ans}`
//          break
//       }
//       else{
//          var ans2='no'
//          res.innerHTML=`ans2`
//          break
//       }
//    }
   
// }



// var res=document.querySelector('#res');

// function palindrome(){
   
//    var String=document.querySelector('#num').value
//    var SubString=document.querySelector('#num1').value
//    (String.includes(SubString))? res.innerHTML=`yes`: res.innerHTML=`no`;
  
   
  
// }

// var days=document.querySelector('#days')
// var hours=document.querySelector('#hour')
// var min=document.querySelector('#min')
// var sec=document.querySelector('#second')
// var dates=document.querySelector('.content')
// var newyear=document.querySelector('#newyear')
// function startTime({props}){
//    lastdate=parseInt(props)
//    setInterval(() => {
//       const now=new Date();
//       const targetDate= new Date(lastdate)
//       const diffrence=targetDate -now;
//       if(diffrence<=0){
//          newyear.innerHTML=` HAPPY NEW YEAR EVERYONE `
//          return;
//       }
//       const d = Math.floor(diffrence / (1000 * 60 * 60 * 24));
//       const h = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const m = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
//       const s = Math.floor((diffrence % (1000 * 60)) / 1000);

//       // Update the DOM
//       days.innerHTML = `${d}`;
//       hours.innerHTML = `${h}`;
//       min.innerHTML = `${m}`;
//       sec.innerHTML = `${s}`;
     
//    }, (1000));
   
   
// }




// var container=document.querySelector('#container')
// var button=document.querySelector('#button')
// var info=document.querySelector('#info')

// function changeColor(){
//    let colorcode='#'
//    for(let i=0;i<=5;i++){
//       colorcode += Math.floor(Math.random() *16).toString(16); 
//    }
//    container.style.backgroundColor= colorcode;
//    info.innerHTML=` ${colorcode}`
// }
// const quizData = [{
//    question: "Which of the following is a client site language?",
//    a: "Java",
//    b: "C",
//    c: "Python",
//    d: "JavaScript",
//    correct: "d",
// },
// {
//    question: "What does HTML stand for?",
//    a: "Hypertext Markup Language",
//    b: "Cascading Style Sheet",
//    c: "Jason Object Notation",
//    d: "Helicopters Terminals Motorboats Lamborginis",
//    correct: "a",
// },
// {
//    question: "What year was JavaScript launched?",
//    a: "1996",
//    b: "1995",
//    c: "1994",
//    d: "none of the above",
//    correct: "b",
// },
// {
//    question: "What does CSS stands for?",
//    a: "Hypertext Markup Language",
//    b: "Cascading Style Sheet",
//    c: "Jason Object Notation",
//    d: "Helicopters Terminals Motorboats Lamborginis",
//    correct: "b",
// }
// ];
// var questionBox=document.querySelector('#questionBox')
// var quesoption=document.querySelectorAll('.options')
// let index=0;
// function loadQuestion(){
//    const data=quizData[index];
//    questionBox.innerHTML=data.question
//    quesoption[0].nextElementSibling.innerText=data.a
//    quesoption[1].nextElementSibling.innerText=data.b
//    quesoption[2].nextElementSibling.innerText=data.c
//    quesoption[3].nextElementSibling.innerText=data.d

// }

// loadQuestion()
// let right=0;
// let wrong=0;
// function getAnswer(){
//    quesoption.forEach((element) => {
//       if(element.checked){
//          return input.value
//       }
      
//    });
   
// }

// function NextQuiz(){
//    const data= questionBox[index];
//    const ans=getAnswer();
//    if(ans===data.correct){
//       right++
//    }else{
//       wrong++
//    }

//    index++;
//    loadQuestion()
// }




// var list=document.querySelector('#list')


// function AddTask(){
//    var input=document.querySelector('#inputtask').value
//    var element=document.createElement('li')
//    element.innerHTML=`${input} <button onclick="DeleteTask(this)" > Delete</button>`
//    list.appendChild(element)
//    document.querySelector('#inputtask').value=''
   
// }
// function DeleteTask(button){
//    var task=button.parentElement;
//    task.remove()

// }
// let count=0;
// var num=document.querySelector('#num')
// function addnum(){
   
//    num.innerHTML=`${count++} `
//    console.log(count)
// }
// function subnum(){
//    num.innerHTML=` ${count--}`

// }



// function add(){
//    var num1=parseInt(document.querySelector('#num1').value)
// var num2=parseInt(document.querySelector('#num2').value)
//    let result=parseInt(num1) + parseInt(num2);
//    var res=document.createElement('div')
//    res.innerHTML=`${result}`
//    document.body.appendChild(res)
// }
// function sub(){
//    var num1=parseInt(document.querySelector('#num1').value)
// var num2=parseInt(document.querySelector('#num2').value)
//    let result=num1-num2;
//    var res=document.createElement('div')
//    res.innerHTML=`${result}`
//    document.body.appendChild(res)
   
// }

// function div(){
//    var num1=parseInt(document.querySelector('#num1').value)
// var num2=parseInt(document.querySelector('#num2').value)
//    let result=num1/num2;
//    var res=document.createElement('div')
//    res.innerHTML=`${result}`
//    document.body.appendChild(res)
// }

// function multi(){
//    var num1=parseInt(document.querySelector('#num1').value)
// var num2=parseInt(document.querySelector('#num2').value)
//    let result=parseInt(num1)  * parseInt(num2);
//    var res=document.createElement('div')
//    res.innerHTML=`${result}`
//    document.body.appendChild(res)
// }


// let addToScreen = (value) => {
//    document.querySelector('#result').value += value;
// }

// let calculate = () => {
//    let expression = document.querySelector('#result').value;
//    try {
//       let result = eval(expression); // Use eval for basic calculations (be cautious with user input)
//       document.querySelector('#result').value = result;
//    } catch (error) {
//       document.querySelector('#result').value = "Error"; // Handle any errors
//    }
// }

// let clearScreen = () => {
//    document.querySelector('#result').value = "";
// }



// async function getData() {
//    try{
//       let response=await fetch('https://zenquotes.io/api/quotes',
//          method:'GET',
//          {

//          }

//       )
//       let data=response.json()
//       console.log(data)
//    }catch{
//       console.log('error 404')
//    }
// }



// getData()

// var country=document.querySelector('#country')
// var temp=document.querySelector('#temp')
// var humidity=document.querySelector('#humidity')
// async function weather() {
//    try{
//       let response=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c35c81eed38903e0175a2ebbde5d639c')
//       let data=await response.json()
//       console.log(data)
//       country.innerHTML=`Country: ${data.name}`
//       temp.innerHTML=`gust speed:${data.wind.speed} `
      
//    }
//    catch(error){
//       console.log('error:-->',error)
//    }
   


//    }
// weather()


// const items = [
//    {
//      id: 1,
//      image: 'https://example.com/image1.jpg',
//      name: 'Item 1',
//      price: 10.99
//    },
//    {
//      id: 2,
//      image: 'https://example.com/image2.jpg',
//      name: 'ashish',
//      price: 15.99
//    },
//    {
//      id: 3,
//      image: 'https://example.com/image3.jpg',
//      name: 'bhaskar',
//      price: 20.99
//    },
//    {
//      id: 4,
//      image: 'https://example.com/image4.jpg',
//      name: 'pooran',
//      price: 25.99
//    },
//    {
//      id: 5,
//      image: 'https://example.com/image5.jpg',
//      name: 'pooja',
//      price: 30.99
//    },
//    {
//      id: 6,
//      image: 'https://example.com/image6.jpg',
//      name: 'diksha',
//      price: 35.99
//    },
//    {
//      id: 7,
//      image: 'https://example.com/image7.jpg',
//      name: 'radha',
//      price: 40.99
//    },
//    {
//      id: 8,
//      image: 'https://example.com/image8.jpg',
//      name: 'monnu',
//      price: 45.99
//    },
//    {
//      id: 9,
//      image: 'https://example.com/image9.jpg',
//      name: 'anurag',
//      price: 50.99
//    },
//    {
//      id: 10,
//      image: 'https://example.com/image10.jpg',
//      name: 'anas',
//      price: 55.99
//    }
//  ];
 

//  function showPhoto(items){
//    items.forEach((element) => {
//       let elm=document.createElement('div')
//       elm.style.width='240px'
//       elm.style.height='170px'
//       elm.style.background="#E0FFFF"
//       elm.innerText=` ${element.id} , ${element.image} ,${element.name}`
//       document.body.appendChild(elm)
//    });
//  }
//  showPhoto()
//  if(document.querySelector('#input').value!=''){

//     getphoto()

//  }
//   function getphoto(){
//     items.filter((element) => {
//       if(element.name==document.querySelector('#input').value){
//         showPhoto(element)
//       }
     
//     });
//   }




// function findBMI(){
//   result.innerText=''
//   var weight=document.querySelector('#weight').value
//   var height=document.querySelector('#height').value
//   var result=document.querySelector('#result')
 
//   let BMI=weight/(height)*(height);
//   let message=''
 
//   if (BMI <= 18.5) {
//     message = `Underweight: BMI = ${BMI.toFixed(2)}`;
// } else if (BMI > 18.5 && BMI <= 24.9) {
//     message = `Normal weight: BMI = ${BMI.toFixed(2)}`;
// } else if (BMI > 24.9 && BMI <= 29.9) {
//     message = `Overweight: BMI = ${BMI.toFixed(2)}`;
// } else {
//     message = `Obesity: BMI = ${BMI.toFixed(2)}`;
// }
//   result.innerText=` ${message}`
//   document.querySelector('#weight').value=''
//   document.querySelector('#height').value=''
// }

// let target='2024-12-31'
// let currenttime= new  Date()
// let diffrence=parseInt(target)-parseInt(currenttime);
// let interval; // To store the setInterval reference
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let days = 0;

// // Function to update the display
// function updateDisplay() {
//   document.querySelectorAll('.button')[0].innerText = `Days: ${days}`;
//   document.querySelectorAll('.button')[1].innerText = `Hours: ${hours}`;
//   document.querySelectorAll('.button')[2].innerText = `Minutes: ${minutes}`;
//   document.querySelectorAll('.button')[3].innerText = `Seconds: ${seconds}`;
// }

// // Start the stopwatch
// function startStopwatch() {
//   if (!interval) { // Avoid multiple intervals
//     interval = setInterval(() => {
//       seconds++;
//       if (seconds > 59) {
//         seconds = 0;
//         minutes++;
//         if (minutes > 59) {
//           minutes = 0;
//           hours++;
//           if (hours > 23) {
//             hours = 0;
//             days++;
//           }
//         }
//       }
//       updateDisplay(); // Update the stopwatch display
//     }, 1000);
//   }
// }

// // Pause the stopwatch
// function pauseStopwatch() {
//   clearInterval(interval); // Stop the interval
//   interval = null;
// }

// // Reset the stopwatch
// function resetStopwatch() {
//   clearInterval(interval); // Stop the interval
//   interval = null;
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   days = 0;
//   updateDisplay(); // Reset the display
// }




// var heading=document.querySelector('#heading').value
// var content=document.querySelector('#content').value
// document.querySelector('#submit').addEventListener('click', postblog)
// let ArrayOfContent=[

// ]
// function postblog(event){
//   event.preventDefault();
//   let obj=new Object();
//   obj.heading=heading;
//   obj.content=content;
//   ArrayOfContent.push(obj)
//   document.querySelector('#heading').value=''
//   document.querySelector('#content').value=''

// }

// console.log(ArrayOfContent)




// const recipes = [
//   {
//     id: 1,
//     name: "Spaghetti Bolognese",
//     ingredients: [
//       "200g spaghetti",
//       "1 onion, chopped",
//       "2 garlic cloves, minced",
//       "400g ground beef",
//       "400g canned tomatoes",
//       "2 tbsp olive oil",
//       "Salt and pepper to taste"
//     ],
//     instructions: "Cook spaghetti according to package instructions. In a pan, sauté onion and garlic in olive oil. Add ground beef and cook until browned. Stir in canned tomatoes and simmer for 15 minutes. Season with salt and pepper. Serve sauce over spaghetti."
//   },
//   {
//     id: 2,
//     name: "Chicken Curry",
//     ingredients: [
//       "500g chicken breast, cubed",
//       "1 onion, chopped",
//       "2 garlic cloves, minced",
//       "1 tbsp ginger, grated",
//       "2 tbsp curry powder",
//       "1 can coconut milk",
//       "1 tbsp vegetable oil",
//       "Salt to taste"
//     ],
//     instructions: "Heat oil in a pan, sauté onion, garlic, and ginger. Add chicken cubes and cook until browned. Stir in curry powder and cook for 1 minute. Pour in coconut milk, bring to a boil, and simmer for 20 minutes. Season with salt."
//   },
//   {
//     id: 3,
//     name: "Vegetable Stir Fry",
//     ingredients: [
//       "1 cup broccoli florets",
//       "1 bell pepper, sliced",
//       "1 carrot, julienned",
//       "2 tbsp soy sauce",
//       "1 tbsp sesame oil",
//       "1 tbsp ginger, grated",
//       "2 garlic cloves, minced",
//       "1 tbsp cornstarch"
//     ],
//     instructions: "Heat sesame oil in a pan. Add garlic and ginger, cook for 1 minute. Add vegetables and stir-fry for 5-7 minutes. Mix soy sauce with cornstarch and pour over vegetables. Stir until sauce thickens."
//   },
//   {
//     id: 4,
//     name: "Pancakes",
//     ingredients: [
//       "1 cup flour",
//       "1 tbsp sugar",
//       "1 tsp baking powder",
//       "1 egg",
//       "1 cup milk",
//       "2 tbsp butter, melted",
//       "1 tsp vanilla extract"
//     ],
//     instructions: "Mix all dry ingredients in a bowl. In another bowl, whisk egg, milk, butter, and vanilla. Combine both mixtures and stir until smooth. Heat a pan and cook pancakes until golden brown on both sides."
//   },
//   {
//     id: 5,
//     name: "Caesar Salad",
//     ingredients: [
//       "4 cups romaine lettuce, chopped",
//       "1/2 cup Caesar dressing",
//       "1/4 cup grated Parmesan cheese",
//       "Croutons",
//       "1 boiled egg (optional)"
//     ],
//     instructions: "Toss lettuce with Caesar dressing. Top with Parmesan cheese and croutons. Garnish with a boiled egg if desired."
//   },
//   {
//     id: 6,
//     name: "Tacos",
//     ingredients: [
//       "500g ground beef",
//       "1 onion, chopped",
//       "2 garlic cloves, minced",
//       "1 tbsp taco seasoning",
//       "Taco shells",
//       "Lettuce, shredded",
//       "Cheese, shredded",
//       "Tomato, diced"
//     ],
//     instructions: "Cook ground beef with onion and garlic. Add taco seasoning and cook until beef is browned. Serve beef in taco shells and top with lettuce, cheese, and tomatoes."
//   },
//   {
//     id: 7,
//     name: "Chicken Salad",
//     ingredients: [
//       "2 chicken breasts, grilled and chopped",
//       "2 cups mixed greens",
//       "1/2 cucumber, sliced",
//       "1/2 avocado, sliced",
//       "2 tbsp olive oil",
//       "1 tbsp lemon juice",
//       "Salt and pepper to taste"
//     ],
//     instructions: "Toss grilled chicken with greens, cucumber, and avocado. Drizzle with olive oil and lemon juice. Season with salt and pepper."
//   },
//   {
//     id: 8,
//     name: "Chocolate Cake",
//     ingredients: [
//       "1 1/2 cups flour",
//       "1 cup sugar",
//       "1/2 cup cocoa powder",
//       "1 tsp baking powder",
//       "1 tsp baking soda",
//       "1/2 cup milk",
//       "1/2 cup vegetable oil",
//       "2 eggs",
//       "1 tsp vanilla extract"
//     ],
//     instructions: "Preheat oven to 350°F (175°C). Mix all dry ingredients together. Add wet ingredients and stir until smooth. Pour into greased cake pan and bake for 30-35 minutes."
//   },
//   {
//     id: 9,
//     name: "Grilled Cheese Sandwich",
//     ingredients: [
//       "2 slices bread",
//       "2 slices cheese",
//       "Butter"
//     ],
//     instructions: "Butter one side of each bread slice. Place cheese between slices, buttered side out. Grill in a pan until both sides are golden brown."
//   },
//   {
//     id: 10,
//     name: "Tomato Soup",
//     ingredients: [
//       "4 tomatoes, chopped",
//       "1 onion, chopped",
//       "2 garlic cloves, minced",
//       "2 tbsp olive oil",
//       "2 cups vegetable broth",
//       "Salt and pepper to taste"
//     ],
//     instructions: "Sauté onion and garlic in olive oil. Add tomatoes and cook until soft. Add vegetable broth and simmer for 20 minutes. Blend until smooth and season with salt and pepper."
//   },
//   {
//     id: 11,
//     name: "Margarita Pizza",
//     ingredients: [
//       "1 pizza dough",
//       "1/2 cup tomato sauce",
//       "1 cup mozzarella cheese",
//       "Fresh basil leaves",
//       "Olive oil"
//     ],
//     instructions: "Roll out the pizza dough. Spread tomato sauce over dough, sprinkle with mozzarella cheese, and top with basil. Drizzle with olive oil. Bake in the oven at 475°F (245°C) for 10-12 minutes."
//   },
//   {
//     id: 12,
//     name: "Veggie Burger",
//     ingredients: [
//       "1 can black beans, drained",
//       "1/2 cup breadcrumbs",
//       "1/4 cup grated carrot",
//       "1/4 cup chopped onion",
//       "1 tbsp soy sauce",
//       "Burger buns",
//       "Lettuce, tomato, and pickles"
//     ],
//     instructions: "Mash black beans in a bowl and mix with breadcrumbs, carrot, onion, and soy sauce. Form into patties and pan-fry until golden brown. Serve on buns with lettuce, tomato, and pickles."
//   },
//   {
//     id: 13,
//     name: "Beef Stir Fry",
//     ingredients: [
//       "500g beef, thinly sliced",
//       "1 bell pepper, sliced",
//       "1 onion, sliced",
//       "2 garlic cloves, minced",
//       "2 tbsp soy sauce",
//       "1 tbsp sesame oil",
//       "1 tbsp cornstarch"
//     ],
//     instructions: "Cook beef in sesame oil until browned. Add vegetables and stir-fry for 5 minutes. Mix soy sauce with cornstarch and pour over beef and vegetables. Stir until sauce thickens."
//   },
//   {
//     id: 14,
//     name: "Pasta Primavera",
//     ingredients: [
//       "200g pasta",
//       "1 cup cherry tomatoes, halved",
//       "1 cup zucchini, sliced",
//       "1/2 cup bell pepper, sliced",
//       "2 tbsp olive oil",
//       "1 garlic clove, minced",
//       "1/4 cup Parmesan cheese"
//     ],
//     instructions: "Cook pasta according to package instructions. Sauté vegetables in olive oil and garlic. Combine pasta with sautéed vegetables and top with Parmesan cheese."
//   },
//   {
//     id: 15,
//     name: "Fruit Salad",
//     ingredients: [
//       "1 apple, chopped",
//       "1 banana, sliced",
//       "1 orange, peeled and sliced",
//       "1/2 cup grapes, halved",
//       "1/2 cup strawberries, sliced"
//     ],
//     instructions: "Mix all fruits in a bowl and toss gently. Serve chilled."
//   }
// ];

// let nameofRecipe=document.querySelector('#nameofRecipe').value
// let answers=document.querySelector('#answers')
// function SearchRecipe(){
//   recipes.filter((element)=>{
//       if(element.name==nameofRecipe){
//         let ans=document.createElement('div')
//         let ans2=document.createElement('div')
//         let ans3=document.createElement('div')

//         ans.innerText=`Recipe Name:--> ${element.name} `
//         ans2.innerText=`Ingredients:-->${recipes.ingredients}`
//         ans3.innerText=`Instruction to cook:-->${recipes.instructions}`
//         answers.appendChild(ans)
//         answers.appendChild(ans2)
//         answers.appendChild(ans3)
//       }
//   })
//   answers.appendChild(heading)
// }



const products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop for work and gaming.",
    price: 899.99,
    image: "https://example.com/laptop.jpg"
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    price: 699.99,
    image: "https://example.com/smartphone.jpg"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones for ultimate sound quality.",
    price: 199.99,
    image: "https://example.com/headphones.jpg"
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this smart watch.",
    price: 129.99,
    image: "https://example.com/smartwatch.jpg"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with high-quality sound.",
    price: 49.99,
    image: "https://example.com/speaker.jpg"
  }
];

// Function to render the products on the webpage
function renderProducts() {
  const productsContainer = document.getElementById('product-list');

  // Loop through the products and create HTML elements
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productDiv.appendChild(productImage);
    
    const productName = document.createElement('h3');
    productName.innerText = product.name;
    productDiv.appendChild(productName);
    
    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;
    productDiv.appendChild(productDescription);
    
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
    productDiv.appendChild(productPrice);
    
    const addToCartButton = document.createElement('button');
    addToCartButton.innerText = "Add to Cart";
    productDiv.appendChild(addToCartButton);

    // Append the product div to the container
    productsContainer.appendChild(productDiv);
  });
}


// Call the function to render the products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);











 






































