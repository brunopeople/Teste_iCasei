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
				arquivo = '<li><iframe width="560" height="315" src="https://www.youtube.com/embed/'+ videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>';
				$('div#janela ul').append(arquivo);
			});
		}
	   )

		function formatarData(data){
			return data.substr(8,2) + '/' + data.substr(5,2) + "/" data.substr(0,4);		
		}

		$(document).ready(function(){
			$.get("https://www.googleapis.com/youtube/v3/videos",{
				part: 'statistics',
				id: 'C9nSNkqv_x8',
				key:'AIzaSyDiM2IecFkkxiQABc81-AIHmXDi1o2Ei8o'
				function(data){
					console.log(data);
				}
			})
		})
	}
});