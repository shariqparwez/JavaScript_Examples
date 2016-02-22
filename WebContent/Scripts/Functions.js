/**
 * 
 */

function init(){
	var item={
		"itemName":"TeleVision",
		"itemImage":"images/tv.jpg",
		showItem:function(){
			console.log('show Item Called');
			var ele = document.getElementById("itemName");
			ele.innerHTML=this.itemName;
			document.getElementsByTagName("img")[0].src = this.itemImage;
		}
	};
	
	console.log("Init Called");
	console.log(item.itemName);
	item.showItem();
}

(function(){
	init();	
})();