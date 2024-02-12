function highlight() {
    //Write your code here
	const strong=document.querySelectorAll("strong");
	strong.forEach(str=>{
		str.style.color=("green");
	});

}


function return_normal() {
    //Write your code here
	const normal=document.querySelectorAll("strong");
    normal.forEach(nml=>{
		nml.style.color=("black");
	});
}
