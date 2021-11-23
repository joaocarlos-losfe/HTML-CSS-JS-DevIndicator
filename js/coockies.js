function setCookie(section_name, values, expiration_date) 
{
    var d = new Date();
    d.setTime(d.getTime() + (expiration_date*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = section_name+"="+values+"; "+expires;
}

function getCookie(section_name) 
{
    
    var name = section_name + "=";
    var ca = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0)==' ') 
            c = c.substring(1);

        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function checkCookie() 
{
    var section = getCookie("user_section");

    if (section != "") 
    {
        alert("Bem vindo de volta ao nosso site :)");
    } 
    else 
    {
        section = "Bem vindo ao DevIndicator! Aproveite :)";
        alert(section);

        if (section != "" && section != null) 
        {
            setCookie("user_section", section, 30);
        }
    }
}