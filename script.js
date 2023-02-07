//sidebars 

const menuIteams = document.querySelectorAll('.menu-item');

// messages

const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span');
let root=document.querySelector(':root');

const colorPallete=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');
const storyviewer=document.querySelector('.story-viewer')
// sidebar
//remove active class from all menu iteams 
const secondary=document.querySelector('.both');



const story=document.querySelectorAll('.story');

const closeStory=document.querySelector('.cut .uil-times');
const changeActiveIteam = () => {
    menuIteams.forEach(item => {
        item.classList.remove('active');
    })
}

menuIteams.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveIteam();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('#notifications .notification-count').style.display = 'block';
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})



// messages 
//search chats 

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {

        // console.log(chat.querySelector('h5').textContent);
        let name = chat.querySelector('h5').textContent.toLowerCase();
        // console.log(name);
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';

        }
        else {
            chat.style.display = 'none';
            console.log("Not found");
        }
    })
}


//search chat

messageSearch.addEventListener('keyup', searchMessage);



// highlish message card when message 
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// temp/display custamization 


// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal 
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


//remove the active class from the spans or font size selectors 

const removeSizeSelector= ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}


//************************** *//

fontSizes.forEach(size =>{

    
    size.addEventListener('click',()=>{
        let fontSize;
       removeSizeSelector();
       size.classList.toggle('active');
    if(size.classList.contains('font-size-1'))
    {
        fontSize='0.6em';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }
    
    else if(size.classList.contains('font-size-2'))
    {
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-7rem');
        fontSize='0.8em';
    }
    
    else if(size.classList.contains('font-size-3'))
    {
        // continue;
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-18rem');
        fontSize='0.9em';
    }
    
    else if(size.classList.contains('font-size-4'))
    {
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
        fontSize='1em';
    }
    else if(size.classList.contains('font-size-5'))
    {
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
        fontSize='1.1em';
    }
    //cahange font size of the root html element 
   document.querySelector('html').style.fontSize=fontSize;
   })


})

//remove active class from 

const changeActiveColorClass=()=>{
    colorPallete.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//change primary color 

colorPallete.forEach(color=>{
    color.addEventListener('click',()=>{
        changeActiveColorClass();
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2'))
        {
            primaryHue=52;
        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue=352;
        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue=152;
        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue=202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})



//Background color 

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}



Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class

    Bg2.classList.add('active');
    //remove activeclass from the others 

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class

    Bg3.classList.add('active');
    //remove activeclass from the others 

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})
Bg1.addEventListener('click',()=>{

    //add active class

    Bg1.classList.add('active');
    //remove activeclass from the others 

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // window.location.reload();
    darkColorLightness='17%';
    whiteColorLightness='100%';
    lightColorLightness='95%';
    changeBG();
})

//story handleer

story.forEach((story)=>
{
    story.addEventListener(('click'),(ele)=>{
        console.log(ele.target);
        storyviewer.style.display='grid';
        // storyviewer.querySelector('.head.p').textContent="laxmanSingh";
        secondary.style.display='none';
        // console.log(ele.target);
    })
})


closeStory.addEventListener(('click'),(event)=>{
    secondary.style.display='block';
    storyviewer.style.display='none';


})

