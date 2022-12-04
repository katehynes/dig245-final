/* javascript */
// On user selection, populate the div with the "visualization" class with images
// downloaded from "This Person Does Not Exist". The number of images generated corresponds
// to the number selected by the user. Seperate for loops are used here for the images representing people
// who have, and have not, had a depressive episode from 2019-2020. The classes "with" or
// "without" give the images a black or pink border, respectively.
$(document).ready(function() {
  $('#sample-size').on('change', function() {
    let numPeople = Number($(this).val());
    let str = "";
    if (numPeople == 25) {
      /* 2 with */
      for (let i = 0; i < 2; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 23 without */
      for (let i = 2; i < numPeople; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid without" id="person-${i}">
            </div>
          `;
      }
    } else if (numPeople == 50) {
      /* 4 with */
      for (let i = 0; i < 4; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 46 without */
      for (let i = 4; i < numPeople; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid without" id="person-${i}">
            </div>
          `;
      }
    } else if (numPeople == 100) {
      /* 8 with */
      for (let i = 0; i < 8; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 92 without */
      for (let i = 8; i < numPeople; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid without" id="person-${i}">
            </div>
          `;
      }
    }
    $(".visualization").html(str);
  });
});
