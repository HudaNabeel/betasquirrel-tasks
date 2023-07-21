 // consol.log(), warn, info, error
 // consol.log('abc')
 // consol.clear()


 // var firstname = 'jhon' //string
 // let lastname // undefined
 // console.log(typeof lastname)
 // lastname = 'Doe'
 // console.log(typeof lastname)
 // lastname = '123'
 //console.log(typeof lastname)
 // const age = 50 // number


 // document -DOM
 const element = document.getElementById('result')
 let op;

 function clickNumber(number) {
    element.value = number;
 }

 function clickOperator(operator) { // argument/parameters
    op = operator;
    if(operator === '+'){
        console.log('Yes it is a plus')
    }else if (operator === '-'){
        console.log('Yes it is a minus')
    }else {
        console.log('no')
    }
 }