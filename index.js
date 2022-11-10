/* let elem = document.querySelector('.head') */
let elem_description = document.querySelector('.main_description')
let main_contact = document.querySelector('.main_contact')
main_contact.style.display = 'none'

document.addEventListener('click',e => {
  
  let element  = e.target 
  let element_content = e.target.innerHTML
  if(element_content == 'About me'){
    elem_description.style.display = 'block'
    main_contact.style.display = 'none'
    console.log(element_content)
}   
if(element_content == 'Education'){
    main_contact.style.display = 'none'
    elem_description.style.display = 'none'
    console.log(element_content)
}
if(element_content == 'Experience'){
    
    main_contact.style.display = 'none'
    elem_description.style.display = 'none'
    console.log(element_content)
}
if(element_content == 'Skills'){
  
    main_contact.style.display = 'none'
    elem_description.style.display = 'none'
    console.log(element_content)
}
if(element_content == 'Projects'){
    
    main_contact.style.display = 'none'
    elem_description.style.display = 'none'
    console.log(element_content)
}
if(element_content == 'Links'){
   
    main_contact.style.display = 'none'
    elem_description.style.display = 'none'
    console.log(element_content)
}
if(element_content == 'Contact'){
    main_contact.style.display = 'block'
    elem_description.style.display = 'none'
   
    console.log(element_content)
}

})
