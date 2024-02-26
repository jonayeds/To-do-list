let date = new Date()
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById('date').innerText = `${week[(date.getUTCDay())-1]}    ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} `
let listNum =2


 const newElement =  ()=>{
    document.getElementById('addBtn').remove()

    
    let newDiv = document.createElement('div')
   newDiv.innerHTML =`
    <label for="" class="text-3xl font-caveat font-bold "><span id="num">${listNum}</span>.</label><input type="text" class="ml-3 text-[#ffffffa8] bg-transparent border-b-2 border-dashed focus:outline-none font-caveat text-3xl font-extralight border-[#21212122]"><div class="w-4 rounded-sm cursor-pointer h-4 border-solid border-[1px] border-white checker hidden flex justify-center items-center " ><i class="fa-solid fa-check text-[#151c45] hidden"></i></div><button onclick="newElement()" class="font-caveat text-5xl bg-[#ffffff2f] px-3 rounded-full ml-3" id="addBtn">+</button>
 `
 newDiv.classList.add('flex')
 newDiv.classList.add('item-center')
 document.getElementById('parent').appendChild(newDiv)
 
 listNum++
 
 checkItems()
}


function checkItems (){
    let checker = document.getElementsByClassName('checker')
    let input = document.getElementsByTagName('input')
    
    for(let i=0;i<checker.length-1;i++){
        checker[i].classList.remove('hidden')
        checker[i].addEventListener('click',function(){
            checker[i].classList.add('bg-white')
            checker[i].childNodes[0].classList.remove('hidden')
            input[i].classList.add('line-through')
            
        })
    }
}