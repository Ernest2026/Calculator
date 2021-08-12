const root = document.querySelector(":root");
const range = document.querySelector(".slider");
const txtInput = document.querySelector(".text-input");
const button= document.querySelectorAll(".btn-white");
const equal = document.querySelector(".btn-equal");
const reset = document.querySelector(".btn-reset");
const del = document.querySelector(".btn-delete");

range.addEventListener("change", colorChange)

function colorChange() {
    let r = range.value;
    switch (r) {
        case "10":
            root.style.setProperty('--main-background', "hsl(222, 26%, 31%)");
            root.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)');
            root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
            root.style.setProperty('--first-key-background', 'hsl(225, 21%, 49%)');
            root.style.setProperty('--first-key-shadow', 'hsl(224, 28%, 35%)');
            root.style.setProperty('--second-key-background', 'hsl(6, 63%, 50%)');
            root.style.setProperty('--second-key-shadow', 'hsl(6, 70%, 34%)');
            root.style.setProperty('--third-key-background', 'hsl(30, 25%, 89%)');
            root.style.setProperty('--third-key-shadow', 'hsl(28, 16%, 65%)');
            root.style.setProperty('--grayish-blue', 'hsl(221, 14%, 31%)');
            root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
            document.querySelector(".btn-red").style.setProperty('--white', 'hsl(0, 0%, 100%)');
            break;

        case "20":
            root.style.setProperty('--main-background', "hsl(0, 0%, 90%)");
            root.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)');
            root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
            root.style.setProperty('--first-key-background', 'hsl(185, 42%, 37%)');
            root.style.setProperty('--first-key-shadow', 'hsl(185, 58%, 25%)');
            root.style.setProperty('--second-key-background', 'hsl(25, 98%, 40%)');
            root.style.setProperty('--second-key-shadow', 'hsl(25, 99%, 27%)');
            root.style.setProperty('--third-key-background', 'hsl(45, 7%, 89%)');
            root.style.setProperty('--third-key-shadow', 'hsl(35, 11%, 61%)');
            root.style.setProperty('--grayish-blue', 'hsl(60%, 10%, 19%)');
            root.style.setProperty('--white', 'hsl(60%, 10%, 19%)');
            document.querySelector(".btn-red").style.setProperty('--white', 'hsl(0, 0%, 100%)');
            break;

        case "30":
            root.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
            root.style.setProperty('--toggle-background', 'hsl(268, 71%, 12%)');
            root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
            root.style.setProperty('--first-key-background', 'hsl(281, 89%, 26%)');
            root.style.setProperty('--first-key-shadow', 'hsl(285, 91%, 52%)');
            root.style.setProperty('--second-key-background', 'hsl(176, 100%, 44%)');
            root.style.setProperty('--second-key-shadow', 'hsl(177, 92%, 70%)');
            root.style.setProperty('--third-key-background', 'hsl(268, 47%, 21%)');
            root.style.setProperty('--third-key-shadow', 'hsl(290, 70%, 36%)');
            root.style.setProperty('--grayish-blue', 'hsl(52, 100%, 62%)');
            root.style.setProperty('--white', 'hsl(52, 100%, 62%)');
            document.querySelector(".btn-red").style.setProperty('--white', 'hsl(198, 20%, 13%)');
            break;
    
        default:
            root.style.setProperty('--main-background', "hsl(222, 26%, 31%)");
            root.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)');
            root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
            root.style.setProperty('--first-key-background', 'hsl(225, 21%, 49%)');
            root.style.setProperty('--first-key-shadow', 'hsl(224, 28%, 35%)');
            root.style.setProperty('--second-key-background', 'hsl(6, 63%, 50%)');
            root.style.setProperty('--second-key-shadow', 'hsl(6, 70%, 34%)');
            root.style.setProperty('--third-key-background', 'hsl(30, 25%, 89%)');
            root.style.setProperty('--third-key-shadow', 'hsl(28, 16%, 65%)');
            root.style.setProperty('--grayish-blue', 'hsl(221, 14%, 31%)');
            root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
            document.querySelector(".btn-red").style.setProperty('--white', 'hsl(0, 0%, 100%)');
            break;
    }
};

button.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let value = e.target.dataset.input;
        // let value = this.getAttribute("data-input");
        txtInput.value += value;
        txtInput.scrollLeft = txtInput.scrollWidth;
        if (txtInput.value[txtInput.value.length-2] === "+" ||
            txtInput.value[txtInput.value.length-2] === "-" ||
            txtInput.value[txtInput.value.length-2] === "/" ||
            txtInput.value[txtInput.value.length-2] === "x" ){
            if (value === "+" ||
                value === "-" ||
                value === "/" ||
                value === "x" ){
                  txtInput.value = txtInput.value.slice(0, txtInput.value.length-2) + txtInput.value.slice(txtInput.value.length-1);
            }
        }
    });
});

reset.addEventListener("click", function () {
    txtInput.value = "";
});

equal.addEventListener("click", function () {
    if (txtInput.value.includes("x")) {
        let newTxt = txtInput.value.replace("x", "*");
        let answer = eval(newTxt);
        txtInput.value = answer;
    } else {
        let answer = eval(txtInput.value);
        txtInput.value = answer;
    };
});

del.addEventListener("click", function (e) {
    let deleted = txtInput.value.slice(0, -1);
    txtInput.value = deleted;
});

function myFunction(x) {
    if (x.matches) {
      range.value = 30;
      
    } else {
      range.value = 10;
    }
    colorChange();
  }
  
  var x = window.matchMedia("(prefers-color-scheme: dark)");
  myFunction(x);
  x.addListener(myFunction);