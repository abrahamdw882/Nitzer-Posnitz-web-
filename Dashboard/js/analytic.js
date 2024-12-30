     // Revenue Chart
     const revenueCtx = document.getElementById('revenueChart').getContext('2d');
     new Chart(revenueCtx, {
         type: 'line',
         data: {
             labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
             datasets: [{
                 label: 'Daily Revenue',
                 data: [10500, 11200, 9800, 12458, 11900, 13200, 12458],
                 borderColor: '#2980b9',
                 tension: 0.4,
                 fill: false
             }]
         },
         options: {
             responsive: true,
             plugins: {
                 title: {
                     display: true,
                     text: 'Weekly Revenue Trend'
                 }
             },
             scales: {
                 y: {
                     beginAtZero: true,
                     ticks: {
                         callback: value => '$' + value.toLocaleString()
                     }
                 }
             }
         }
     });

     // Product Sales Chart
     const productCtx = document.getElementById('productChart').getContext('2d');
     new Chart(productCtx, {
         type: 'bar',
         data: {
             labels: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'],
             datasets: [{
                 label: 'Sales by Category',
                 data: [450, 320, 280, 220, 190],
                 backgroundColor: [
                     '#3498db',
                     '#2ecc71',
                     '#e74c3c',
                     '#f1c40f',
                     '#9b59b6'
                 ]
             }]
         },
         options: {
             responsive: true,
             plugins: {
                 title: {
                     display: true,
                     text: 'Sales by Product Category'
                 }
             },
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });