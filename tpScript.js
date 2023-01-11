var hpArray = []; //high priority tasks
var lpArray = []; // low priority tasks

const hpInput = document.querySelector('#hp'); // hp input value
const hpItem = document.querySelector('#hpTask');//list item

const lpInput = document.querySelector('#lp'); // hp input value
const lpItem = document.querySelector('#lpTask');//list item
let exclaim = document.createElement('img');
exclaim.setAttribute('src','exclaimPink.png')//highlight imp tasks
let deletedTask = '';//just to check if deleted item is being pulled



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
   
    

    exclaim.style.width = '7%';


    if(hpPick != undefined ){
        item1.innerHTML = hpPick + '   ' ;
        item1.appendChild(exclaim);

    }else{
        item1.innerHTML = "";
    }

    if(lpPick != undefined){
        item2.innerHTML = lpPick;
    }else{
        item2.innerHTML = ""
    }
     

})

//Theme Changer
const bubbleButton = document.querySelector('#bubbles');
const nightButton = document.querySelector('#night');
const footer = document.querySelector('footer');
let bg = document.body;
let line = document.querySelector('.line');
let bubbleBG = "url('bubbles.png')";
let nightBG = "url('night2.jpg')";
let checkPink = 'CheckboxFill.png';
let checkBlue = 'CheckboxNight.png';

line.id = 'pinkLine';




//click and hover event for each button
//current theme has faded button

//mouseover then inner click event? 

let nightColor = 'rgba(102, 113, 171, 0.8)';
let bubbleColor = "rgba(255, 167, 212, 0.8)";

    
    nightButton.addEventListener('click',(e)=>{

        themeChanger(nightBG,nightColor,'exclaimBlue.png', "blueLine" );//img url, line color, pickbutton color, exclaim attribute
        footer.style.visibility = 'visible';
      
       
    })
    

     nightButton.addEventListener('mouseenter', (e)=>{
             nightButton.style.width = '110px';
             nightButton.addEventListener('mouseout',(e)=>{
                 nightButton.style.width = '100px';
             })
        
     })






    bubbleButton.addEventListener('click',(e)=>{
       
        themeChanger(bubbleBG,bubbleColor,'exclaimPink.png', "pinkLine" );//img url, line color, pickbutton color, exclaim attribute
        footer.style.visibility = 'hidden';
       
    })
    
     bubbleButton.addEventListener('mouseenter', (e)=>{
             bubbleButton.style.width = '110px';
             bubbleButton.addEventListener('mouseout',(e)=>{
                 bubbleButton.style.width = '100px';
             })
        
     })






function themeChanger(bgImg,themeColor, exclaimImg, lineID){
    
    line.id = lineID;
    bg.style.backgroundImage = bgImg;
    line.style.background = themeColor;
    pickButton.style.backgroundColor = themeColor;
    exclaim.setAttribute('src',exclaimImg);

    
       
    
   

}



// functions for list creation and deletion

 function IDsChecks(arrayName,taskItem,checkBox,label, hiLow){ //gives ids to new list items and checkboxes & delete functioning 

     for(let i = 1; i <= arrayName.length; i++){
         taskItem.id = `task${i}`;
         checkBox.id = `chbox${i}`;
         label.id = `lb${i}`; 
        
        }


     for(let i = 0; i < arrayName.length; i++){

        let clickedBox = document.querySelector(`div.${hiLow} #chbox${i+1}`);
        let listItem  = document.querySelector(`div.${hiLow} #task${i+1}`);
        let label = document.querySelector(`div.${hiLow} #lb${i+1}`);

        if(clickedBox != undefined || clickedBox != null){


            
            clickedBox.addEventListener('click', (e)=>{ //clicked box gets filled then item disappears

                       
                        if(line.id == "pinkLine"){
                            clickedBox.setAttribute('src', checkPink);

                        }else{
                            clickedBox.setAttribute('src', checkBlue);

                        }
                        
    
                        // Delayed remove of list item
                        setTimeout(()=>{ 
                            listItem.remove();
                            deletedTask = label.innerHTML;

                                let tempArr = arrayName.filter(item => item !== deletedTask);
            
                                arrayName[i] = tempArr[i]; //replaces a contents with temp Arr contents
                                arrayName.length = tempArr.length; //changes length to keep from getting undefined slots
                                

                                i--;//to keep from deleting more than one item

                        },'1000')
                        
                
               
             })  


        }else{
            clickedBox = document.querySelector(`div.${hiLow} #chbox${i+1}`); //relabels ids if they become undefined after deletion
        }
    
   }

 }


function createList(listName,inputName,arrayName){
    let chBox = document.createElement('img');
    chBox.setAttribute('src', 'ChBox.png');
    chBox.style.width = '8%';

    let chBoxFilled = document.createElement('img');
    chBoxFilled.setAttribute('src', 'CheckboxFill.png');
    chBoxFilled.style.width = '8%';
    
    let List = document.querySelector(`div.${listName}`);
    
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

    
        IDsChecks(arrayName,newListItem,chBox,label,listName);
 

}



