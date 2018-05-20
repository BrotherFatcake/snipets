
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

