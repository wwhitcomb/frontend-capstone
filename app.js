var YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
	part: 'snippet',
    key: 'AIzaSyBBBSjpMtDk0ESA3E4FPDbzb_qqO3s1B0g',
	q: searchTerm,
	maxResults: 1
  	}
  $.getJSON(YT_BASE_URL, query, callback);
}


function displayVideo(data) {
  if (data.items) {
         videoToPlay = data.items[0].id.videoId;
    }
	$.showYtVideo({ videoId: videoToPlay });
  };
  

function watchClick() {
  $('.box').on('click', function(e) {
	  e.preventDefault();
	  var query = $(this).attr("id");
	  getDataFromApi(query, displayVideo);
	  
  });
}

$(function(){watchClick();});
