document.getElementById('resume-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const careerDetails = document.getElementById('career-details').value;
    const jobPreferences = document.getElementById('job-preferences').value;
    const templateStyle = document.getElementById('template-style').value;

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                careerDetails,
                jobPreferences,
                templateStyle
            })
        });

        if (response.ok) {
            const resumeData = await response.json();
            document.getElementById('resume-content').innerHTML = resumeData.htmlContent;
            document.getElementById('resume-preview').classList.remove('hidden');
        } else {
            console.error('Failed to generate resume');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('download-resume').addEventListener('click', function() {
    // Logic to download the resume
    alert('Resume downloaded!');
});