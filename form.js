window.onload = () => {
const tab_switchers = document.querySelectorAll('[data-switcher]');

for (let i = 0; i < tab_switchers.length; i++) {
const tab_switcher = tab_switchers[i];
const page_id = tab_switcher.dataset.tab;

tab_switcher.addEventListener('click', () => {
  document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
  tab_switcher.parentNode.classList.add('is-active');

  SwitchPage(page_id);
});
}
}

function SwitchPage (page_id) {
//console.log(page_id);

const current_page = document.querySelector('.pages .page.is-active');
current_page.classList.remove('is-active');

const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
next_page.classList.add('is-active');
}

let Injuries ={
abrasions: 3,
lacerations: 4,
brokenbones: 10,
cuts: 5,
bruises: 1,
headtrauma: 5,
skinirritaions: 3 
};

let medical_list = [];
let shelter_list = [];
let victim_name = "";
let response_medical_assistance;
let response_shelter;
let repeat;
let injuries;
let severity = 0;
let emergency;




function store_name()
{
victim_name = document.getElementById("fname").value
console.log(victim_name);
}

function store_medical()
{
document.getElementsByName("medprob").forEach(radio => {
if(radio.checked)
{
response_medical_assistance = radio.value
}
});
console.log(response_medical_assistance);

injuries = document.querySelectorAll('input[type="checkbox"]:checked');
for (let i = 0; i < injuries.length; i++) {
severity += Injuries[injuries[i].value];
}

if(severity <= 3)
{
emergency = "Minor";
}
else if(severity >= 10)
{
emergency = "Crictical";
}
else if(severity > 3 && severity <= 6 )
{
emergency = "Moderate";
}
else if(severity > 6 && severity < 10)
{
emergency = "Major";
}


if(response_medical_assistance == "yes" && severity != 0)
{
alert("We have added your name to our list ot provide you with a medical consultation")
medical_list.push(victim_name);
console.log(medical_list[0]+" is a " + emergency + " state");
}

}

function store_shelter()
{
document.getElementsByName("shelter").forEach(radio => {
if(radio.checked)
{
response_shelter = radio.value
}
});
console.log(response_shelter);

if(response_shelter == "no")
{
alert("We have added you name to our list to provide you with a temporary shelter");
shelter_list.push(victim_name);
}
}
