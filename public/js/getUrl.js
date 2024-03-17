export const getUrl = async (url) => {
    let content = document.getElementById('content');
    let res = await fetch('/url', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ videoUrl: url})
    });

    let { nowm, wm, music, description, title } = await res.json();
    
    // Generate HTML for video player, audio download button, video download button, video description, and title
    let audioButton = `<a href="${music}" target="_blank" class="btn">Download Audio</a>`;
    let videoPlayer = `
        <video controls autoplay name="media">
            <source src="${nowm}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    let videoButton = `<a href="${nowm}" download class="btn">Download Video</a>`;
    let videoDescription = description ? `<p>${description}</p>` : ''; // Include description if available
    let songTitle = title ? `<h2>${title}</h2>` : ''; // Include title if available

    // Set the content of the 'content' element
    content.innerHTML = `${songTitle} ${audioButton} ${videoButton} ${videoPlayer} ${videoDescription}`;
};
