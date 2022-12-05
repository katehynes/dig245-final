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
      /* 5.25 ~ 5 with */
      for (let i = 0; i < 5; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 20 without */
      for (let i = 5; i < numPeople; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid without" id="person-${i}">
            </div>
          `;
      }
    } else if (numPeople == 50) {
      /* 10.5 ~ 10 with */
      for (let i = 0; i < 10; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 40 without */
      for (let i = 10; i < numPeople; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid without" id="person-${i}">
            </div>
          `;
      }
    } else if (numPeople == 100) {
      /* 21 with */
      for (let i = 0; i < 21; i++) {
        str += `
            <div class="col-3">
              <img src="assets/img/users/${i}.jpg" class="img-fluid with" id="person-${i}">
            </div>
          `;
      }
      /* 79 without */
      for (let i = 21; i < numPeople; i++) {
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
