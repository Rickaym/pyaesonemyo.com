document.addEventListener("DOMContentLoaded", function () {
    const toggleInput = document.getElementById("toggle");
    const textElements = document.getElementsByClassName("i18n");

    let state = 1;
    function switchContent() {
        for (const element of textElements) {
            element.style.opacity = '0';
            setTimeout(() => {
                if (element.getAttribute("data-content-2") !== null) {
                    const content1 = element.textContent;
                    element.textContent = element.getAttribute("data-content-2")
                    element.setAttribute("data-content-2", content1);
                }
                if (state === 2) {
                    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    var fontSize = parseFloat(style);
                    // resize line-height by a factor of 1.7 to correct for burmese font
                    element.style.lineHeight = `${fontSize * 1.7}px`;
                } else {
                    element.style.lineHeight = null;
                }
                element.style.opacity = '1';
            }, 200);
        }
        state = state === 1 ? 2 : 1;
    }

    toggleInput.addEventListener("change", function () {
        if (this.checked) {
            switchContent();
        } else {
            switchContent();
        }
    });
});
