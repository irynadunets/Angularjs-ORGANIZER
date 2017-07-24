var myApp=angular.module("myApp",[]);
myApp.controller("TimeCtrl",TimeCtrl);
function TimeCtrl($scope){
var currentDate = new Date();
$scope.timeString=currentDate.toTimeString();
$scope.updateTime=function(){
var currentDate = new Date();
$scope.timeString=currentDate.toTimeString();
} }
myApp.controller("CalculatorCtrl",CalculatorCtrl);
function CalculatorCtrl()
{
    
    this.buttonClicked=function(button){
        this.selectedOperation=button;
    }
    this.computeResult=function(){
        var number1=parseFloat(this.input1);
        var number2=parseFloat(this.input2);
        if(this.selectedOperation==='+')
        {
           this.resultValue = number1 + number2; 
        }
        else if(this.selectedOperation=='-')
        {
           this.resultValue = number1 - number2; 
        }
        else if(this.selectedOperation=='*')
        {
           this.resultValue = number1 * number2; 
        }
        else if(this.selectedOperation=='/')
        {
           this.resultValue = number1 / number2; 
        }
    }
}


