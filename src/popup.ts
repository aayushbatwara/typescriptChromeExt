
console.log("what it do babyyyy")

document.addEventListener("DOMContentLoaded", () => {
    console.log("made it here")
    const mySwitch:HTMLInputElement | null = document.getElementById("onOffSwitch") as HTMLInputElement;
    if (mySwitch) {
        mySwitch.addEventListener("change", changeColor);
    const inputElement = document.querySelector('input');

}
})

function changeColor() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs:chrome.tabs.Tab[]) {
            chrome.scripting.executeScript({
            target: { tabId: tabs[0]?.id ?? 0},
            func: changeBackgroundColor
        });
    });
  }
  
  
  function changeBackgroundColor() {
    if (document.body.style.backgroundColor == 'pink') {
      document.body.style.backgroundColor = 'unset';
    }
    else {
      document.body.style.backgroundColor = 'pink';
    }
  }