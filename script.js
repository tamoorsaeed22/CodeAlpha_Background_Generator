const colorInput1 = document.getElementById("colorInput1");
const colorInput2 = document.getElementById("colorInput2");
const generateButton = document.getElementById("generateButton");
const gradientCode = document.getElementById("gradientCode");
const copyButton = document.getElementById("copyButton");
const linearGradientRadio = document.getElementById("linearGradient");
const radialGradientRadio = document.getElementById("radialGradient");
const bothGradientRadio = document.getElementById("bothGradient");

generateButton.addEventListener("click", () => {
    const selectedColor1 = colorInput1.value;
    const selectedColor2 = colorInput2.value;
    const selectedGradientType = getSelectedGradientType();

    let gradientValue = "";

    if (selectedGradientType === "both") {
        gradientValue = `linear-gradient(${selectedColor1}, ${selectedColor2}), radial-gradient(${selectedColor1}, ${selectedColor2})`;
    } else {
        gradientValue = `${selectedGradientType}-gradient(${selectedColor1}, ${selectedColor2})`;
    }

    document.body.style.background = gradientValue;
    gradientCode.textContent = gradientValue;
});

copyButton.addEventListener("click", () => {
    const selectedGradient = gradientCode.textContent;
    const textarea = document.createElement("textarea");
    textarea.value = selectedGradient;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Gradient code copied to clipboard: " + selectedGradient);
});

function getSelectedGradientType() {
    if (linearGradientRadio.checked) {
        return "linear";
    } else if (radialGradientRadio.checked) {
        return "radial";
    } else {
        return "both";
    }
}
