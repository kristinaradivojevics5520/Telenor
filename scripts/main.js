window.addEventListener('load', () => {
	getMovieData(1);
	getMovieData(2);
	getMovieData(3);
});

const getMovieData = (movieId) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var response = 	JSON.parse(this.responseText);
		setMovieData(response,movieId);
    }
  };
  
  var url ='https://swapi.co/api/films/'+movieId;
  
  xhttp.open('GET', url, true);
  xhttp.setRequestHeader('content-Type', 'application/json');
  xhttp.send();
}

const setMovieData = (result,movieId) =>{
	var divIdTitle = 'movieTitle'+movieId;
	var divElTitle  = document.getElementById(divIdTitle);
	divElTitle.innerHTML = result.title;
	
	var divIdCrawl = 'movieCrawl'+movieId;
	var divElCrawl  = document.getElementById(divIdCrawl);
	divElCrawl.innerHTML = result.opening_crawl;
}

