user ={
    name: "Shatyaki",
		age: 39,
		
		// sayHi(){
		// 	console.log(this.name)
		// }
		sayHi(){
			
			let arrow = () => {
				let name = "Changed"
				console.log(this.name)}
			  arrow()
		}
}

let admin = user
user = "Shatyaki Admin"
admin.sayHi()
// user.sayHi()