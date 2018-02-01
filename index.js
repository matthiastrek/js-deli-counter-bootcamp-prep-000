var katzDeli = []

var x = 0

function takeANumber(katzDeli) {
  x += 1
  katzDeli.push(x)
  return `You are number ${x} in line.` 
}

function nowServing() {
  if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return (`Currently serving ${katzDeli.shift()}.`)
  }
}

var line = []

function currentLine(katzDeli) {
  let i = 0
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently:` + line
  }
}