const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");
const ul_6 = document.querySelector(".option6");
const ul_7 = document.querySelector(".option7");
const ul_8 = document.querySelector(".option8");
const ul_9 = document.querySelector(".option9");
const ul_10 = document.querySelector(".option10");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3"); 
const q4 = document.querySelector(".q4"); 
const q5 = document.querySelector(".q5"); 
const q6 = document.querySelector(".q6"); 
const q7 = document.querySelector(".q7"); 
const q8 = document.querySelector(".q8"); 
const q9 = document.querySelector(".q9");
const q10 = document.querySelector(".q10");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");


//first question 

ul_1.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "block";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('Er du klar til at starte quizzen?')
    console.log(event.target)
});

//second question

ul_2.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "block";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('hvad skal man altid huske 2 gange om dagen?')
    console.log(event.target)
});

ul_3.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "block";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('videre')
    console.log(event.target)
});

ul_4.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "block";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('Hvor længe skal man børste tænder?')
    console.log(event.target)
});
ul_5.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "block";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('videre')
    console.log(event.target)
});

ul_6.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "block";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('Hvad gør bakterierne ved dine tænder?')
    console.log(event.target)
});

ul_7.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "block";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('videre')
    console.log(event.target)
});


ul_8.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "block";
    q10.style.display = "none";
    end.style.display = "none";
    console.log('HVilken teknik er bedste?')
    console.log(event.target)
});

ul_9.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "block";
    end.style.display = "none";
    console.log('Videre')
    console.log(event.target)
});

ul_10.addEventListener("click", function () {
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    q6.style.display = "none";
    q7.style.display = "none";
    q8.style.display = "none";
    q9.style.display = "none";
    q10.style.display = "none";
    end.style.display = "block";
    console.log('Hvad gør du når du har for meget tandpasta i munden?')
    console.log(event.target)
});

    end.addEventListener("click", function (block) {
         q1.style.display = "none";
         q2.style.display = "none";
         q3.style.display = "none";
         q4.style.display = "none";
         q5.style.display = "none";
         q6.style.display = "none";
         q7.style.display = "none";
         q8.style.display = "none";
         q9.style.display = "none";
         q10.style.display = "none";
         end.style.display = "block";
         console.log('hjem')
         console.log(event.target)
     });
