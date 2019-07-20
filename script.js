
// -----------------------------------------------------INPUT
function Input() {
    var a = document.getElementById('register-form');

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_1";
    b.placeholder = "Type";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_2";
    b.placeholder = "Placeholder";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_3";
    b.placeholder = "ID";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_4";
    b.placeholder = "Class";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_5";
    b.placeholder = "Name";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Input_6";
    b.placeholder = "Value";
    a.appendChild(b);

    var b = document.createElement('div');
    b.className = "ok-div-Input";
    b.id = "Input_ok_div";
    b.style.marginLeft = "20px";
    b.setAttribute("onclick", "CreateInput()");
    a.appendChild(b);
}

//-----------------------------------------------------Password
function Password() {
    var a = document.getElementById('register-form');

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_1";
    b.value = "Password";
    b.readOnly = true;
    b.placeholder = "Type";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_2";
    b.placeholder = "Placeholder";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_3";
    b.placeholder = "ID";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_4";
    b.placeholder = "Class";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_5";
    b.placeholder = "Name";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Password_6";
    b.placeholder = "Value";
    a.appendChild(b);

    var b = document.createElement('div');
    b.className = "ok-div-Password";
    b.id = "Password_ok_div";
    b.style.marginLeft = "20px";
    b.setAttribute("onclick", "CreatePassword()");
    a.appendChild(b);
}

//-----------------------------------------------------Button
function Button() {
    var a = document.getElementById('register-form');

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Button_1";
    b.placeholder = "id";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Button_2";
    b.placeholder = "Name";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Button_3";
    b.placeholder = "Value";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.id = "Button_4";
    b.placeholder = "Text";
    a.appendChild(b);


    var b = document.createElement('div');
    b.className = "ok-div-Button";
    b.id = "Button_ok_div";
    b.style.marginLeft = "20px";
    b.setAttribute("onclick", "CreateButton()");
    a.appendChild(b);
}


//-----------------------------------------------------Select
function Select() {
    var a = document.getElementById('register-form');

    var b = document.createElement('input');
    b.type = "text";
    b.className = "select_option_Text";
    b.placeholder = "Text";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.className = "select_option_Value";
    b.placeholder = "Value";
    a.appendChild(b);

    var b = document.createElement('input');
    b.type = "Button";
    b.className = "select_option_Button";
    b.setAttribute("onclick", "AddRow()");
    b.value = "AddRow";
    a.appendChild(b);

    var b = document.createElement('div');
    b.className = "ok-div-Button";
    b.id = "Button_ok_div";
    b.style.marginLeft = "20px";
    b.setAttribute("onclick", "CreateSelect()");
    a.appendChild(b);

}

//-------------------------------------------------------------------------

function selectElement() {
    var a = document.getElementById('select_id').value;

    document.getElementById('register-form').innerHTML = "";

    switch (a) {
        case "Input":
            Input();
            break;
        case "Select":
            Select();
            break;
        case "Password":
            Password();
            break;
        case "Button":
            Button();
            break;
        default:
            alert("Default");
            break;
    }
}

function show() {
    var a = document.getElementById('left');
    for (var i = 0; i < a.childElementCount; i++)
        alert(a.childNodes[i].value);
}

//-------------------------------------------------------Create

function CreateInput() {
    var a = document.getElementById('left');

    var b = document.createElement('input');

    b.type = document.getElementById('Input_1').value;
    b.placeholder = document.getElementById('Input_2').value;
    b.id = document.getElementById('Input_3').value;
    b.className = document.getElementById('Input_4').value;
    b.name = document.getElementById('Input_5').value;
    b.value = document.getElementById('Input_6').value;
    b.style.margin = "25px;";
    
    if(b.type.length>0 && b.name.length>0 && b.id.length>0)
    {
        a.appendChild(b);
    }
    else
    {
        alert("Input Id, Type and Name")
    }
    

}

function CreatePassword() {
    var a = document.getElementById('left');

    var b = document.createElement('input');

    b.type = document.getElementById('Password_1').value;
    b.placeholder = document.getElementById('Password_2').value;;
    b.id = document.getElementById('Password_3').value;;
    b.className = document.getElementById('Password_4').value;;
    b.name = document.getElementById('Password_5').value;;
    b.value = document.getElementById('Password_6').value;

    if(b.name.length>0 && b.id.length>0)
    {
        a.appendChild(b);
    }
    else
    {
        alert("Input Id and Name")
    }
    

}

function CreateButton() {
    var a = document.getElementById('left');

    var b = document.createElement('Button');

    b.id = document.getElementById('Button_1').value;
    b.name = document.getElementById('Button_2').value;
    b.value = document.getElementById('Button_3').value;
    b.innerText = document.getElementById('Button_4').value;

    if(b.name.length>0 && b.id.length>0 && b.innerText.length>0)
    {
        a.appendChild(b);
    }
    else
    {
        alert("Input Id, Text and Name")
    }
    
}

function CreateSelect() {
    var a = document.getElementById('left');

    var b = document.createElement('Select');

    var c = document.getElementsByClassName('select_option_Value');
    var e = document.getElementsByClassName('select_option_Text');

    var t=true;

    for (var i = 0; i < c.length; i++) {
        var d = document.createElement('option');
        d.value = c[i].value;
        d.innerText = e[i].value;
        if(d.value.length>0 && d.innerText.length>0)
        {
            b.appendChild(d);
        }
        else
        {
            t=false;
            alert("Input Value and Text")
        }
        
    }

    if(t)
    {
        a.appendChild(b);
    }   
}


//----------------------------------------------------------------Row
function AddRow() {
    var a = document.getElementById('register-form');

    var c = document.createElement('div');

    var b = document.createElement('input');
    b.type = "text";
    b.className = "select_option_Text";
    b.placeholder = "Text";
    c.appendChild(b);

    var b = document.createElement('input');
    b.type = "text";
    b.className = "select_option_Value";
    b.placeholder = "Value";
    c.appendChild(b);

    var b = document.createElement('input');
    b.type = "Button";
    b.className = "select_option_Button";
    b.setAttribute("onclick", "RemoveRow(this)");
    b.value = "RemoveRow";
    c.appendChild(b);

    a.appendChild(c);
}

function RemoveRow(a) {
    a.parentElement.parentNode.removeChild(a.parentElement);
}

//-------------------------------------------------------------Show
function show()
{
    console.clear();
    alert("Console");
    var left=document.getElementById('left');
    
    for(var i=2; i<left.childNodes.length;i++)
    {
        console.log(left.childNodes[i]);
    }
}

