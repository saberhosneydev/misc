	var tags = [
    "Microsoft Professional",
  "PHP Developer",
  "HTML Developer"
]
var current = -1;

$(document).ready(function(){
  setTimeout(backspaceTagContent, 1000);
});

function changeTagContent() {
  backspaceTagContent();
}

function backspaceTagContent() {
  $('#tag-content').html($('#tag-content').html().slice(0,-1));
  if ($('#tag-content').html().length) {
    setTimeout(backspaceTagContent, 50);
  } else {
    setTimeout(function() { insertTagContent(getRandomTag()); }, 100);
  }
}


function insertTagContent(tag) {
  $('#tag-content').html(tag.substring(0, $('#tag-content').html().length + 1));
  if ($('#tag-content').html().length != tag.length) {
    setTimeout(function() { insertTagContent(tag); }, 100);
  } else {
    setTimeout(changeTagContent, 500);
  }
}

function getRandomTag() {
  // display a random tag in an endless loop .
  // return tags[Math.floor(Math.random() * tags.length)];

  // display tags in order till the end .
  for (var i = 0; i < tags.length; i++) {
    current += 1;
    return tags[current];
  }
}

