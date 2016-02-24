/**
 * 
 */

function normalFunction(){
	alert("I am a Normal Function");
}

function withArgFunction(name){
	alert("Welcome to JavaScript Functions" + name);
}

function returnFunction(name){
	return "Welcome to JavaScript Functions" + name;
}

function takeFunctionAsArg(func){
	var rcvd = func;
	alert(rcvd);
}

function returningFunctions(){
	return {
		addClass:function(){
			alert("Add Class Called");
		},
		removeClass:function(){
			alert("Remove Class Called");
		}
	};
}