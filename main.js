/*
var Students = {
	HashemBuzer : { pastPairs : [] },
	OmarBara: { pastPairs : [] },
	MohamedAmineAouini: { pastPairs : [] },
	HaniaLazreg: { pastPairs : [] },
	MohamedBelkheir: { pastPairs : [] },
	MehdiFarjallah: { pastPairs : [] },
	AbdelsalamShahlol: { pastPairs : [] },
	MohamedFared: { pastPairs : [] },
	FirasAmous: { pastPairs : [] },
	HamamElmurtdh: { pastPairs : [] },
	ZiedBarhoumi: { pastPairs : [] },
	HeniMezrani: { pastPairs : [] },
	SalimAliAlsaeh: { pastPairs : [] },
	AliJalal: { pastPairs : [] },
	OnsRahmani: { pastPairs : [] },
	NejahSafi: { pastPairs : [] },
	HoudaRouaissi: { pastPairs : [] },
	FoozBarakat: { pastPairs : [] },
	JihedAbdelly: { pastPairs : [] },
	MaherBouzid: { pastPairs : [] },
	MalikAbdullah: { pastPairs : [] },
	HamzaDanden: { pastPairs : [] },
	FaresJelassi: { pastPairs : [] },
	TahaZnazen: { pastPairs : [] },
	KhoubaiebGhaouari: { pastPairs : [] },
	WajdiHamrouni: { pastPairs : [] },
	AubaArifElwahieshi: { pastPairs : [] },
	AmeraAyad: { pastPairs : [] },
	FaroukGuizeni: { pastPairs : [] },
	TahaMejri: { pastPairs : [] },
	FatimaMabrook: { pastPairs : [] },
	AnasMarzouki: { pastPairs : [] },
	AbdoAlabed: { pastPairs : [] },
	MohamedAmineSlaimia: { pastPairs : [] },
	MohamedDhiaWeslati: { pastPairs : [] },
 	AhmedWheida : { pastPairs : [] },
	DhiaRaissi: { pastPairs : [] },
	AdamMomen: { pastPairs : [] },
	AbdulrahmanShibani: { pastPairs : [] },
	SofianSaleh: { pastPairs : [] },
	EssamFaraj: { pastPairs : [] },
	MuftahElzawi: { pastPairs : [] },
	InsafMechergui: { pastPairs : [] },
	LinaBenSalem: { pastPairs : [] },
	AdnenBenAbdelaali: { pastPairs : [] },
	BilelGharbi: { pastPairs : [] },
	MohamedSbeta: { pastPairs : [] },
}

function randomPair(obj,student){

	var pastPairs = obj[student].pastPairs;
	var listOfStudents = Object.keys(obj);
	var array = [];
	var pair = [];

	listOfStudents.splice(listOfStudents.indexOf(student),1);

	for (var i = 0; i <pastPairs.length; i++) {
		for (var j = 0; j < listOfStudents.length; j++) {
			if( pastPairs[i] === listOfStudents[j]){
				console.log(pastPairs[i],listOfStudents[j])
				pastPairs.splice(i,1)
				listOfStudents.splice(j,1)
				j--;
			}
		}
	}
	
	array = [...pastPairs,...listOfStudents];

	pair = [student, array[Math.floor(Math.random() * Math.floor(array.length))]];
	addToPastpairs (pair);
	return pair;
}

function addToPastpairs (arr){
	Students[arr[0]].pastPairs.push(arr[1])
	Students[arr[1]].pastPairs.push(arr[0])
}

function pairSystem (){
	var slider = Object.keys(Students);
	var result = [];
	var match = [];

	while (slider.length > 0){
		match = randomPair(Students,slider[0]);
		console.log(match)
		result.push(match)
		console.log(slider)
		slider.splice(slider.indexOf(match[0]),1)
		console.log(slider)
		slider.splice(slider.indexOf(match[0]),1)
		console.log(slider)
	}
	return result;
}

/////////////////////

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function filterOut(studentList,pairsList){
	var arr = Object.Keys(studentList);
	return filter(arr,function(element){
		return pairsList.includes(element) === false;
	})
}

function chosePair(student){
	var arr = filtereOut(studentList,Students[student].pastPairs);
	return [student, arr[Math.floor(Math.random() * Math.floor(array.length))]];
}

function addToPastpairs (arr){
	Students[arr[0]].pastPairs.push(arr[1])
	Students[arr[1]].pastPairs.push(arr[0])
}

function pairing(studnetData) {
	var list = Object.keys(studentList);
	var pairs = [];
	while(list.length > 0){
		var arr = chosePair(list[0]);
		addToPastpairs(arr)
		student.slice(1)
		list.splice(list.indexOf(arr[1]),1)
		pairs.push(arr);
	}
}
*/
/////////////////////////////////////
var Students = {
	HashemBuzer : { pastPairs : [] },
	OmarBara: { pastPairs : [] },
	MohamedAmineAouini: { pastPairs : [] },
	HaniaLazreg: { pastPairs : [] },
	MohamedBelkheir: { pastPairs : [] },
	MehdiFarjallah: { pastPairs : [] },
	AbdelsalamShahlol: { pastPairs : [] },
	MohamedFared: { pastPairs : [] },
	FirasAmous: { pastPairs : [] },
	HamamElmurtdh: { pastPairs : [] },
	ZiedBarhoumi: { pastPairs : [] },
	HeniMezrani: { pastPairs : [] },
	SalimAliAlsaeh: { pastPairs : [] },
	AliJalal: { pastPairs : [] },
	OnsRahmani: { pastPairs : [] },
	NejahSafi: { pastPairs : [] },
	HoudaRouaissi: { pastPairs : [] },
	FoozBarakat: { pastPairs : [] },
	JihedAbdelly: { pastPairs : [] },
	MaherBouzid: { pastPairs : [] },
	MalikAbdullah: { pastPairs : [] },
	HamzaDanden: { pastPairs : [] },
	FaresJelassi: { pastPairs : [] },
	TahaZnazen: { pastPairs : [] },
	KhoubaiebGhaouari: { pastPairs : [] },
	WajdiHamrouni: { pastPairs : [] },
	AubaArifElwahieshi: { pastPairs : [] },
	AmeraAyad: { pastPairs : [] },
	FaroukGuizeni: { pastPairs : [] },
	TahaMejri: { pastPairs : [] },
	FatimaMabrook: { pastPairs : [] },
	AnasMarzouki: { pastPairs : [] },
	AbdoAlabed: { pastPairs : [] },
	MohamedAmineSlaimia: { pastPairs : [] },
	MohamedDhiaWeslati: { pastPairs : [] },
 	AhmedWheida : { pastPairs : [] },
	DhiaRaissi: { pastPairs : [] },
	AdamMomen: { pastPairs : [] },
	AbdulrahmanShibani: { pastPairs : [] },
	SofianSaleh: { pastPairs : [] },
	EssamFaraj: { pastPairs : [] },
	MuftahElzawi: { pastPairs : [] },
	InsafMechergui: { pastPairs : [] },
	LinaBenSalem: { pastPairs : [] },
	AdnenBenAbdelaali: { pastPairs : [] },
	BilelGharbi: { pastPairs : [] },
//	MohamedSbeta: { pastPairs : [] },
}


function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function filterOut(studentList,pairsList){
	var arr = Object.keys(studentList);
	return filter(arr,function(element){
		return pairsList.includes(element) === false;
	})
}

function chosePair(student){
	var arr = filterOut(Students,Students[student].pastPairs);
	return [student, arr[Math.floor(Math.random() * Math.floor(arr.length))]];
}

function addToPastpairs (arr){
	Students[arr[0]].pastPairs.push(arr[1])
	Students[arr[1]].pastPairs.push(arr[0])
}

function pairing(studnetData) {

	var list = Object.keys(studnetData);
	var pairs = [];
	while(list.length > 0){
		console.log(list)
		var arr = chosePair(list[0]);
		console.log(arr)
		addToPastpairs(arr)
		list.splice(0,1)
		list.splice(list.indexOf(arr[1]),1)
		pairs.push(arr);
		console.log(list,pairs)
	}
  return pairs;
}
pairing(Students)

