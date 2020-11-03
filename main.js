Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");
function Capture() {
    Webcam.snap(function (pic) {
        document.getElementById("selfie").innerHTML = `<img src=${pic} id="captured_img">`
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4STcQqvSN/model.json", modelloaded);
function modelloaded() {
    console.log("model has been loaded");

}

function Identify() {
    img = document.getElementById("captured_img");
    classifier.classify(img, getresults);
    
}

function getresults(error,results) {
    if (error) {
        console.log(error)
    }
    else {
        
        console.log(results)
    }
        
  
};