// Keyboard navigation: left/right to move focus between the three icon buttons
document.addEventListener('DOMContentLoaded',()=>{
	const items = Array.from(document.querySelectorAll('.icon-btn'));
	if(!items.length) return;
	items.forEach((it,i)=>{
		it.setAttribute('tabindex','0');
		it.addEventListener('keydown', e=>{
			if(e.key==='Enter') { e.currentTarget.click(); }
			if(e.key==='ArrowRight'){
				items[(i+1)%items.length].focus();
				e.preventDefault();
			}
			if(e.key==='ArrowLeft'){
				items[(i-1+items.length)%items.length].focus();
				e.preventDefault();
			}
		});
	});
});


document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll(".icon-btn").forEach((e,i)=>{
e.style.opacity="0";
e.style.transform="translateY(30px)";
setTimeout(()=>{e.style.transition="all .8s ease";e.style.opacity="1";e.style.transform="translateY(0)";},i*200);
});
});
