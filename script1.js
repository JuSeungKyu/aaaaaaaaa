console.log("hi")

const EA = [[],[],[],[]] // elementArray


EA[0][1] = "H 수소"; EA[0][18] = "He 헬륨";
EA[1][1] = "Li 리듐"; EA[1][2] = "Be 베릴륨"; EA[1][13] = "B 붕소"; EA[1][14] = "C 탄소"; EA[1][15] = "N 질소"; EA[1][16] = "O 산소"; EA[1][17] = "F 플루오린"; EA[1][18] = "Ne 네온";
EA[2][1] = "Na 나트륨"; EA[2][2] = "Mg 마그네슘"; EA[2][13] = "Al 알루미늄"; EA[2][14] = "Si 규소"; EA[2][15] = "P 인"; EA[2][16] = "S 황"; EA[2][17] = "Cl 염소"; EA[2][18] = "Ar 아르곤";
EA[3][1] = "K 칼륨"; EA[3][2] = "Ca 칼슘";

console.log(EA[3][1]);

let A = 0;
let B = 0;

function randomElement(){
	while(true){
		A = Math.floor(Math.random() * 4);
		B = Math.floor(Math.random() * 19);
		console.log(A + " " + B)
		if(B == 0){
			continue;
		}
		if(A == 0 && B > 1 && B < 18){
			continue;
		}
		if(A == 1 && B > 2 && B < 13){
			continue;
		}
		if(A == 2 && B > 2 && B < 13){
			continue;
		}
		if(A == 3 && B > 2){
			continue;
		}
		break
	}
	console.log(EA[A][B]);

	let elementInformation = EA[A][B].split(' ');

	let _elementSymbol = elementInformation[0];
	let _elementName = elementInformation[1];

	document.getElementById("elementName").innerHTML = _elementName;
	document.getElementById("elementSymbol").innerHTML = _elementSymbol;

}
randomElement();

function initialization(){
	document.getElementById("a").value = '';
	document.getElementById("b").value = '';
}

function buttonClick1(){
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;
	console.log(a + " " + b);
	if((A+1) == parseInt(a) && B == parseInt(b)){
		document.getElementById('Result').innerHTML = '정답입니다';
		randomElement();
		initialization();
	}
	else{
		document.getElementById('Result').innerHTML = '오답입니다';
		initialization();
	}
}