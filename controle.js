function valider(){
    let num=document.getElementById("num").value;
    if ((num.length!=8) || (isNaN(num)))
    {
        alert("Vérifier votre numéro")
        return false;
    }
    let np=document.getElementById("nom").value;
    if (alpha_esp(np)==false || np=="")
    {
        alert("Vérifier votre nom et prénom")
        return false;
    }
    let ch=document.getElementById("email").value;
    p1=ch.indexOf('@');
    p2=ch.indexOf('.');
    ch1=ch.substr(0,p1);
    ch2=ch.substr(p1+1,p2-p1-1);
    ch3=ch.substr(p2+1,ch.length-p2-1);
    if ((alpha_num(ch1)==false || ch1=="") || (p1==-1) || (ch2=="") || (p2==-1) || (ch3=="" || ch3.length<2 || ch3.length>4))
    {
        alert("Vérifier votre email")
        return false;
    }
    let h=document.getElementById("h").checked;
    let f=document.getElementById("f").checked;
    if (h==false && f==false)
    {
        alert("Un sexe doit être sélectionner")
        return false;
    }
    let l=document.getElementById("l").selectedIndex
    if (l==0)
    {
        alert("SVP selectionner votre age")
        return false;         
    }
}

function valider2(){
    let cin=document.getElementById("cin").value
    if ((cin.length!=8) || (isNaN(cin)))
    {
        alert("Vérifier votre cin")
        return false;
    }
    let n=document.getElementById("nom").value
    if (alpha_esp(n)==false || n=="")
    {
        alert("Vérifier le nom du délégué")
        return false;
    }
    let c=document.getElementById("c").checked
    if (c==false)
    {
        alert("Est-tu un robot ? ;)")
        return false;
    }
}

function alpha_esp(ch)
{
	test=true;
	for (i=0;i<ch.length;++i)
	if ((ch[i]<'a'||ch[i]>'z')&&(ch[i]<'A'||ch[i]>'Z')&&(ch[i]!=' '))
	test=false;
return test;
}

function alpha_num(ch)
{
	test=true;
	for (i=0;i<ch.length;++i)
	if ((ch[i]<'a'||ch[i]>'z')&&(ch[i]<'A'||ch[i]>'Z')&&(ch[i]<'0'||ch[i]>'9'))
	test=false;
	return test;
}