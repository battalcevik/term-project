// Script to initialize flatpickr and handle scheduling logic
flatpickr("#interview-date", {
    enableTime: false,
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(30),
    disable: ["2013-08-16", "2013-08-17"],
});

flatpickr("#interview-time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "09:00",
    maxTime: "17:00",
});

flatpickr("#consulting-date", {
    enableTime: false,
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(30),
    disable: ["2013-08-16", "2013-08-17"],
});

flatpickr("#consulting-time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "09:00",
    maxTime: "17:00",
});
// Implement the scheduling logic for interviews
function scheduleInterview() {
    alert("Interview scheduled!");
}
 // Implement the scheduling logic for consulting
function scheduleConsulting() {
    alert("Consulting scheduled!");
}
