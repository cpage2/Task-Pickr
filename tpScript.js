// Create variables

const hpArray = []; //high priority tasks
const lpArray = []; // low priority tasks



const hpInput = document.querySelector('#hp'); // hp input value
const hpItem = document.querySelector('#hpTask');//list item

const lpInput = document.querySelector('#lp'); // hp input value
const lpItem = document.querySelector('#lpTask');//list item




hpItem.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        // Display text
        // Add new li/input item with trash icon
        // then new event onclick for ticon
        
        let newHPItem = document.createElement("li");
        
        newHPItem.innerHTML = hpInput.value;
        hpItem.appendChild(newHPItem);//adds new list item to ul
       
        
       
        // Add input to HP Array
        hpArray.push(hpInput.value);

       
        hpInput.value = "";//resets input value
        


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
