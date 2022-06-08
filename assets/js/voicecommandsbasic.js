var outlook;
var nuv;
var saksham;
var discord;
var gmail;
var github;
var closegoogle;
function opendiscord(){
    discord = window.open("https://discord.com/channels/@me")
};
function closediscord(){
    discord.close();
};

function opengmail(){
    gmail = window.open("https://mail.google.com/mail/u/0/#inbox")
};
function closegmail(){
    gmail.close();
};

function openoutlook(){
    outlook = window.open("https://outlook.office365.com/mail/inbox")
};

function closeoutlook(){
    outlook.close();
};

function opennuv(){
    nuv = window.open("https://nuv.ac.in/pdf/AboutUs/Holiday_List.pdf")
};

function closenuv(){
    nuv.close();
};
function openwhatsapp(){
    whatsapp = window.open("https://web.whatsapp.com/")
};

function closewhatsapp(){
    whatsapp.close();
};
function opengithub(){
    github = window.open("https://github.com/")
};

function closegithub(){
    github.close();
};
function saksham(){
    saksham = window.open("https://discordapp.com/users/822023787037196338")
};

var google = function(tag) {
    var url = 'https://www.google.com/search?q='+tag;
    
    closegoogle = window.open(url)
    
  }

function closegoogle(){
    closegoogle.close();
};
if (annyang) {

  const commands = {
    'outlook': () => { openoutlook(); },
    'close outlook': () => { closeoutlook(); },
    'holiday': () => { opennuv(); },
    'close holiday': () => { closenuv(); },
    'whatsapp': () => { openwhatsapp(); },
    'close whatsapp': () => { closewhatsapp(); },
    'saksham':() => {saksham();},
    'discord':() => {opendiscord();},
    'close discord':() => {closediscord();},
    'mail':() => {opengmail();},
    'close mail':() => {closegmail();},
    'search *tag': google,
    'close search':() => {closegoogle();},
    'github':() => {opengithub();},
    'close github':() => {closegithub();},
   
    
    
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}