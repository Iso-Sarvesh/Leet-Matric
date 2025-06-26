document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");

  const easyProgressCircle = document.querySelector(".easy-progress");


  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");

  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");

  const hardLabel = document.getElementById("hard-label");

  const cardStatsContainer = document.querySelector(".stats-card");


  //return true or false based on regex:::
  function validateUserName(username) {
    if (username.trim() === "") {
      alert("User Name Should not be empty");
      return false;
    }

    const regex = /^[a-zA-Z0-9_-]{1,15}$/;

    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("Invalid userName");
    }
    return isMatching;
  }

  async function fetchUserDetails(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch the User details");
      }
      const parsedData = await response.json();
      console.log("Loggong data: ", parsedData);

      //here we call the function to display the data in interface::
      displayUserData(parsedData);

    } catch (error) {
      statsContainer.innerHTML = "<h1>No Data Found</h1>";
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;

    }
  }


//   acceptanceRate
// : 
// 61.15
// contributionPoints
// : 
// 350
// easySolved
// : 
// 72
// hardSolved
// : 
// 39
// mediumSolved
// : 
// 116
// message
// : 
// "retrieved"
// ranking
// : 
// 504627
// reputation
// : 
// 0
// status
// : 
// "success"
// submissionCalendar
// : 
// {1730246400: 13, 1730332800: 4, 1730419200: 1, 1730505600: 30}
// totalEasy
// : 
// 873
// totalHard
// : 
// 827
// totalMedium
// : 
// 1835
// totalQuestions
// : 
// 3535
// totalSolved
// : 
// 227




function updateProgress(solved,total,label,circle){

    const progressDegree = (solved/total)*100;

    circle.style.setProperty("--progress-degree",`${progressDegree}%`);
     label.textContent = `${solved}/${total}`;

}

  function displayUserData(parsedData){
      const totalQues = parsedData.totalQuestions;
      const totalEasyQues = parsedData.totalEasy;
      const totalMediumQues = parsedData.totalMedium;
      const totalHardQues = parsedData.totalHard;

      const solvedTotalQues = parsedData.totalSolved;
      const  solvedTotalEasyQues = parsedData.easySolved;
      const  solvedTotalMediumQues = parsedData.mediumSolved;
      const  solvedTotalHardQues = parsedData.hardSolved;



      updateProgress(solvedTotalEasyQues,totalEasyQues,easyLabel,easyProgressCircle);

      updateProgress(solvedTotalMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);

      updateProgress(solvedTotalHardQues,totalHardQues,hardLabel,hardProgressCircle);

  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    console.log(username);

    if (validateUserName(username)) {
      fetchUserDetails(username);
    }
  });
});
