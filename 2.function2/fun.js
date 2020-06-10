function palindrome(message){
  // wirte your code here
  var begin=0;
  var last=message.length-1;
  while(begin<last){
	  if(message.charAt(begin++)!==message.charAt(last--)){
		  return false;
	  }
  }
  return true;
}