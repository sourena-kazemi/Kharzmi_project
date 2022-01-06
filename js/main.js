$(document).ready(function(){
	$(".navbar_options_btn").mouseenter(function(){
		$(".drop_down").fadeIn();
	});
	$(".navbar_options_btn").mouseleave(function(){
		$(".drop_down").fadeOut();
	});
	$(".first_dropdown_icon").on( "click", function(){
		$(".first_dropdown").slideToggle();
	});
	$(".second_dropdown_icon").on( "click", function(){
		$(".second_dropdown").slideToggle();
	});
});
let shouldFirstIconRotate=true;
let shouldSecondIconRotate=true;

function firstDropdownClick(element){
	let dropdownIcon = element;
	dropdownIcon.style.transform = iconRotateHandler(shouldFirstIconRotate);
	shouldFirstIconRotate = !shouldFirstIconRotate;
}
function secondDropdownClick(element){
	let dropdownIcon = element;
	dropdownIcon.style.transform = iconRotateHandler(shouldSecondIconRotate);
	shouldSecondIconRotate= !shouldSecondIconRotate;

}
function iconRotateHandler(inputValue){
	if(inputValue){
		return "rotate(180deg)";
	}else{
		return "rotate(0deg)";
	}
}