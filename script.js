const form = document.getElementById('form')
const btn = document.querySelector('.btn')
const fullnameInput = document.getElementById('fullName')
const errorMessage = document.getElementById('error-message')

function handleSubmit(event) {
  event.preventDefault()
  let fullName = fullnameInput.value

  if (
    !fullName ||
    !!(
      fullName.match(/^[a-z\s!@#$%^&_-]{3,30}$/g) &&
      fullName.match(/^.*[a-z].*$/g)
    )
  ) {
    errorMessage.innerText = 'Invalid String'
    setTimeout(() => {
      errorMessage.innerText = ''
    }, 2000)
    fullnameInput.value = ''
  } else {
    errorMessage.innerText = 'Form Successfully Submitted'
    setTimeout(() => {
      errorMessage.innerText = ''
    }, 2000)
    fullnameInput.value = ''
  }
}

btn.addEventListener('click', handleSubmit)

