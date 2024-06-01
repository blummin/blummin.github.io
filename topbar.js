var html = '<a href="index.html"><button>Home</button></a>';

var section1 = ['Socials']//write one-word link names in this list
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i].toLowerCase(); + '.html"><button>' + section1[i] + '</button></a></div>'
}

document.getElementById("templaterr-topbar").innerHTML = html;
