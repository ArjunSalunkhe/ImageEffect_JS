// let cen = document.querySelector(".center");

// cen.addEventListener("mousemove",(dets)=>{
    
// })
let imgArr = [
	{
		img:"https://images.unsplash.com/photo-1682167176169-c74f2a6c6b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
	},
	{
		img:"https://plus.unsplash.com/premium_photo-1695725168378-601813bf922f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
	},
]


let cen = document.querySelector(".center");
	const throttleFunction=(func, delay)=>{
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		
		if(now - prev> delay){
		prev = now;
		return func(...args);
		}
	}
	}

	cen.addEventListener("mousemove", throttleFunction((dets)=>{

		let m = document.querySelector(".main");

		let div = document.createElement("div");
		let cen = document.querySelector(".center");

		div.setAttribute("class","imgDiv");

		div.style.left = dets.x + -100 +"px";

		div.style.top = dets.y + -100 +"px";

		m.appendChild(div);
		 
		let img = document.createElement("img");

		img.setAttribute("src","https://images.unsplash.com/photo-1682167176169-c74f2a6c6b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")


		div.appendChild(img);

		gsap.to(img,{
			y:0
		})
		

		setTimeout(()=>{
			div.remove();
		},1000);

		
	
	}, 400));

