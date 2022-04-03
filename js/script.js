const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function(){
        console.log("meow!");
    }
}

cat.complain();

// Question 2

const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4
document.className =" subheading";

// Question 5

const paragraphs = document.querySelectorAll("p")
for(let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}
// Question 6

const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow"

// Question 7

function dildo(list) {
    for(let i =0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
dildo(cats)

// Question 8

function creatsCats (cats) {
    let html = "";
    for ( let i = 0; i < creatsCats.length; i++){

        let catAge = "Age unknown";
        if (creatsCats[i].age) {
            catAge = creatsCats[i].age;
        }
        html += `<div class="cats">
                <h5${creatsCats[i].name}</h5>
                <p>${creatsCats[i].age}</p>
                </div>`;
    }

    return html;
}

const newHTML = creatsCats(cats);
const catsContainer =document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;
