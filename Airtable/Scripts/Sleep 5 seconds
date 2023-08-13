/*
This function causes the program to pause for the specified number of milliseconds 
by looping and checking the current time until the desired amount of time has passed.
*/
function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
sleep(5000);
