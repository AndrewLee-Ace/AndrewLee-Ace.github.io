const ctx = document.getElementById('bar-chart');
const context = document.getElementById('doughnut-chart');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Green", "Orange", "Purple", "Yellow", "Black", "White"],
      datasets: [
        {
          label: "Favorie Colors",
          backgroundColor: ["Red", "Blue","Green","Orange","Purple","Yellow","Black", "White"],
          data: [10,15,6,9,12,32, 21, 2],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Andrew Lee'
      }
    }
});

new Chart(context, {
    type: 'doughnut',
    data: {
      labels: ["Apple", "Banana", "Orange", "Pear", "Grape", "Strawberry"],
      datasets: [
        {
          label: "Favorite Fruits",
          backgroundColor: ["Red", "Yellow","Orange","Green","Purple", "Pink"],
          data: [24,39,63,57,48,100]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Andrew Lee'
      }
    }
});