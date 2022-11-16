
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
    	let numPeople = Number($(this).val());
      let str = "";
      for (let i = 0; i < numPeople; i++) {
        str += `
          <div class="col-3">
            <img src="assets/img/users/${i}.jpg" class="img-fluid" id="person-${i}">
          </div>
        `;
      }
      $(".visualization").html(str);
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
