document.addEventListener('DOMContentLoaded', async () => {
  const badgeElement = document.getElementById('downloads-badge');
  const packageElement = document.getElementById('packages-count');

  // Check if the elements exist
  if (!badgeElement || !packageElement) {
    console.error('Badge or package count element not found!');
    return;
  }

  try {
    // Fetch data from the Lambda function
    const response = await fetch('https://www.etlbox.net/.netlify/functions/nuget-downloads');
    const data = await response.json();
    const totalDownloads = data.totalDownloads;
    const packageCount = data.packageCount;

    // Function to animate numbers
    function animateValue(element, start, end, duration) {
      const startTime = performance.now();
      const step = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure it does not exceed 1
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString(); // Format number
        if (progress < 1) {
          requestAnimationFrame(step); // Continue animation
        }
      };
      requestAnimationFrame(step); // Start animation
    }

    // Animate both counters simultaneously within 3–4 seconds
    const animationDuration = 1500; // 3.5 seconds

    animateValue(badgeElement, 0, totalDownloads, animationDuration);
    animateValue(packageElement, 0, packageCount, animationDuration);
  } catch (error) {
    console.error('Error fetching data:', error);
    badgeElement.textContent = 'Error';
    packageElement.textContent = 'Error';
  }
});
