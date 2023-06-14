// code your solution here
function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`
  }
  saturdayFun()
  
  function mondayWork(event = 'go to the office') {
    return `This Monday, I will ${event}.`
  }
  mondayWork("This Monday, I will work from home.")
  
  function wrapAdjective(wrap = "*") {
    return function(single = "special") {
      return `You are ${wrap}${single}${wrap}!`
    }
  }

  wrapAdjective("!")("a dedicated programmer")