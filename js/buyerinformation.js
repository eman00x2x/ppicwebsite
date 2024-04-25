const prevBtns = document.querySelectorAll('.btn-prev')
const nextBtns = document.querySelectorAll(('.btn-next'))
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step')
const progressSteps = document.querySelectorAll('.progress-step');
const submitBtn = document.querySelector(".btn-submit");


let formStepsNum = 0;

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const inputsValid = validateInputs();
    if (inputsValid) {
        handleSubmit();
    } else {
    }
});
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        event.preventDefault();
        const inputsValid = validateInputs();
        if (inputsValid) {
            formStepsNum++;
            updateFormSteps();
        } 
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
        if (index == formStepsNum) {
            formStep.classList.add('active');
        } else {
            formStep.classList.remove('active');
        }
    });
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

function validateInputs() {
    let inputsValid = true;
    let regularInputsValid = true;
    let radioInputsValid = true;

    const regularInputs = $('.form-step.active input[type="text"], .form-step.active input[type="email"]');
    regularInputs.each(function () {
        if ($(this).val().trim() === '' || ($(this).attr('type') === 'email' && !isValidEmail($(this).val()))) {
            regularInputsValid = false;
            $(this).addClass('invalid-input'); 
        } else {
            $(this).removeClass('invalid-input'); 
        }
    });

    const radioInputs = $('.form-step.active input[type="radio"][required]');
    radioInputs.each(function () {
        if (!$('[name="' + $(this).attr('name') + '"]:checked').length) {
            radioInputsValid = false;
            console.log('No radio button selected');
        }
    });

    if (!regularInputsValid || !radioInputsValid) {
        inputsValid = false;
    }

    if (radioInputsValid) {
        $('.radio-instruction').removeClass('error-label'); 
    } else {
        $('.radio-instruction').addClass('error-label'); 
    }

    return inputsValid; 
}


function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email); // Return true if the email matches the regex pattern, false otherwise
}

var modal = document.getElementById("myModal");
var okButton = document.getElementById("okButton");

function reloadPage() {
    location.reload();
}



window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function showModal() {
    $('#myModal').show();
}

function hideModal() {
    $('#myModal').hide();
}

function handleSubmit() {
    let isError = false; 

    if (isError) {
        $('#modalImage').attr('src', './assets/img/error.png');
        $('#modalTitle').text('Error!');
        $('#modalMessage').text('There was an error submitting the form. Please try again.');
    } else {
        $('#modalImage').attr('src', './assets/img/like.png');
        $('#modalTitle').text('Information Submitted!');
        $('#modalMessage').text('Congratulations! You have successfully submitted the buyer\'s information.');
    }
    

    showModal();

    okButton.addEventListener("click", function () {
        if (!isError) {
            modal.style.display = "none";
            reloadPage();
        } else {
            // Otherwise, simply close the modal
            $('#myModal').hide();
        }
    
    });
}








