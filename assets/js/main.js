
/* javascript */
// let data = [
//   {
//     path: 'assets/img/avatar-7a02db53e3e8a88d1e667d92388ee930.jpg',
//   },
//   {
//
//   },
//   {
//
//   },
//
// ]
//
//
// let genOption = 100, // number of people to display
//
//
// /**
//  * Return [count] number of random indexes from [arr]
//  */
// function returnRandomArrIndexes(arr, count) {
//   // make sure count is not greater than number of options
//   if (count > arr.length) count = arr.length;
//   // to store chosen indexes
//   let chosen = [];
//   // loop until length of chosen arr matches number requested
//   while (chosen.length < count) {
//     var r = Math.floor(Math.random() * arr.length);
//     if (chosen.indexOf(r) === -1) chosen.push(r);
//   }
//   return chosen;
// }
// function randomPhrase(count = 1) {
//   let chosen = returnRandomArrIndexes(data, count);
//   // console.log(chosen);
//   // loop through chosen indexes, append to string
//   let str = "";
//   for (let i = 0; i < chosen.length; i++) {
//     str += `<tr>
//             <th scope="row">${(i+1)}</th>
//             <td>${data[chosen[i]].path}</td>
//             <td><a href="${data[chosen[i]].url}" target="_blank">${data[chosen[i]].title}</a></td>
//             <td>${data[chosen[i]].publication}</td>
//             <td>${data[chosen[i]].year}</td>
//             </tr>`;
//   }
//   return str;
// }
//
// function populateSelect() {
//   let $select = $("#genOption");
//   $.each(data, function (i) {
//     $select.append($("<option />").val(i).text(i));
//   });
// }

$(document).ready(function(){
    $('#sample-size').on('change', function(){
      const PERCENT = 8.4;
    	let numPeople = $(this).val();
      let numWith = Math.floor((PERCENT * numPeople)/100);
      // want to show the 1st 25, 50, 100 images, etc.
      // thinking about adding classes to the images?
      for (let i = 0; i < numWith; i++) {
        if (i < numWith) {
          // add/toggle class that displays these images with a blue border
        }
        else {
          // add/toggle class that displays images with a black border for people "without"
        }
        // show the first numPeople – each image would have a class saying if it's in the first 25, 50 people, etc.
        $("div."+numPeople).show();
      }
    });
});

/**
 * Event listeners
 */
// $(".gen").on("click", () => {
//   // update color
//   genOption = $("#genOption").find(":selected").text().toLowerCase();
//   $(".outcome").html(`<ul>${randomPhrase(genOption)}</ul>`);
// });
// // on change
// $("#genOption").change(() => {
//   // trigger the click listener
//   $(".gen").trigger("click");
// });
// // once page has loaded
// $(document).ready(() => {
//   populateSelect();
//   $("#genOption").val(genOption);
//   $(".gen").trigger("click");
// });
