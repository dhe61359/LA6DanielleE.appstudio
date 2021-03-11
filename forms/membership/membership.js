let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let firstName = "";
btnSubmit.onclick=function(){
  firstName = inptName.value
  if(members.includes(firstName))
    lblMembershipForm.textContent = 'You are a member.'
  else
    lblMembershipForm.textContent = 'You are not a member. I will add you.'
    members.push(firstName);
    console.log(members);
}