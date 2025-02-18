module.exports = function toReadable(number) {

  let oneArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let teenArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tenArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  let answer = ''

  if (number === 0) {
    return 'zero'
  }

  if ((number >= 100) && (number <= 999)) {
    answer = answer + oneArray[number.toString()[0]] + ' hundred '
  }

  number = number % 100

  if (number <= 9) {
    answer = answer + oneArray[number]
  }

  if ((number >= 10) && (number <= 19)) {
    answer = answer + teenArray[number.toString()[1]]
  }

  if ((number >= 20) && (number <= 99)) {
    answer = answer + tenArray[number.toString()[0]] + ' ' + oneArray[number.toString()[1]]
  }

  return answer.trim()
}
