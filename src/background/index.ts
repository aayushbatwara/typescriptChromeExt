
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    func: () => {
      document.body.style.backgroundColor='#ffa2a2'
      console.log("Hello from content.ts")
    },
    target: {
      tabId: tab.id || 0
    }
  }).then(() => {
    console.log('Function executed');
  }).catch((err) => {
    console.error('Function not executed. Error:', err);
  });
})

