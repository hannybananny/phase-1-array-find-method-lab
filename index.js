// code your solution here
function superbowlWin(array){

    let win = array.find(record => record.result === 'W')
    console.log(win)
    if (win){
        return win.year
    }
}

