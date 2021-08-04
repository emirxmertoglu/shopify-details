document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.update(tab.id, { active: true });
            chrome.tabs.executeScript(tab.id, {
                "code": "var myScript = document.createElement('script');"
                    + "myScript.textContent = 'console.log(Shopify.shop); console.log(Shopify.theme.name); console.log(Shopify.theme.id);';"
                    + "document.head.appendChild(myScript);"
            })
        });
    }, false);
}, false);