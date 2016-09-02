
var arrName = [];


  for (var i = 0; i < 5; i++) {
  	arrName[i] = prompt('vvedite imia', '');
}
var realName = prompt('введите реальное ваше имя', '');
console.log(realName)
console.log(arrName);

function check() {
	for (var x = 0; x < arrName.length-1; x++) {
		if (arrName[x] == realName){return true}
	}
	return false
}

if( check() == true ){alert('ura')}
else(alert('ne ura'))



  function pow(x, n) {
      var result = x;
    
      for (var i = 1; i < n; i++) {
        result *= x;
      }
    
      return result;
    }
    
    var x = prompt("x?", '');
    var n = prompt("n?", '');
    
    if (n <= 1) {
      alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
      );
    } else {
      alert( pow(x, n) );
    }


 // var arr = [];
  // prompt("Ваше имя?");
  //var user ;
  // for (var i =0; i < arr.length; i++ );
  // console.log( arr );

 // var user = prompt("Ваше имя?");
 // alert('Hello,' user)

 //  prompt = 'Nataly', 'Anna'; 
 // // name = ['Nataly', 'Anna', 'Sonya'];
 // //  for (var i=0; i < arr.length; i++);

 // // var name = ['Nataly', 'Anna', 'Sonya'];

 //    if  ( user == 'Nataly', 'Anna') {
 //         alert('Привет!');
 //       } else {
 //         alert('Пока!');
 //      }