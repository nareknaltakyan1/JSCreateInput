function OnLoad()
{
    var body=document.getElementById('body');
    var select = document.createElement('select');
    select.id="select_id";

    var option = document.createElement('option');
    option.value="---";
    option.innerText="---";
    select.appendChild(option);

    option = document.createElement('option');
    option.value="Input";
    option.innerText="Input";
    option.id="Input_option_id";
    select.appendChild(option);

    option = document.createElement('option');
    option.value="Password";
    option.innerText="Password";
    option.id="Password_option_id";
    select.appendChild(option);

    option = document.createElement('option');
    option.value="Button";
    option.innerText="Button";
    option.id="Button_option_id";
    select.appendChild(option);

    option = document.createElement('option');
    option.value="Select";
    option.innerText="Select";
    option.id="Select_option_id";
    select.appendChild(option);

    var form = document.createElement('form');
    form.appendChild(select);

    var br=document.createElement('br');
    form.appendChild(br);
    br=document.createElement('br');
    form.appendChild(br);
    br=document.createElement('br');
    form.appendChild(br);

    var ok_div=document.createElement('div');
    ok_div.className="ok-div";
    ok_div.setAttribute("onclick", "selectElement()");
    form.appendChild(ok_div);


    var right_top=document.createElement('div');
    right_top.className="right_top";
    right_top.appendChild(form);
    
    var right_bottom=document.createElement('div');
    right_bottom.id="right_bottom";
    right_bottom.className="right_bottom";
    

    var right=document.createElement('div');
    right.className="right";
    right.appendChild(right_top);
    right.appendChild(right_bottom);

    var left=document.createElement('div');
    left.id="left";
    left.className="left";

    var register_form=document.createElement('form');
    register_form.id="register-form";
    right_bottom.appendChild(register_form);


    var ok_div_show=document.createElement('div');
    ok_div_show.className="ok-div";
    ok_div_show.setAttribute("onclick", "show()");
    ok_div_show.style.backgroundColor="red";
    ok_div_show.style.marginTop="20px";
    left.appendChild(ok_div_show);
    br=document.createElement('br');
    left.appendChild(br);


    body.appendChild(right);
    body.appendChild(left);

}


