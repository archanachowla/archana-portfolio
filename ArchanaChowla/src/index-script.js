
// document.addEventListener("DOMContentLoaded", () => {

// const text=document.querySelector(".changing-text");
// const textLoad= () => {
//     setTimeout( ()=> {
//         text.textContent="Java Developer";
//     }, 0);
//     setTimeout( ()=> {
//         text.textContent="Frontend Developer";
//     }, 4000);
//     setTimeout( ()=> {
//         text.textContent="Python Developer";
//     }, 8000);
// }


// textLoad();
// setInterval(textLoad,12000);

// });

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".changing-text");
    const texts = ["Java Developer", "Frontend Developer", "Python Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        if (!isDeleting && charIndex < texts[textIndex].length) {
            // Add letters one by one
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);  // Adjust typing speed here
        } else if (isDeleting && charIndex > 0) {
            // Remove letters one by one
            textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);  // Adjust deleting speed here
        } else {
            // Switch to next text or restart
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }
            setTimeout(typeEffect, 1000);  // Pause before typing/deleting next text
        }
    };

    typeEffect();
});

