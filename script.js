let alertButton = document.getElementById("alert");
alertButton.addEventListener("click" , function(){
    // alert("Hello world");
    alert("welcome to source control course");
    
})
let form=document.querySelector(".form");
form.innerHTML=`  <h2 class="text-center">Form 1</h2>  <form class="w-75 mx-auto">
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your full name">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Your Message</label>
        <textarea class="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Send</button>
    </form>`
let submit=document.querySelector(".btn")
submit.addEventListener("click",()=>{
    alert("hello user")
})