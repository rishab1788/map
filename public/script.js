window.alert("sometext");

document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
});



window.onscroll=function(){
	parallax()
};

function parallax()
{
 if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      	var pop= document.getElementById('pop');
    document.getElementById("pop").className = "";
}
else {
        document.getElementById("pop").className = "dpop";
    }

}
