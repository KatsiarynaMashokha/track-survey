// Business logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var answerOne = $("#questionOne").val();
    var answerTwo = $("#questionTwo").val();
    var answerThree = $("input:radio[name=questionThree]:checked").val();
    var answerFour = $("input:radio[name=questionFour]:checked").val();
    var answerFive = $("#questionFive").val();
    var resultTrack;
    $("#resultTrack").text(result);
    $("#result").show();

    if (answerOne === 'Mobile') {
      if (answerThree === 'Client side (front end)') {
        if (answerFour === 'iPhone') {
          resultTrack = 'CSS/Design';
        }
        else if (answerFour === 'Android') {
          resultTrack === 'Java/Android';
        }
        else {
          resultTrack === 'CSS/Design';
        }
      }
      else {
        if (answerFour === 'iPhone') {
          resultTrack === 'Ruby/Rails';
        }
        else if (answerFour === 'Android') {
          resultTrack === 'Java/Android';
        }
        else {
          resultTrack === 'CSS/Design';
        }
      }
    }
    else {
      if (answerThree === 'Client side (front end)') {
        if (answerFour === 'iPhone') {
          resultTrack === 'CSS/Design';
        }
        else if (answerFour === 'Android') {
          resultTrack === 'Java/Android';
        }
        else {
          resultTrack === 'Ruby/Rails';
        }
      }
      else {
        if (answerFour === 'iPhone') {
          resultTrack === 'CSS/Design';
        }
        else if (answerFour === 'Android') {
          resultTrack === 'Java/Android';
        }
        else {
          resultTrack === 'Ruby/Rails';
        }
      }
    }
    event.preventDefault();
  });
});
