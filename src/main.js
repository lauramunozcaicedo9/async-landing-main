const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UCwVFhe88aNpSZvDhjZS-DBQ&part=snippet%2Cid&order=date&maxResults=9'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91287acd76msh98eb8b079e43d9cp1f806fjsn698e8ba10927',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const videos = await response.json();
    return videos;
}

(async()=>{
try{
    const videos = await fetchData(API);

    const videosHtml = `${videos.items.map(video => `
<div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
    </div>
</div>
`).slice(4,8).join('')}`;

    content.innerHTML = videosHtml;

}catch(err){
    throw new Error('Should be a mistake!!')
}
})();