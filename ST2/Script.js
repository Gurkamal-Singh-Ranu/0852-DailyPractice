function Input(){
 var val=document.getElementById("inputtab").value;
 if(!val){
 	alert("Please enter the value");
 	return;
 }
 let count=val.toString().length;
  if (count==5){
 let sum=0;
 while(val!=0){
 	sum+=val%10;
 	val=Math.floor(val/10);
 }

document.getElementById("square").style .width = sum + "px";
document.getElementById("square").style.height = sum + "px";
document.getElementById("square").style.borderRadius = sum/5 + "px"; 

}
else{
	alert("Enter a 5 digit number")
}


// document.getElementById('square')




	// document.getElementById('square').style.display='block';







	// let txtValue = document.getElementById("inputtab").value;
 //    if (txtValue == "" || txtValue == null || txtValue == " ") {
 //      alert("Enter a value");
 //    } else {
 //      txtValue = Number(txtValue);
 //      let digitCounting = txtValue.toString().length;
 //      if (!isNaN(txtValue) && digitCounting == 5) {
 //        var digits = txtValue.toString().split("");
 //        var realDigits = digits.map(Number);
 //        let sum = 0;
 //        for (let i = 0; i < realDigits.length; i++) {
 //          sum += realDigits[i];
 //        }
 //        document.getElementById("square").style.width = sum + "px";
 //        document.getElementById("square").style.height = sum + "px";
 //        // document.getElementById("square").style.backgroundColor = "#002e47";
 //        document.getElementById("square").style.borderRadius =
 //          sum / 5 + "px";
 //      } else {
 //        alert("Enter a number/Digits Counting==5");
 //      }
 //    }

    
}
