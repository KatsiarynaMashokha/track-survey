$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var answerOne = $("#questionOne").val();
    var answerTwo = $("#questionTwo").val();
    var answerThree = $("input:radio[name=questionThree]:checked").val();
    var answerFour = $("input:radio[name=questionFour]:checked").val();
    var answerFive = $("#questionFive").val();
    console.log("1st answer: " + answerOne);  // for debugging
    console.log("2nd answer: " + answerTwo);  // for debugging
    console.log("3rd answer: " + answerThree);  // for debugging
    console.log("4th answer: " + answerFour);  // for debugging
    console.log("5th answer: " + answerFive);  // for debugging

    var resultTrack;

    if (answerOne === 'mobile') {
        if (answerThree === 'client') {
          if (answerFour === 'iPhone') {
            resultTrack = 'CSS/Design';
          }
          else if (answerFour === 'android') {
            resultTrack = 'Java/Android';
          }
          else {
            resultTrack = 'CSS/Design';
          }
        }
        else {
          if (answerFour === 'iPhone') {
            resultTrack = 'Ruby/Rails';
          }
          else if (answerFour === 'android') {
            resultTrack = 'Java/Android';
          }
          else {
            resultTrack = 'CSS/Design';
          }
        }
      }
      else {
        if (answerThree === 'server') {
          if (answerFour === 'iPhone') {
            resultTrack = 'CSS/Design';
          }
          else if (answerFour === 'Android') {
            resultTrack = 'Java/Android';
          }
          else {
            resultTrack = 'Ruby/Rails';
          }
        }
        else {
          if (answerFour === 'iPhone') {
            resultTrack = 'CSS/Design';
          }
          else if (answerFour === 'android') {
            resultTrack = 'Java/Android';
          }
          else {
            resultTrack = 'Ruby/Rails';
          }
        }
      }



    console.log("result: " + resultTrack);  // for debugging
    $(".resultTrack").text(resultTrack);
    $("#result").show();

  });
});
