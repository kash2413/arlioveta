
//localStorage.removeItem("device_id");
//var lstest_val = lsTest();
var printtest = false;
//console.log("lsTest"+lstest_val);
var device_id =localStorageCheck();

//alert(device_id);


if(device_id === null)
{
	var d = new Date();
	var n = d.getTime();
	
	device_id = n+'_'+Math.random();
	localStorage.setItem("device_id", device_id);
}


if(device_id === false)
{
	if(printtest === true)
		console.log("Device id: false incognito?");
	
	parent.postMessage('null', "*");
}else{
	parent.postMessage(device_id, "*");
}

//alert(device_id);
//alert( window.device_id );
//get_device_id();




function localStorageCheck(){
	if(printtest === true)
		console.log("localStorage");
    
    var device_id = null;
    try {
       device_id = localStorage.getItem("device_id");
    } catch(e) {
    	if(printtest === true)
    		console.log(e);
        
        device_id = false;
    }

    if(printtest === true)
    	console.log("Device value:"+device_id);
    
    return device_id;
}

/*function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
    	console.log(e);
        return false;
    }
}*/