import {all_ridels} from "../riddles/all_riddels.js"
import input from "analiza-sync"


export function GettingPlayerName(){
    const name_player=input("enter yuor name")
    return name_player
}
export function  createPlayer(name){
    return {"name":name,"time":null}
}
export function addSolveTime(player, seconds){
    return player.time=seconds
}
export function showStats(player) {

}
export function askRiddle(riddleObj) {
    const answer=input(`name:${riddleObj.name},taskdescription:${riddleObj.taskDescription}`)
    return riddleObj,answer
}
export function answerCheck(answer,riddleObj){
    if(riddleObj.correctAnswer==answer){
        return true
    }else{
        return false
    }
}  
    export function measureSolveTime(fn){}
export function showMenu(){
    
    while(choice!="1" || choice!="2"){
    var choice=input('Welcome to the puzzle game\n1.Register as a player and play\n2.Exit\nEnter your choice')
    if(choice=="1"){
        return true
    }
    else{return false}
    }
}
export function theGame(){
    for(let i=0;i<all_ridels;i++){
            if(answerCheck(askRiddle(all_ridels[i]))==true){
                console.log("Excellent")
            }
            else{console.log("mistake");
            }}}

console.log(answerCheck(askRiddle(all_ridels[0])))







