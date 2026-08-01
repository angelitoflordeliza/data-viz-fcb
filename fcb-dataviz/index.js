const dateElement = document.getElementById("date");
const currentDate = new Date();
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// const graphData = [
//     { name: "peter griffin", queryUrl: "search?q=1234", volume: 31233 },
//     { name: "retep niffirg", queryUrl: "search?q=1234", volume: 24510 },
//     { name: "megatron", queryUrl: "search?q=1234", volume: 18975 },
//     { name: "LOIS", queryUrl: "search?q=1234", volume: 98234 }
// ];

// const topics = graphData.map(item => item.name);
// const volumes = graphData.map(item => item.volume);

const ctx = document.getElementById('myChart');

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'fcc3be44ffmsh21102b64fd80d26p10ac7djsnb8e9b5df693c',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: 23424934})
};

fetch(url, options)
	.then(res => res.json())
	.then(data => {
		const trends = data.trends.slice(0, 10);
		console.log(data);
		const topics = trends.map(item => item.name);
		const volumes = [45230, 12890, 67340, 21560, 98400, 33720, 56100, 14890, 78230, 24500];

		Chart.defaults.font.family = 'Poppins';

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: topics,
				datasets: [{
					label: 'Trending Volume',
					data: volumes,
					borderWidth: 1,
					backgroundColor: context => {
						const barColors = [
							'#ff4d6d',
							'#ff9f1c',
							'#ffd60a',
							'#06d6a0',
							'#118ab2',
							'#7b2ff7',
							'#ff6b6b',
							'#ef476f',
							'#f4a261',
							'#2a9d8f'
						];
						const { ctx } = context.chart;
						const chartArea = context.chart.chartArea;
						if (!chartArea) return barColors[context.dataIndex];
						const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
						g.addColorStop(0, barColors[context.dataIndex]);
						g.addColorStop(1, 'rgba(255, 255, 255, 0.55)');
						return g;
					},
					borderColor: [
						'rgba(255, 77, 109, 0.8)',
						'rgba(255, 159, 28, 0.8)',
						'rgba(255, 214, 10, 0.8)',
						'rgba(6, 214, 160, 0.8)',
						'rgba(17, 138, 178, 0.8)',
						'rgba(123, 47, 247, 0.8)',
						'rgba(255, 107, 107, 0.8)',
						'rgba(239, 71, 111, 0.8)',
						'rgba(244, 162, 97, 0.8)',
						'rgba(42, 157, 143, 0.8)'
					],
					hoverBackgroundColor: [
						'#ff7590',
						'#ffb35c',
						'#ffe05a',
						'#4de0ba',
						'#3fa4cb',
						'#9a6ef9',
						'#ff8d8d',
						'#f46a8f',
						'#f7b886',
						'#53b5ab'
					]
				}]
			},
			options: {
				indexAxis: 'y',
				scales: {
					x: {
						beginAtZero: true,
						ticks: { color: '#2b2b2b' },
						grid: { color: 'rgba(43, 43, 43, 0.1)' }
					},
					y: {
						ticks: { color: '#2b2b2b' },
						grid: { display: false }
					}
				},
				plugins: {
					legend: {
						display: false
					}
				}
			}
		});
	})
	.catch(err => console.error(err));
