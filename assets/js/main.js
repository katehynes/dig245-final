/* javascript */
// On user selection, populate the div with the "visualization" class with images
// downloaded from "This Person Does Not Exist". The number of images generated corresponds
// to the number selected by the user. Seperate for loops are used here for the images representing people
// who have, and have not, had a depressive episode from 2019-2020. The classes "with" or
// "without" give the images a black or pink border, respectively.
$(document).ready(function() {
  const userNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  $('#sample-size').on('change', function() {
    userNums.sort(function(){return 0.5 - Math.random()});
    console.log(userNums);
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
