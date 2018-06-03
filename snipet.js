

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


//FOR LOOP FUNCTIONS EXAMPLES  =============================================


function functionName(arg) {

      let arg2 = [];

      for (let i = 0; i < data.length; i++) {
        arg2.push(`${data[i].name}: ${data[i].grade}`);
      }

//Change Passfield state on checkbox check/uncheck =============================================

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