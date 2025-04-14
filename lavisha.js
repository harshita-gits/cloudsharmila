async function fetchMetrics(url, timeId, cpuId, memoryId, latencyId, uptimeId, chartIndex) {
    const start = performance.now();
    try {
        let response = await fetch(url);
        const end = performance.now();
        let data = await response.json();

        document.getElementById(timeId).innerText = (end - start).toFixed(2) + " ms";
        document.getElementById(cpuId).innerText = data.cpu + " %";
        document.getElementById(memoryId).innerText = data.memory + " MB";
        document.getElementById(latencyId).innerText = data.latency + " ms";
        document.getElementById(uptimeId).innerText = data.uptime + " %";

        performanceChart.data.datasets[0].data[chartIndex] = end - start;
        cpuChart.data.datasets[0].data[chartIndex] = data.cpu;
        memoryChart.data.datasets[0].data[chartIndex] = data.memory;
        latencyChart.data.datasets[0].data[chartIndex] = data.latency;
        uptimeChart.data.datasets[0].data[chartIndex] = data.uptime;

        performanceChart.update();
        cpuChart.update();
        memoryChart.update();
        latencyChart.update();
        uptimeChart.update();
    } catch (error) {
        document.getElementById(timeId).innerText = "Error";
        document.getElementById(cpuId).innerText = "Error";
        document.getElementById(memoryId).innerText = "Error";
        document.getElementById(latencyId).innerText = "Error";
        document.getElementById(uptimeId).innerText = "Error";
    }
}

// Fetch Metrics
fetchMetrics("https://your-aws-url.com", "aws-time", "aws-cpu", "aws-memory", "aws-latency", "aws-uptime", 0);
fetchMetrics("https://your-gcp-url.com", "gcp-time", "gcp-cpu", "gcp-memory", "gcp-latency", "gcp-uptime", 1);
fetchMetrics("https://your-azure-url.com", "azure-time", "azure-cpu", "azure-memory", "azure-latency", "azure-uptime", 2);

// Create Updated Charts
const ctx1 = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['AWS', 'GCP', 'Azure'],
        datasets: [{
            label: 'Response Time (ms)',
            data: [],
            backgroundColor: ['#FF9900', '#4285F4', '#007FFF']
        }]
    }
});

const ctx2 = document.getElementById('cpuChart').getContext('2d');
const cpuChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['AWS', 'GCP', 'Azure'],
        datasets: [{
            label: 'CPU Utilization (%)',
            data: [],
            backgroundColor: ['#FF5733', '#33FF57', '#5733FF']
        }]
    }
});

const ctx3 = document.getElementById('memoryChart').getContext('2d');
const memoryChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['AWS', 'GCP', 'Azure'],
        datasets: [{
            label: 'Memory Usage (MB)',
            data: [],
            backgroundColor: ['#FFD700', '#32CD32', '#1E90FF']
        }]
    }
});

const ctx4 = document.getElementById('latencyChart').getContext('2d');
const latencyChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['AWS', 'GCP', 'Azure'],
        datasets: [{
            label: 'Network Latency (ms)',
            data: [],
            backgroundColor: ['#FF4500', '#8A2BE2', '#20B2AA']
        }]
    }
});

const ctx5 = document.getElementById('uptimeChart').getContext('2d');
const uptimeChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['AWS', 'GCP', 'Azure'],
        datasets: [{
            label: 'Uptime (%)',
            data: [],
            backgroundColor: ['#ADFF2F', '#FF69B4', '#4682B4']
        }]
    }
});