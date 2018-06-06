

//ARRAYS=======================================

    //JavaScript Arrays — Finding The Minimum, Maximum, Sum, & Average Values
    //  https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332


    
//MAP EXAMPLES  =============================================

// what do I get out of the first pass?
// newArray for first pass => { objKey_1: 'data1', objKey_2: 'data2' }

input = [
  {
    objKey_1: 'data1',
    objKey_2: 'data2'
  }];

return input.map(
  function (newArray) {
    return newArray.objKey_1 + ": " + newArray.objKey_2;
  }
);

//--------------------------------

function functionName(arg) {
  //Do stuff
  console.log(arg)

  let mapArg = arg.map(
    function (arg2) {
      return (arg2 >= x) ? arg2 : null
    }
  ).filter(
    function (arg2) {
      return (arg2 !== null);
    }
  );
}

//--------------------------------

//Form Listener=======================================


$('.js-checkPass').unbind().submit(function(event)   {
  event.preventDefault();
  
  //Do some stuff

  let msg = $('input').val();

  //Check and Radio boxes

  let userSelected = [
    $('input[id=upper]:checked').val(),
    $('input[id=lower]:checked').val(),
    $('input[id=number]:checked').val(),
    $('input[id=special]:checked').val(),
    $('input[name=passLength]:checked').val()
];
});


//jQUERY Check/Radio validations

$('.js-newPassForm').unbind().submit(function(event)  {


  checkedCharType = $("input[type=checkbox]:checked").length;
  checkedPassLength = $("input[type=radio]:checked").length;

  if(!checkedCharType) {
      $('#openCharTypeModal')[0].click();
      return false;
      }    

  
  if(!checkedPassLength) {
      $('#openPassLengthModal')[0].click();
      return false;
      }   


//ADD/REMOVE Classes===============================

$('.js-toDo, .js-goodNewsBadNews, .js-thePassword').addClass('hidden');
$('.js-passBox, .js-passMagic').removeClass('hidden');


//CAll API============

function searchYouTube(userSearchTerm, callback)  {
 
  let query = {
    part: 'snippet',
    q: `${userSearchTerm}`,
    key: `${YTKEY}`
  };
  


  $.getJSON(YOUTUBE, query, callback);
}


//GET as JSON

  //Don't have to have a function!
$.get(LYRICAPI+query, callback, "json");


  //Function stingify's results
let pwnedResp = $.get(query, function()  {
 
  let pwnedData = JSON.stringify(pwnedResp.responseText);
   
   mapResults(pwnedData);

}, "text");


//GET as text
let pwnedResp = $.get(query, function()  {
 
  let pwnedData = JSON.stringify(pwnedResp.responseText);
   
   mapResults(pwnedData);

}, "text");

function callPassApi(passQueryString, callback)  {

  let query = {
      password: `${passQueryString}`
    };
    
  $.getJSON(RANDOMPASS, query, callback);
 
 }


 //non-JSON API===================


function sendToPwned(fiveSliced)  {

  let query = PWNED_URL+fiveSliced;
  
  let pwnedResp = $.get(query, function()  {
 
     let pwnedData = JSON.stringify(pwnedResp.responseText);
      
      mapResults(pwnedData);

  }, "text");

}

 
// mapping data returned from JSON API

function mapResults(inputArg) {

  const results = inputArg.items.map(
    function (item, index) {
      //optional vars depending on need
      let youTubeWatch = 'https://youtube.com/watch?v=';
      let youTubeChannel = 'https://youtube.com/channel';

      //return data, in this case HTML
      return `
         <div class='result'>
           <div>
           <span class='videoTitle'> <a href='${youTubeWatch}${item.id.videoId}'>${item.snippet.title}</a> </span>
           </div>
           <div>
             <a href='${youTubeWatch}${item.id.videoId}'><img class='videoImage' src='${item.snippet.thumbnails.medium.url}' alt='video thumbnail'/></a>
           </div>
           <div>
             <span><a href='${youTubeChannel}${item.snippet.channelID}'>Click to see more from this channel</a></span>
           </div>
           </div>
         `;
    }



//FOR LOOP FUNCTIONS EXAMPLES  =============================================


function functionName(arg) {

      let arg2 = [];

      for (let i = 0; i < data.length; i++) {
        arg2.push(`${data[i].name}: ${data[i].grade}`);
      }

//Change Password field state on checkbox check/uncheck =============================================

$('#checkBoxInputName').change(function()  {
  if ($(this).is(':checked')) {
    $('.js-inputFieldClassName').attr('type', 'text');
  }
  else{
    $('.js-inputFieldClassName').attr('type', 'password');
  }

})

//FORM INPUT VALIDATION for MODALS=========================

//novalidate required for customs
<form id='js-newPassForm' role='form' class='newPassForm js-newPassForm' novalidate>
       
       <div class='createPassLeft js-createPassLeft col-6 checkBoxGroup required'>
         checkbox checkBoxGroup
         
         Radios need to be required also
       


$('.js-newPassForm').unbind().submit(function(event)  {


  checkedCharType = $("input[type=checkbox]:checked").length;
  checkedPassLength = $("input[type=radio]:checked").length;

  if(!checkedCharType) {
      $('#openCharTypeModal')[0].click();
      return false;
      }    

  
  if(!checkedPassLength) {
      $('#openPassLengthModal')[0].click();
      return false;
      }  

//STRINGS========================

//replace characters in a string

newString = oldString.replace(/\\n|\\r/g, 'stuff');