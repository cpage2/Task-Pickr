let hpArray = []; //high priority tasks
const lpArray = []; // low priority tasks

const hpInput = document.querySelector('#hp'); // hp input value
const hpItem = document.querySelector('#hpTask');//list item

const lpInput = document.querySelector('#lp'); // hp input value
const lpItem = document.querySelector('#lpTask');//list item

const ulH = document.createElement('ul');//new ul to host tasks



function IDsChecks(a,b,c,d, hiLow){ //gives ids to new list items and checkboxes to be deleted 
   
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
              
                
                a.splice(a.indexOf(label.innerHTML), 1);

                   
                
            },'1000')
            
        })  

        
   }
   
}

hpItem.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){

// This cn be moved to a function

        // Display text
        // Add new li/input item with checkbox
        // then new event onclick for cBox

        let chBox = document.createElement('img');
        chBox.setAttribute('src', 'ChBox.png');
        chBox.style.width = '8%';

        let chBoxFilled = document.createElement('img');
        chBoxFilled.setAttribute('src', 'CheckboxFill.png');
        chBoxFilled.style.width = '8%';
        
        let HpList = document.querySelector('.highPriority');//div
        
        let label = document.createElement('label');

        let newListItem  = document.createElement('li');
        newListItem.className = 'list-group-item';

      
        label.innerHTML = hpInput.value;       
      
        newListItem.append(chBox);
        newListItem.appendChild(label);//adds new list item to ul

        

        HpList.appendChild(ulH);
        ulH.appendChild(newListItem);

      
        // Add input to HP Array
        hpArray.push(label.innerHTML);
       
        hpInput.value = "";//resets input value
        
        let hpClassName = 'highPriority';//used to differentiate between high or low tasks
        // add ids to list items
        IDsChecks(hpArray,newListItem,chBox,label,hpClassName);

       
       

   
    }
}


)




lpItem.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        // Display text
        // Add new li/input item with trash icon
        // then new event onclick for ticon
        
        let newLPItem = document.createElement("li");
        
        newLPItem.innerHTML = lpInput.value;
        lpItem.appendChild(newLPItem);//adds new list item to ul
        
       
        // Add input to HP Array
        lpArray.push(lpInput.value);

       
        lpInput.value = "";//resets input value
        
    }
}

)


// Pickr

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
