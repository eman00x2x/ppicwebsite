const prevBtns = document.querySelectorAll('.btn-prev')
const nextBtns = document.querySelectorAll(('.btn-next'))
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step')
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

nextBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		formStepsNum++;
		updateFormSteps();
	})
})
prevBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		formStepsNum--;
		updateFormSteps();
	})
})

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.contains('active') && formStep.classList.remove('active');
    });
    formSteps[formStepsNum].classList.add('active');

    progressSteps.forEach((formStep, index) => {
		// formStep.classList.remove('active');
        if (index == formStepsNum) {
            formStep.classList.add('active');
        } else {
            formStep.classList.remove('active');
        }
    });
     // Update the text displayed in the form container
     const activeStep = document.querySelector('.form-step.active');
     if (activeStep) {
         const activeStepTitle = activeStep.getAttribute('data-title');
         const formContainer = document.querySelector('.container1');
         if (formContainer) {
             formContainer.setAttribute('data-title', progressSteps[formStepsNum].getAttribute("data-title"));
         }
     }
 
     console.log("Active step title:", progressSteps[formStepsNum].getAttribute("data-title"));

}
window.addEventListener('load', () => {
    updateFormSteps();
});

// Get the button that opens the modal
var submitBtn = document.querySelector(".btn-submit");

// Get the modal
var modal = document.getElementById("myModal");

// Get the OK button inside the modal
var okButton = document.getElementById("okButton");

// When the user clicks on the button, open the modal
submitBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on OK button, close the modal
okButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});








