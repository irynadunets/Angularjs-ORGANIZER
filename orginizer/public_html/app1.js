var app=angular.module("modulesApp",[]);
app.controller('Ctrl', Ctrl);
function Ctrl(){
  this.edit=false;
  this.books = [
      "Otelli",
      "Aleri",
      "GOTO"   
  ];
  this.addnewBook=function(){
      this.books.push(this.newbook);
      this.newbook="";
  }
  this.Edit=function(){
      this.edit=!this.edit;
  }
  
  this.Delete=function(index){
      this.books.splice(index,1);
  }
  }

