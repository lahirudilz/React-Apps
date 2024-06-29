const dummyApiResponse = {
  showLightDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
};

function featureFlagServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse, 500));
    else reject("Error Occured! Try again.");
  });
}

export default featureFlagServiceCall;
