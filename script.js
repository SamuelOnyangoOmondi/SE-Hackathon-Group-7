const form = document.getElementById('form')
const btn = document.querySelector('.btn')
const organizationIDInput = document.getElementById('OrganizationID')
const errorMessage = document.getElementById('error-message')

function handleSubmit(event) {
  event.preventDefault()
  let OrganizationID = OrganizationIDInput.value

  if (
    !OrganizationID ||
    !!(
      OrganizationID.match(r"(^[^A-Za-z]([0-9]*[a-z]*)*[^0-9]$)")
    )
  ) {
    errorMessage.innerText = 'Invalid ID!'
    setTimeout(() => {
      errorMessage.innerText = ''
    }, 2000)
    organizationIDInput.value = ''
  } else {
    errorMessage.innerText = 'Form Successfully Submitted'
    setTimeout(() => {
      errorMessage.innerText = ''
    }, 2000)
    organizationIDInput.value = ''
  }
}

