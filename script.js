const form = document.getElementById('converter-form');
const youtubeLinkInput = document.getElementById('youtube-link');
const downloadLinkDiv = document.getElementById('download-link');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const youtubeLink = youtubeLinkInput.value.trim();
  const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]{11})(?:[\&\?\#].*?)?/i;
  const match = youtubeLink.match(regex);

  if (!match) {
    alert('Please enter a valid YouTube link.');
    return;
  }

  const videoId = match[1];
  const mp3Url = `https://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=${videoId}`;

  downloadLinkDiv.innerHTML = `<a href="${mp3Url}" download="${videoId}.mp3">Download MP3</a>`;
  downloadLinkDiv.style.display = 'block';
});
