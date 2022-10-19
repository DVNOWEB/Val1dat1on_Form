class User {
  constructor(firstName, lastName, email, password, repeatPassword, checkbox) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
    this.checkbox = checkbox;
  }
}
class UI {
  addUser(user) {

  }
  showAlert(message, className){
    const div = document.createElement('div')
    // add classes 
    div.className = `alert ${className}`
    // add text
    div.appendChild(document.createTextNode(message))
    // Feedback message
    const errorMessage = document.querySelector('#errorMessage')
    // Get form
    const form = document.querySelector('#validationForm')
    // insert alert
    errorMessage.appendChild(div, form)
    // Timeout
    setTimeout(function(){
    document.querySelector('.alert').remove()}, 3000)
 }

  clearFields(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatPassword').value = '';
    document.getElementById('terms').value = '';
  }
  
}
// RegExp
function validText(firstName, lastName) {
  return /^[a-zA-Z]{2,}$/.test(firstName, lastName)
}

function validEmail(email) {
  return /^[a-z0-9_.,-|\/]+@[a-z]{2,}\.[a-z\.]{2,}$/.test(email)
}

function validPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password)
}

function validCheckbox(){
  let check = false
  if(document.getElementById('terms').checked){ 
    check = true
  } else {
    return false
  }
}
// Event listeners
document.getElementById('validationForm').addEventListener('submit', function(e){

  const firstName = document.getElementById('firstName').value,
          lastName = document.getElementById('lastName').value,
          email = document.getElementById('email').value,
          password = document.getElementById('password').value,
          repPassword = document.getElementById('repeatPassword').value,
          checkbox = document.getElementById('terms').checked
  // Instan. user
  const user = new User(firstName, lastName, email, password, repPassword, checkbox)
  // Instant. UI
  const ui = new UI()
  // Validate
  if (
    firstName === '' || lastName === '' || email === '' || password === '' || repPassword === '') {
    // Error alert
    ui.showAlert('All fields must be filled in correctly!', '#errorMessage')
  } 
  else if (!validText(firstName)) { 
    ui.showAlert(
      'First name incorrect! Set a valid first name!', '#errorMessage')

  } else if (!validText(lastName)) { 
    ui.showAlert('Last name incorrect! Set a valid last name!', '#errorMessage')

  } else if (!validEmail(email)) {
    ui.showAlert('Email error! Set a valid email address!', '#errorMessage')

  } else if (!validPassword(password)) {
    ui.showAlert(
      'Password Error : min 6 letters, Upper and lower case letters and numbers.', '#errorMessage')

  } else if (password !== repPassword) {
    ui.showAlert('Password does not match, repeat password!', '#errorMessage')

  } else if (!document.getElementById('terms').checked) {
    ui.showAlert('You most accept our terms and conditions!', '#errorMessage')

  } else {
    // Success
    ui.showAlert(`Hello, ${user.firstName} ${user.lastName} You are successfully registered, congratulations!`, 'success')

    console.log(user, 'You are successfully registered, congratulations!')
    //Clear fields
    ui.clearFields()
  }
  e.preventDefault()
})