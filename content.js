(function() {
  let newbtn = document.createElement('button');
  newbtn.id = "search-icon-legacy";
  newbtn.className = "style-scope ytd-searchbox";
  newbtn.innerText = "Tab";

  newbtn.addEventListener('click', function() {
    checkSearch();
  });

  document.getElementById('search').appendChild(newbtn);

  function checkSearch() {
    let searchQ = document.querySelector('input#search');
    if(searchQ.value != "") {
      console.log(searchQ.value);
      let searchString = searchQ.value.replace(" ", "+");
      window.open('https://www.youtube.com/results?search_query=' + searchString);
    }
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.jtSearch) {
      checkSearch();
    }
  });
})()
