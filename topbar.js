var html = '<div class="navlink"><a href="index.html">Home</a></div>';

var section1 = ['Socials']//write one-word link names in this list
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i].toLowerCase(); + '.html">' + section1[i] + '</a></div>'
}

html += '<div class="navlink"><a href="https://youtu.be/dQw4w9WgXcQ">Custom Link</a></div>'

document.getElementById("templaterr-topbar").innerHTML = html;
