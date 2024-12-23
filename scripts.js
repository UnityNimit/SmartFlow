document.addEventListener("DOMContentLoaded", () => {
    // Load traffic status
    const trafficStatus = document.getElementById("traffic-status");
    if (trafficStatus) {
        trafficStatus.innerText = "Traffic lights are operating normally.";
    }

    // Load analytics data
    const analyticsData = document.getElementById("analytics-data");
    if (analyticsData) {
        analyticsData.innerText = "Traffic data analytics coming soon.";
    }

    // Load video feed
    const videoFeed = document.getElementById("video-feed");
    if (videoFeed) {
        videoFeed.innerText = "Live video feed integration coming soon.";
    }

    // Event listeners for control panel buttons
    const manualOverrideButton = document.getElementById("manual-override");
    if (manualOverrideButton) {
        manualOverrideButton.addEventListener("click", () => {
            alert("Manual override activated.");
        });
    }

    const scheduleControlsButton = document.getElementById("schedule-controls");
    if (scheduleControlsButton) {
        scheduleControlsButton.addEventListener("click", () => {
            alert("Schedule controls activated.");
        });
    }

    const emergencyModeButton = document.getElementById("emergency-mode");
    if (emergencyModeButton) {
        emergencyModeButton.addEventListener("click", () => {
            alert("Emergency mode activated.");
        });
    }

    // Function to initialize charts
    function initializeChart(ctx, type, labels, data, label, backgroundColor, borderColor) {
        return new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Initialize traffic flow chart
    const trafficFlowCtx = document.getElementById('trafficFlowChart')?.getContext('2d');
    if (trafficFlowCtx) {
        initializeChart(trafficFlowCtx, 'line', ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            [30, 50, 40, 60, 80, 70], 'Traffic Flow', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)');
    }

    // Initialize daily traffic volume chart
    const dailyTrafficVolumeCtx = document.getElementById('dailyTrafficVolumeChart')?.getContext('2d');
    if (dailyTrafficVolumeCtx) {
        initializeChart(dailyTrafficVolumeCtx, 'bar', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            [300, 400, 350, 450, 500, 600, 550], 'Daily Traffic Volume', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)');
    }

    // Initialize average speed chart
    const averageSpeedCtx = document.getElementById('averageSpeedChart')?.getContext('2d');
    if (averageSpeedCtx) {
        initializeChart(averageSpeedCtx, 'line', ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            [50, 45, 55, 60, 50, 40], 'Average Speed (km/h)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
    }

    // Initialize incident reports chart
    const incidentReportsCtx = document.getElementById('incidentReportsChart')?.getContext('2d');
    if (incidentReportsCtx) {
        initializeChart(incidentReportsCtx, 'bar', ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            [2, 4, 3, 5, 6, 4], 'Incident Reports', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)');
    }
});
