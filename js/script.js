/*****************************************
Treehouse Techdegree:
FSJS project 3 - Interactive For
******************************************/

// focus on the first text field when the page first loads
const name = document.querySelector('#name');
$(document).ready(function () {
    $('#name').focus();
});

//”Job Role” section
//hide 'other-title' input
$('#other-title').hide();
//text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$('#title').change(function () {
    let selected = $(this).val();
    if (selected == 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

// ”T-Shirt Info” section
const color = $('#colors-js-puns').hide(); // hide color option at first
// T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
$('#design').change(function () {
    let selected = $(this).val();
    if (selected === 'js puns') {
        //hide this option
        color.show();
        $('#color').val('cornflowerblue');

        $("option[value|='tomato']").hide();
        $("option[value|='steelblue']").hide();
        $("option[value|='dimgrey']").hide();
        //show this option
        $("option[value|='gold']").show();
        $("option[value|='darkslategrey']").show();
        $("option[value|='cornflowerblue']").show();
    } else if (selected === 'heart js') {
        //hide this option
        color.show();
        $('#color').val('tomato');

        $("option[value|='gold']").hide();
        $("option[value|='darkslategrey']").hide();
        $("option[value|='cornflowerblue']").hide();
        //show this option
        $("option[value|='tomato']").show();
        $("option[value|='steelblue']").show();
        $("option[value|='dimgrey']").show();
    } else if (selected === 'select option') {
        color.hide();
    }
});

//”Register for Activities” section
// calculate totoal cost
let sum = 0;
const totalCost = $('<h3>Total: </h3>');
$('.activities').append(totalCost);

const showTotal = (cost) => {
    if (cost) {
        totalCost.text('Total: $' + cost);
        totalCost.show();
    } else {
        totalCost.text('Total: $' + cost);
        totalCost.hide();
    }
};

$('.activities input').on('change', function () {
    const frameworks = $('input[name="js-frameworks"]');
    const libraries = $('input[name="js-libs"]');
    const express = $('input[name="express"]');
    const node = $('input[name="node"]');


    if (this.checked && this.name === 'all') {
        sum += 200;
    } else if (this.checked === false && this.name === 'all') {
        sum -= 200;
    }
    //if Frameworks Workshop is selected disabel the Express Workshop
    if (this.checked && this.name === 'js-frameworks') {
        express.prop("disabled", true);
        $('input[name="express"]').parent().css("text-decoration", "line-through").css("color", "red");
        sum += 100;
    } else if (this.checked === false && this.name === "js-frameworks") {
        express.prop("disabled", false);
        $('input[name="express"]').parent().css("text-decoration", "none").css("color", "black");
        sum -= 100;
    }
    //if express Workshop is selected disabel the Express Workshop
    if (this.checked && this.name === 'express') {
        frameworks.prop("disabled", true);
        $('input[name="js-frameworks"]').parent().css("text-decoration", "line-through").css("color", "red");
        sum += 100;

    } else if (this.checked === false && this.name === "express") {
        frameworks.prop("disabled", false);
        $('input[name="js-frameworks"]').parent().css("text-decoration", "none").css("color", "black");
        sum -= 100;
    }

    //if libraries Workshop is selected disabel the node Workshop
    if (this.checked && this.name === 'js-libs') {
        node.prop("disabled", true);
        $('input[name="node"]').parent().css("text-decoration", "line-through").css("color", "red");
        sum += 100;

    } else if (this.checked === false && this.name === "js-libs") {
        node.prop("disabled", false);
        $('input[name="node"]').parent().css("text-decoration", "none").css("color", "black");
        sum -= 100;
    }

    //if node Workshop is selected disabel the node Workshop
    if (this.checked && this.name === 'node') {
        libraries.prop("disabled", true);
        $('input[name="js-libs"]').parent().css("text-decoration", "line-through").css("color", "red");
        sum += 100;

    } else if (this.checked === false && this.name === "node") {
        libraries.prop("disabled", false);
        $('input[name="js-libs"]').parent().css("text-decoration", "none").css("color", "black");
        sum -= 100;
    }

    //if Build tools Workshop is selected add 100 to the total 
    if (this.checked && this.name === 'build-tools') {
        sum += 100;

    } else if (this.checked === false && this.name === 'build-tools') {
        sum -= 100;
    }

    //if npm Workshop is selected add 100 to the total 
    if (this.checked && this.name === 'npm') {
        sum += 100;

    } else if (this.checked === false && this.name === 'npm') {
        sum -= 100;
    }
    // call 'showTotal' function 
    showTotal(sum);
});

//"Payment Info" section
//Select Methode is disabeld 
const selectMethod = $('option[value="select_method"]').prop('disabled', true);
// Credit Card is the default payment method
$('#payment').val('credit card');
// hide paypal and bitcoin until selected
$('#paypal').hide();
$('#bitcoin').hide();
// change payment option
$('#payment').change(function () {
    let selected = $(this).val();

    if (selected === 'credit card') {
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoin').hide();
    } else if (selected === 'paypal') {
        $('#paypal').show();
        $('#credit-card').hide();
        $('#bitcoin').hide();
    } else if (selected === 'bitcoin') {
        $('#bitcoin').show();
        $('#credit-card').hide();
        $('#paypal').hide();
    }
});

//// Form validation
///
/*
 **** NAME 
 */
// message for empty field
const nameInput = document.querySelector('#name');
const nameError = document.createElement('div');
nameError.className = 'error';
nameError.textContent = 'Please enter your name'
nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
$('.error').hide();
// message for regexError
const regexError = document.createElement('div');
regexError.className = 'regexError';
regexError.textContent = 'Can only contain letters a-z'
nameInput.parentNode.insertBefore(regexError, nameInput.nextSibling);
$('.regexError').hide();

//username Validator
const isValidUsername = /^[a-zA-Z `'-]+$/i;
// this event handler validates the 'name input' when the user releases a key on the keyboard
$('#name').keyup(function () {
    const nameVal = $(this).val();
    // validate Regex
    if (!nameVal.match(isValidUsername) && nameVal !== "") {
        $('.regexError').show();
    } else {
        $('.regexError').hide();
    }
    // validate empty field
    if (nameVal === "") {
        $('.error').show();
        $('#name').css("border", "1px solid red");
    } else {
        $('.error').hide();
        $('#name').css("border", "1px solid #cececeb9");
    }
});

/*
 **** EMAIL 
 */
//message for empty field
const mailInput = document.querySelector('#mail');
const mailError = document.createElement('div');
mailError.className = 'errorEmail';
mailError.textContent = 'Please enter your Email'
mailInput.parentNode.insertBefore(mailError, mailInput.nextSibling);
$('.errorEmail').hide();
// message for regexError
const mailRegexError = document.createElement('div');
mailRegexError.className = 'regexErrorEmail';
mailRegexError.textContent = 'Must be a valid email address'
mailInput.parentNode.insertBefore(mailRegexError, mailInput.nextSibling);
$('.regexErrorEmail').hide();

//email Validator
const isValidEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
// this event handler validates the 'mail input' when the user releases a key on the keyboard
$('#mail').keyup(function () {
    const mailVal = $(this).val();
    // validate Regex
    if (!mailVal.match(isValidEmail) && mailVal !== "") {
        $('.regexErrorEmail').show();
        $('#mail').css("border", "1px solid red");
    } else {
        $('.regexErrorEmail').hide();
        $('#mail').css("border", "1px solid #cececeb9");
    }
    // validate empty field
    if (mailVal === "") {
        $('.errorEmail').show();
        $('#mail').css("border", "1px solid red");
    } else {
        $('.errorEmail').hide();
        $('#mail').css("border", "1px solid #cececeb9");
    }
});

/*
 **** Activities 
 */
//message if 0 activity is selected 
const activities = document.querySelector('.activities legend');
const activitiesError = document.createElement('div');
activitiesError.className = 'activitiesError';
activitiesError.textContent = 'Please select at least one activity'
activities.parentNode.insertBefore(activitiesError, activities.nextSibling);
$('.activitiesError').hide();

/*
 **** Credit Card 
 */
//message for empty field
const ccNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
// error message for card number
const ccError = document.createElement('div');
ccError.className = 'ccError';
ccError.textContent = 'Invalid card number'
ccNum.parentNode.insertBefore(ccError, ccNum.nextSibling);
$('.ccError').hide();
// error message for zip code
const zipError = document.createElement('div');
zipError.className = 'zipError';
zipError.textContent = 'Invalid Zip Code'
zip.parentNode.insertBefore(zipError, zip.nextSibling);
$('.zipError').hide();
// error message for CVV
const cvvError = document.createElement('div');
cvvError.className = 'cvvError';
cvvError.textContent = 'Invalid CVV'
cvv.parentNode.insertBefore(cvvError, cvv.nextSibling);
$('.cvvError').hide();
$(".block").prop("disabled", true); //Disable

//// Validators
///Credit Card
//Card Number
const isValidCcNum = /^[\d]{13,16}$/i;
//Zip Code
const isValidZip = /^[\d]{5}$/i;
//CVV
const isValidCvv = /^[\d]{3}$/i;

// Eventhandlers 
// this event handler validates the 'Credit Card input' when the user chngest to the next input field
$('#cc-num').change(function () {
    const ccNumVal = $(this).val();
    // validate Regex
    if (!ccNumVal.match(isValidCcNum)) {
        $('#cc-num').css("border", "1px solid red");
        $('.ccError').show();
    } else {
        $('#cc-num').css("border", "1px solid #cececeb9");
        $('.ccError').hide();
    }
});

// this event handler validates the 'Zip Code input' when the user chngest to the next input field
$('#zip').change(function () {
    const zipNumVAl = $(this).val();
    // validate Regex
    if (!zipNumVAl.match(isValidZip)) {
        $('#zip').css("border", "1px solid red");
        $('.zipError').show();
    } else {
        $('#zip').css("border", "1px solid #cececeb9");
        $('.zipError').hide();
    }
});

// this event handler validates the 'CVV input' when the user chngest to the next input field
$('#cvv').change(function () {
    const cvvNumVal = $(this).val();
    // validate Regex
    if (!cvvNumVal.match(isValidCvv)) {
        $('#cvv').css("border", "1px solid red");
        $('.cvvError').show();
    } else {
        $('#cvv').css("border", "1px solid #cececeb9");
        $('.cvvError').hide();
    }
});

// // register button validation
$('button[type="submit"]').on('click', function (e) {
    // if name field is empty alert the user 
    // validate empty field
    if ($('#name').val() === "") {
        $('.error').show();
        $('#name').css("border", "1px solid red");
        e.preventDefault(); //prevent the register button from submiting
    } else {
        $('.error').hide();
        $('#name').css("border", "1px solid #cececeb9");
    }
    const mailVal = $('#mail').val();

    //validate the 'mail input' when the user submits
    if (!mailVal.match(isValidEmail) && mailVal !== "") {
        $('.regexErrorEmail').show();
        $('#mail').css("border", "1px solid red");
        e.preventDefault(); //prevent the register button from submiting
    } else {
        $('.errorEmail').hide();
        $('#mail').css("border", "1px solid #cececeb9");
    }
    // validate empty mail field
    if (mailVal === "") {
        $('.errorEmail').show();
        $('#mail').css("border", "1px solid red");
        e.preventDefault(); //prevent the register button from submiting
    } else {
        $('.errorEmail').hide();
        $('#mail').css("border", "1px solid #cececeb9");
    }
    // //slelect atleast one activitie
    if (!$('input[type=checkbox]:checked').length) {
        e.preventDefault(); //prevent the register button from submiting
        $('.activities legend').css('color', 'red');
        $('.activitiesError').css('color', 'red');
        $('.activitiesError').show();
    } else {
        $('.activities legend').css('color', 'black');
        $('.activitiesError').hide();
    }

    // validate credit card before submiting
    if ($('#payment').val() === "credit card") {
        // this event handler validates the 'Credit Card input' when the user chngest to the next input field
        const ccNumVal = $('#cc-num').val();
        // validate Regex
        if (!ccNumVal.match(isValidCcNum)) {
            $('#cc-num').css("border", "1px solid red");
            $('.ccError').show();
            e.preventDefault(); //prevent the register button from submiting
        } else {
            $('#cc-num').css("border", "1px solid #cececeb9");
        }
        // this event handler validates the 'Zip Code input' when the user chngest to the next input field
        const zipNumVAl = $('#zip').val();
        // validate Regex
        if (!zipNumVAl.match(isValidZip)) {
            $('#zip').css("border", "1px solid red");
            $('.zipError').show();
            e.preventDefault(); //prevent the register button from submiting
        } else {
            $('#zip').css("border", "1px solid #cececeb9");
            $('.zipError').hide();
        }
        // this event handler validates the 'CVV input' when the user chngest to the next input field
        const cvvNumVal = $('#cvv').val();
        // validate Regex
        if (!cvvNumVal.match(isValidCvv)) {
            $('#cvv').css("border", "1px solid red");
            $('.cvvError').show();
            e.preventDefault(); //prevent the register button from submiting
        } else {
            $('#cvv').css("border", "1px solid #cececeb9");
            $('.cvvError').hide();
        }
    }
});

//http://regexpal.com.s3-website-us-east-1.amazonaws.com/?_ga=2.249565263.813004562.1495485737-848749570.1493938714
//https://www.tutorialspoint.com/What-is-document-ready-method-in-jQuery