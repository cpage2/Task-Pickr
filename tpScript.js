let hpArray = []; //high priority tasks
let lpArray = []; // low priority tasks

const hpInput = document.querySelector('#hp'); // hp input value
const hpItem = document.querySelector('#hpTask');//list item

const lpInput = document.querySelector('#lp'); // hp input value
const lpItem = document.querySelector('#lpTask');//list item


// On enter of task, starts functions
hpItem.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){

        createList('highPriority',hpInput,hpArray);

    }
}

)

lpItem.addEventListener("keypress", (f)=>{
    if(f.key === "Enter"){

        createList('lowPriority',lpInput,lpArray);
         
    }
}

)


// Pickr Button

const pickButton = document.querySelector('.pick');

function getRandIndex(x){
    return Math.floor(Math.random() * x);
}


pickButton.addEventListener('click',(e)=>{
    // Randomly pick a hp and lp task
    // Display them on second card in order of hp

    let hpPick = hpArray[getRandIndex(hpArray.length)];
    let lpPick = lpArray[getRandIndex(lpArray.length)];

    const item1 = document.querySelector('#item1');//li item 1
    const item2 = document.querySelector('#item2');// list item 2
    const exclaim = document.createElement('img');
    exclaim.setAttribute('src','exclaim.png')

    exclaim.style.width = '7%';


    if(hpPick != undefined ){
        item1.innerHTML = hpPick + '   ' ;
        item1.appendChild(exclaim);

    }else{
        item1.innerHTML = "N/A";
    }

    if(lpPick != undefined){
        item2.innerHTML = lpPick;
    }else{
        item2.innerHTML = "N/A"
    }
     

})



// functions for list creation and deletion
function IDsChecks(a,b,c,d, hiLow){ //gives ids to new list items and checkboxes & delete functioning 
   
    for(let i = 1; i <= a.length; i++){
        b.id = `task${i}`;
        c.id = `chbox${i}`;
        d.id = `lb${i}`; 

        let clickedBox = document.querySelector(`div.${hiLow} #chbox${i}`);
        let listItem  = document.querySelector(`div.${hiLow} #task${i}`);
        let label = document.querySelector(`div.${hiLow} #lb${i}`);


        clickedBox.addEventListener('click', (e)=>{ //clicked box gets filled then item disappears
            clickedBox.setAttribute('src','CheckboxFill.png');

            // Delayed remove of list item
            setTimeout(()=>{ 
                listItem.remove();

                for(let j = 0; j >= a.length; i--){
                     
                    a.splice(a.indexOf(label.innerHTML), 1);

                }
               
                
            },'1000')
            
        })  

        
   }
   
}

function createList(listName,inputName,arrayName){
    let chBox = document.createElement('img');
    chBox.setAttribute('src', 'ChBox.png');
    chBox.style.width = '8%';

    let chBoxFilled = document.createElement('img');
    chBoxFilled.setAttribute('src', 'CheckboxFill.png');
    chBoxFilled.style.width = '8%';
    
    let List = document.querySelector(`div.${listName}`);//div
    
    let label = document.createElement('label');

    let newListItem  = document.createElement('li');
    newListItem.className = 'list-group-item';
    newListItem.id = listName;
  
    label.innerHTML = inputName.value;       
  
    newListItem.append(chBox);
    newListItem.appendChild(label);//adds new list item to ul

    
    List.appendChild(newListItem);
    
    // Add input to Array
    arrayName.push(label.innerHTML);
   
    inputName.value = "";//resets input value
    
    // let className = listName;//used to differentiate between high or low tasks

     IDsChecks(arrayName,newListItem,chBox,label,listName);

}



