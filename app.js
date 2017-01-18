var YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
	part: 'snippet',
    key: 'AIzaSyBBBSjpMtDk0ESA3E4FPDbzb_qqO3s1B0g',
	q: searchTerm,
	maxResults: 20
  	}
  $.getJSON(YT_BASE_URL, query, callback);
}



function displayVideo(data) {
  var randNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  if (data.items) {
         videoToPlay = data.items[randNum].id.videoId;
    }
	$.showYtVideo({ videoId: videoToPlay });
  };
  

function watchClick() {
  $('.workout').on('click', function(e) {
	  e.preventDefault();
	  var query = $(this).attr("id");
	  getDataFromApi(query, displayVideo);
	  
  });
}

$(function(){watchClick();});
