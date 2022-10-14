import React from "react";


const SignUp=()=>{
    return(
        <div style={{margin:"8% 30% 0% 30%"}}>
            <h3 style={{margin:"0% 0% 5% 40%"}}>SignUp</h3>
            <form>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" placeholder="First Name"/>
        {/* <label class="form-label" for="form3Example1">First name</label> */}
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" placeholder="Last Name"/>
        {/* <label class="form-label" for="form3Example2">Last name</label> */}
      </div>
    </div>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" placeholder="Email Address"/>
    {/* <label class="form-label" for="form3Example3">Email address</label> */}
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" placeholder="Password"/>
    {/* <label class="form-label" for="form3Example4">Password</label> */}
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4" href="/">Sign up</button>
</form>
        </div>
    )
}
export default SignUp;