var TriviaMainUrl = 'https://www.opentdb.com/api.php';

function getDataFromApi(totalQuestions, category, difficulty, callback) {
  var query = {
    amount: totalQuestions,
    category: category,
	difficulty: difficulty
  }
  $.getJSON(TriviaMainUrl, query, callback);
}


function displayTriviaData(data) {
    
}

function watchSubmit() {
  $('.main-form').submit(function(e) {
    e.preventDefault();
    var questions = $(this).find('.question-number').val();
	var category = $(this).find('.question-category').val();
	var difficulty = $(this).find('.question-difficulty').val();
    getDataFromApi(questions, category, difficulty, displayTriviaData);
  });
}

$(function(){watchSubmit();});