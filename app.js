
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
  addUserToList(user) {

    const card = document.getElementById('errorMessage');
    const row = document.createElement('div', 'successMessage')

    row.innerHTML = `<p>Hello, ${user.firstName} ${user.lastName} you are successfully registered!</p>`
    card.appendChild(row)

  
  }

  showAlert(message, className){
    const div = document.createElement('div')
    // add classes 
    div.className = `form-content ${className}`;
    // add text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.wrapper');
    // Get form
    const form = document.querySelector('#validationForm');
    // insert alert
    container.insertBefore(div, form);
    // //inputGroup.className = 'input-group error';
    
    // Timeout
    setTimeout(function(){
    document.querySelector('.form-content').remove();
    }, 3000)
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

// Feedback error
  const feedback = document.querySelector('.d-none');
  let show = false;

  function getFeedback() {
    if (!show) {
      feedback.style.display = 'block'
      // show = true
    } else if(show){
      feedback.style.display = 'none'
    } 
  }

// RegExp
function validText(firstName, lastName) {
  return /^[a-zA-Z]{2,}$/.test(firstName, lastName);
}

function validEmail(email) {
  return /^[a-z0-9_.,-|\/]+@[a-z]{2,}\.[a-z\.]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password);
}


// Event listeners
document.getElementById('validationForm').addEventListener('submit', function(e){

   // console.log('test')

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repPassword = document.getElementById('repeatPassword').value
    const checkbox = document.getElementById('terms').checked

  
  // Instan. user
  const user = new User(firstName, lastName, email, password, repPassword, checkbox)

  
  // Instant. UI
  const ui = new UI()


  // Validate
  if (
    firstName === '' || lastName === '' || email === '' || password === '' || repPassword === ''
  ) {
    // Error alert
    ui.showAlert('All fields must be filled in correctly!', 'error');

  } 
  else if (!validText(firstName)) { 
    ui.showAlert(
      'First name incorrect! Set a valid first name!', 'error');

  } else if (!validText(lastName)) { 
    ui.showAlert('Last name incorrect! Set a valid last name!', 'error');

  } 
  else if (!validEmail(email)) {
    ui.showAlert('Email error! Set a valid email address!', 'error');

  } else if (!validPassword(password)) {
    ui.showAlert(
      'Password Error : min 6 letters, Upper and lower case letters and numbers.',
      'error');

  } else if (password !== repPassword) {
    ui.showAlert('Password does not match!', 'error');

  } 
  

  else {
    // add user to list
    ui.addUserToList(user);

    // Success
    ui.showAlert('You are registered, congratulations!', 'success');

    //Clear fields
    ui.clearFields();
  }

  
  
  console.log(user)

   e.preventDefault()
})
