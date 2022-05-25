const today = new Date().setHours(0, 0, 0, 0);
const defaultOptions = {
    defaultViewDate: today,
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
};
console.log(today);
const elem = document.getElementById('inline');
const datepicker = new Datepicker(elem, defaultOptions);