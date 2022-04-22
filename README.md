
HTML FILE NAME: page.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Switcher</title>
    <link rel="stylesheet" href="page.css" />
</head>
<body>
    <header>
        <header>
            <a class="head" href="#">Home</a>
            <a class="head" href="#">News</a>
            <a class="head" href="#">Forum</a>
            <a class="head" href="">Questionare</a>
            <a class="head" href="#">About us</a>
    </header>
    </header>
    <main>
        <section class="pages">
            <div class="page is-active" data-page="1">
                <form class = "victim_name">
                <h2>This questionnaire will help assist you if you have been affected by a natural disaster. Please begin by entering your full name</h2>
                    <label for="fname"><h2>Full name of victim:</h2></label><br>
                    <input type="text" id="fname" name="fname" placeholder="Firstname   Surname" required><br>
                    <ul class="tabs is-active">
                        <li class="tab">
                            <a data-switcher data-tab="2" onclick = "store_name()"><h3>NEXT</h3></a>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="page" data-page="2">
                <h2>Do you need medical assistance?</h2>
                <form>
                        <input type="radio" id="yes" name="medprob" value="yes">
                        <label for="yes">YES</label><br>
                        <input type="radio" id="no" name="medprob" value="no">
                        <label for="no">NO</label><br>
                        <ul class="tabs">
                            <li class="tab">
                                <a data-switcher data-tab="3" onclick = "store_medical()"><h3>NEXT</h3></a>
                            </li>
                        </ul>
                        <form>
                            <input type="checkbox" name="abrasions" value="abrasions">
                            <label for = "abrasions">Abrasions</label>
                            <br/>
                            
                            <input type="checkbox" name="lacerations" value="lacerations">
                            <label for = "lacerations">Laceraions</label>
                            <br/>
                            
                            <input type="checkbox" name="brokenbones" value="brokenbones">
                            <label for = "brokenbones">Broken bones</label>
                            <br/>
                            
                            <input type="checkbox" name="cuts" value="cuts">
                            <label for = "cuts">Cuts</label>
                            <br/>
                            
                            <input type="checkbox" name="bruises" value="bruises">
                            <label for = "bruises">Bruises</label>
                            <br/>
                            
                            <input type="checkbox" name=" headtrauma" value="headtrauma">
                            <label for = " headtrauma">Head trauma</label>
                            <br/>
                            
                            <input type="checkbox" name="skinirritaions" value="skinirritations">
                            <label for = "skinirritaions">Skin irritaions</label>
                            <br/>
                        </form>
                </form>
            </div>
            <div class="page" data-page="3">
                <form>
                    <h2>Do you have a shelter to live in or a relative to live with?</h2>
                        <input type="radio" id="Yes" name="shelter" value="yes">
                        <label for="yes">YES</label><br>
                        <input type="radio" id="No" name="shelter" value="no">
                        <label for="no">NO</label><br>
                        <ul class="tabs">
                            <li class="tab">
                                <a data-switcher data-tab="4" onclick= "store_shelter()"><h3>NEXT</h3></a>
                            </li>
                        </ul>
                </form>
            </div>
            <div class="page" data-page="4">
                    <h2>If you would like to change any answer previously written, please reload the page. If not, please continue.
                    </h2>

                        <!-----<input type="radio" id="yes" name="repeatt" value="yes">
                        <label for="yes">YES</label><br>
                        <input type="radio" id="no" name="repeatt" value="no">
                        <label for="no">NO</label><br>----> 
                        <ul class="tabs">
                            <li class="tab">
                                <a data-switcher data-tab="5"><h3>CONTINUE</h3></a>
                            </li>
                        </ul>
            </div>
            <div class="page" data-page="5">
                <h2>Thank you for answering these questions</h2>
            </div>
        </section>

        <div class="go_away_please">
            <ul class="tabs" >
                    <li class="tab is-active">
                        <a data-switcher data-tab="1">Question 1</a>
                    </li>
                    <li class="tab">
                        <a data-switcher data-tab="2">Question 2</a>
                    </li>
                    <li class="tab">
                        <a data-switcher data-tab="3">Question 3</a>
                    </li>               
                    <li class="tab">
                        <a data-switcher data-tab="4">Question 4</a>
                    </li>
                    <li class="tab">
                        <a data-switcher data-tab="1" onclick= "store_shelter()"><h3>End</h3></a>
                    </li>
            </ul>
        </div>


    </main>

    <script src="page.js"></script>
</body>
</html>


.......................................................................................................................................................................

CSS FILE name: page.css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: white;
}

a{
    text-decoration: none;
    margin: 5%;
}

h2{
    margin: 20px;
    margin-left: 0px;
}

h3{
    background-color: #04A900;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
    margin: 0px 450px;
    cursor: context-menu;
}

.go_away_please{
    display: none;
}

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}


form.victim_name{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;   
    margin: 30px 0px;
}

input[type=text] {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    font-size: 20; 
    border: none;
    border-bottom: 2px solid red;
    background-color:  rgba(72, 164, 82, 1);
    width:100%;
    height: 50px;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    border: 3px solid #555;
  }

header{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
    border : 0%;
    padding: 8px;
    margin: none;
    background-color: #04A914;
    text-emphasis-color: black;
    text-align: center;
}

main {
    padding-left: 142px;
    padding-right: 142px;
}

.pages {
    margin-top: 100px;
    padding: 50px 30px;
    border-radius: 8px;
    background-color: rgba(68, 224, 47, 0.445); /*rgba(72, 164, 82, 1);*/
    box-shadow: 0px 0px 6px rgb(0, 0, 0);
}

.pages .page {
    display: none;
}

.pages .page.is-active {
    display: block;
}

.side
{
    margin-left: 90px;
}

...................................................................................................................................................................

Javascript FILE name: page.js
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

#end of code....
Comment by Emmanuel:
Sorry guys for posting so late. The google drive file didn't seem to be working, and I assumed whatsapp would be too tedious, so I posted it here, it's still doing some weird stuff to my code, but you can try to edit it and you'll see the pure code.
