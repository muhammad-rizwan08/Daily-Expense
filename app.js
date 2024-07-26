// const search = () => {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeitems = document.getElementById("product-list")
//     const product = document.querySelectorAll(".pro")
//     const pname = document.getElementsByTagName("h5")

//     for (let i= 0; i< pname.length; i++) {
//         let match = product[i].getElementsByTagName('h5')[0];

//         if (match) {
//                let textvalue = match.textContent || match.innerHTML

//                if (textvalue.toUpperCase().indexOf(searchbox) >-1) {
//                    product[i].style.display ="";
//                } else {
//                 product[i].style.display = "none";
//                }
//         }
        
//     }
// }


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}













// document.addEventListener("DOMContentLoaded", function() {
//     const textElement = document.getElementById("text");
//     const textContent = "Track";
  
//     function typeText() {
//       textElement.textContent = "";
//       let i = 0;
//       const typingInterval = setInterval(function() {
//         textElement.textContent += textContent[i];
//         i++;
//         if (i === textContent.length) {
//           clearInterval(typingInterval);
//         }
//       }, 100);
//     }
  
//     // Start typing animation
//     typeText();
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//     const textElement = document.getElementById("texty");
//     const textContent = "Your Daily Expense";
  
//     function typeText() {
//       textElement.textContent = "";
//       let i = 0;
//       const typingInterval = setInterval(function() {
//         textElement.textContent += textContent[i];
//         i++;
//         if (i === textContent.length) {
//           clearInterval(typingInterval);
//         }
//       }, 100);
//     }
  
//     // Start typing animation
//     typeText();
//   });
  