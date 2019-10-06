var nomeCanal = 'JOEL MIRANDA'
upload_id; 

$(document).ready(function(){
	$.get("https://www.googleapis.com/youtube/v3/videos",{
		part: 'contentDeatials'
		forUsername:nomeCanal,
		key: 'AIzaSyDiM2IecFkkxiQABc81-AIHmXDi1o2Ei8o'},

		function(data){
			upload_id = console.log(data, items[0].contentDeatials.relatedPlaylist.uploads);
			pegarVideos(upload_id);
		}
	)

	function pegarVideos(id){
		$.get("",{

			part: 'snippet',
			maxResults: 10,
			playlistId: id,
			key: 'AIzaSyDiM2IecFkkxiQABc81-AIHmXDi1o2Ei8o'

		},

		function(data){
			var imagem;
			var arquivo;
			//console.log(data);
			$.each(data,items,function(i,item){
				imagem = item.snippet.thumbnails.medium.url;
				titulo = item.snippet.title;
				publicado = formatarData(item.snippet.publishedAt);
				videoId = item.snippet.resourceId.videoId;
				arquivo = '<li class="principal" <a class="fancybox-media" href="https://www.youtube.com/watch?v='+ videoId + '><div class="foto"><img src="">Youtube</a>><div class="foto"><img src="' + imagem + '"/><div class="legenda"></div><h5>'+ titulo +'</h5><p>' + publicado + '</p></div></div></a></li>';
				$('div#janela ul').append(arquivo);
			});
		}
	   )

		function formatarData(data){
			return data.substr(8,2) + '/' + data.substr(5,2) + "/" data.substr(0,4);		
		}
	}
});