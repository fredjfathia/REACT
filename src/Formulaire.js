import React from 'react';
const Formulaire = () => {
    return (<div>
      <center><i><b><h1>Overview Checkpoint</h1></b></i></center>
        <form style={{margin: "2cm", borderStyle: "double", padding:"1cm" }}>
            <div class="form-row" >
              <div class="form-group col-md-6">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                <div class="valid-feedback">
                </div>
              </div>
              <div class="form-group col-md-6">
               <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
                <div class="valid-feedback">
                </div>
              </div>
            </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
                     <div class="form-row">
                        <div class="form-group col-md-6">
                       <label for="validationCustom03">Pays</label>  
                       <select  class="form-control" > 
                        <option value="marketing">France</option>
                         <option value="maths">Italie</option>
                         <option value="technologies">Tunisie</option>
                          <option value="langages">Maroc</option>
                         </select>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="submit" value="Submit" style={{marginLeft: "7cm", marginTop: "1cm"}} />
                        </div>  
                     </div>     
</form>

</div> );
}
 
export default Formulaire;