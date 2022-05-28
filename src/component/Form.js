// import '../Css/form_style.css'
import { useEffect } from 'react';
import $ from 'jquery';
function Form(){
    useEffect (()=>{
        const checkMail = ()=>{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // console.log($('#email').val());
            if($('#email').val().match(mailformat)){
                return true;
            }
            return false;
        }
        const checkPhone = ()=>{
            var phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            // console.log($('#email').val());
            if($('#phone').val().match(phoneformat)){
                return true;
            }
            return false;
        }
        
        var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbzWKwBy3YZqyh-0Nmn08UCLEeDakD6dzihdxy_tThHVrRlcG2sxpBtJXquWYtn0itsEkQ/exec'
    
        $('#submit-form').on('click', function(e) {
            e.preventDefault();
            // console.log(checkMail());
            let Error = "";
            if(!checkPhone()){
                Error += "Please re-enter your phone number\n"
            }
            if(!checkMail()){
                Error += "Please re-enter your email\n"
            }
            if(checkMail() && checkPhone()){
                var jqxhr = $.ajax({
                    url: url,
                    method: "POST",
                    dataType: "json",
                    data: $form.serialize()
                }).success(
                    $('#name').val(''),
                    $('#phone').val(''),
                    $('#email').val(''),
                    $('#address').val(''),
                    alert("Gửi form thành công")
                )
            }
            if(!checkMail() || !checkPhone()){
                alert(Error)
            }
        })        
    },[])
    return(
        <div className="submit-form">
        <div className="submit-form-left">
            <h2>with demo You will get</h2>
            <div class="bg-form"></div>
        </div>
        <div className="submit-form-right">
            <form id="test-form" method="POST">
                <table style={{width:"85%"}}>
                    <tr>
                        <td></td>
                        <td><h2>Request a demo</h2></td>
                    </tr>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" name="Name" id='name'/></td>
                    </tr>
                    <tr>            
                        <td><label>Email</label></td>
                        <td><input type="email" name="Email" id="email"/></td>
                    </tr>
                    <tr>
                        <td><label>Phone</label></td>
                        <td><input type="text" name="Phone" id='phone'/></td>
                    </tr>
                    <tr>
                        <td><label>Address</label></td>
                        <td><input type="text" name="Address" id='address'/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style = {{textAlign:"center",width:"50%"}}><button type="submit"id="submit-form">Submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    );
}
export default Form;