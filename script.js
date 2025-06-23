function getFormvalue() {
    let form = document.getElementById("form1");
	let fname = form.elements["fname"].value;
	let lname = form.elements["lname"].value;

	
	
	form.addEventListener('submit',()=>{
		alert(`${fname} ${lname}`);
	})

	

}
