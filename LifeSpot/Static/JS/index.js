
let currentDate = Date().toLocaleString();
let age = prompt("Enter your age");
if (age >= 18) {
    alert("Glad to see you on LifeSpot! Today " + currentDate);
}
else {
    alert("Bye!");
    window.location.href = "http://google.com";
}