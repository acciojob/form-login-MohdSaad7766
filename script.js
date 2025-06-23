function getFormvalue() {
    let form = document.getElementById("form1");
	let fname = form.element["fname"];
	let lname = form.element["lname"];
	
	form.addEventListener('submit',()=>{
		alert(`${fname} ${lname}`);
	})

	

}
