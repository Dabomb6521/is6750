

export function getErrorEmail(email) {
  if (email && email.includes('@')) {
    return null
  }
  return "Email must include an @"
}

export function getErrorName(name){
  if (name && name.trim().includes(' ') && name.split(' ').length >= 2) {
    return null
  }
  return "Error in the Full Name"
}