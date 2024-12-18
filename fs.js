var fs = require('fs');
// creat me.txt file
fs.readFile('me.txt','utf8',(err,data)=> {

  // create new dir
  fs.mkdir('new',()=>{
    // create wrt.txt file and copying me.txt content into wrt.txt
    fs.writeFile('./new/wrt.txt',`${data}Thank you My Jesus Christ.`,()=>{});
    console.log('DONE!!!');
    // delete wrt.txt file
    fs.unlink('./new/wrt.txt', ()=>{
      console.log('DELETED');
      var i=5;

      var delay = setInterval(()=>{
        console.log("Deleting 'new' Folder in " + i);
        i--;
        if(i == 0) clearInterval(delay);
      },1000);

    });

  });

  //delete new dir
  fs.rmdir('new',()=>{
    console.log("DONE DELETING NEW FOLDER");
  });
});
