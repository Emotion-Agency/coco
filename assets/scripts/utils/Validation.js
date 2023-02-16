const emailTester =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

class Validation {
  required(str) {
    return !!str.trim()
  }

  minLength(str, value) {
    if (str.trim().length < value) {
      return false
    }
    return true
  }

  email(email) {
    if (!email) return false

    const emailParts = email.split('@')

    if (emailParts.length !== 2) return false

    const account = emailParts[0]
    const address = emailParts[1]

    if (account.length > 64) return false
    else if (address.length > 255) return false

    const domainParts = address.split('.')
    if (
      domainParts.some(function (part) {
        return part.length > 63
      })
    )
      return false

    if (!emailTester.test(email)) return false

    return true
  }

  maxlength(str, value) {
    const l = str.trim().length
    if (l > value) {
      return false
    }
    return true
  }

  isEqual(str, value) {
    if (str.trim() !== value.trim()) {
      return false
    }
    return true
  }
}

export default new Validation()
