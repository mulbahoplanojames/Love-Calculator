const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name1 = document.querySelector("#name1").value.trim();
  const name2 = document.querySelector("#name2").value.trim();
  const displayOutPut = document.querySelector("#displayOutPut");
  const lovePercentage = Math.floor(Math.random() * 101);

  if (name1 === "" || name2 === "") {
    alert("Please fill in both names");
  } else {
    if (lovePercentage > 0 && lovePercentage <= 35) {
      displayOutPut.innerHTML = `${name1} and ${name2}  love percentage is ${lovePercentage}% <br /> <hr />  Don't Match, Don't worry; every love story has its unique challenges. Face them together!`;
    } else if (lovePercentage > 35 && lovePercentage <= 50) {
      displayOutPut.innerHTML = `${name1} and ${name2} love percentage is ${lovePercentage}% <br/>  <hr /> A strong foundation of friendship is the key to lasting love. Keep nurturing your bond and watch it blossom into something beautiful`;
    } else if (lovePercentage > 50 && lovePercentage <= 75) {
      displayOutPut.innerHTML = `${name1} and ${name2} love percentage is ${lovePercentage}% <br/> <hr />  You both have a good chance at making it work. Keep the love alive and watch it grow!`;
    } else {
      displayOutPut.innerHTML = `${name1} and ${name2} love percentage is ${lovePercentage}% <br/> Congratulations! You've found your soulmate, Prepare for a magical journey together.`;
    }
  }

  // console.log("click");
  // console.log(lovePercentage);
});
