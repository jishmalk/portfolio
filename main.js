var typed= new Typed(".text",{
    strings:["Frontend Developer" , "Youtuber" , "web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

function sendMail() {
    var params ={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_h38k8p2";
    const templateID= "template_naegxm2";

    emailjs
    .send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("subject").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("Your message send succesfully");
    })
    .catch((err) => console.log(err));
}