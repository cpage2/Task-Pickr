// Create variables

const hpArray = []; //high priority tasks
const lpArray = []; // low priority tasks
const trash = document.createElement('i');
trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
trash.className = 'fa-solid fa-trash-can';


const hpInput = document.querySelector('#hp'); // hp input value

const hpItem = document.querySelector('#hpTask');//list item


hpItem.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        // Display text
        // Add new li/input item with trash icon
        // then new event onclick for ticon
        
        let newHPItem = document.createElement("li");
        
        newHPItem.innerHTML = `${hpInput.value}     ${trash.innerHTML}`;
        hpItem.appendChild(newHPItem);//adds new list item to ul
        
       
       
       

       
        // Add input to HP Array
        hpArray.push(hpInput.value);

       
        hpInput.value = "";//resets input value
        


    }
}

)


