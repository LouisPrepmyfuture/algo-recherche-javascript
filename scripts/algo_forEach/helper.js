// supprime les doublons d'un tableau 
function sup_duplicate(list){
  let new_list =[]
  new_list =  list.filter(key => new_list.includes(key) === false)
  return new_list
}

function sup_child(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function actualise_tag(new_tag,content_old_list,  type_tag){
  sup_child(content_old_list.content_list)
  create_dropdoown(new_tag, content_old_list, type_tag)
}

// renvoi un tableau de tag selon le tag recherche a l'aide de sa .class
function arrayPushString(tag){
  let tag_array = []
  let list_tag = document.querySelectorAll(tag)
  list_tag.forEach(tag => {
    tag_array.push(tag.innerHTML)
  });
  return tag_array
}

 // event si je click sur un des ingredients mes cette ingredients 
 function addEventListDropdown(list_tag, type_tag){
   list_tag.forEach(tag => {
      tag.addEventListener("click", function(){
       create_btn_search(this.textContent,  type_tag)
      })
   });
}