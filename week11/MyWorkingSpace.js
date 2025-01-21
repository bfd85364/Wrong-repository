// NAME: junhyung-kim
// DATE: 2024-05-20
// WEEK:11
// EXERCISE/ASSIGNMENT: array



function Exercise1() {
	let cath = ["Hello", "goodnight", "goodbye", "here", "wait", "goodmoning"];
	print(cath[2]);
}
	
function Exercise2() {
	let value = [10, 20, 35, 42, 55, 69, 70, 81, 95, 100];
	for(i=0; i<9; i++){
	    print(value[i] * 10);
	}


}
	
function Exercise3(){
	let quote = ["Through", "pathes", "from", "the", "violin"];
	print(quote.join("*"));
}

function Exercise4() { 
	let students = ["Sujin", "Harry", "Heejin", "Jeongwoo"];
	
	students.pop();
	students.push("Azizbek");
	students.push(students.shift());
	print(students);

}
			
function Exercise5() {
	let numbers = [7, 13, 15, 18, 56, 71, 91, 100, 103];
	let randomNumber = getRandom(numbers.length);	
	for(let i=0; i<randomNumber; i++){
		numbers.shift();
	}
	print(numbers);
}




function Exercise6(){
	let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
	let randomNumber1 = getRandom(4);
	let randomNumber2 = Math.floor(Math.random() * 5) + 5;
	let sliceletters = letters.slice(randomNumber1,randomNumber2);
	print(sliceletters); 
}

function Exercise7(){
	let veggies = ["potato", "tomato", "carrot", "onion"];
	veggies.splice(2,0,"Pumpkin","mushroom");
	print("a) " + veggies);
	
	veggies.splice(4,5,"peas");
	print("b) " + veggies);
}

function Exercise8() {
	let numbers1 = [7, 13, 15, 18, 56, 71, 91, 100, 103]; 
	for(let i=0; i<numbers1.length; i++){
		if(numbers1[i]%2==0){
			print(numbers1[i]);
		}
	}
}

function Exercise9(){
	let randomNumber = getRandom(9);
	let numbers1 = [7, 13, 15, 18, 56, 71, 91, 100, 103]; 
		for(let i=0; i<randomNumber; i++){
			if(numbers1[i]%2==0){
				print(numbers1[i]);
			}
	}
}

function Exercise10() {
	let numbers1 = [1, 2, 3, 4, 5, 9, 10]; 
	let numbers2 = [6, 7, 8];
	
	numbers1.splice(4,0,numbers2[0]);
	numbers1.splice(5,0,numbers2[1]);
	numbers1.splice(6,0,numbers2[2]);

	if(numbers1==10){
		print(numbers1[9]);
	}
	else{
		print(numbers1.join("*"));
		}
}


function Exercise11() {
	let text1 = prompt("input your sentenacne");
	let n = getRandom(text1.length -1);
	let i = getRandom(text1.length -1);
			let text1Split = text1.split(text1[n]);
				text1 = text1.replaceAll(text1.substring(n-i),text1.substring(n-1));
				text1 = text1.replaceAll(text1.substring(n),text1.substring(n+1));
				text1 = text1.replaceAll(text1.substring(n+i),text1.substring(i));
			print(text1Split);
}

function Exercise12() {
	let text1 = prompt("input your sentenacne");
	let n = getRandom(text1.length -1);
	let i = getRandom(text1.length -1);
	
	for(let j=0; j<text1.length; j++){
	 text1 = text1.replaceAll(text1[n-1],text1[i-1]);
 	 text1 = text1.replaceAll(text1[n], text1[i]); 
	 text1 = text1.replaceAll(text1[n+1], text1[i+1]);
	}
	print(text1);
}


//Clear working space
function clearPrintSpace() {
	clearAll();
}
