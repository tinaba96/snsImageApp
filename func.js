function takeScreenshot(element) {
    html2canvas(element).then(function(canvas) {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.png';
        link.click();
    });
}

// 使い方:
// takeScreenshot(document.getElementById('targetElement'));
