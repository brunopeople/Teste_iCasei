# Teste_iCasei
Teste para o processo seletivo da Vaga de Desenvovledor Front end na empresa Icasei


O Projeto deste Teste Coniste em criar uma aplicação que faça requisições HTTP vindo do API do Youtube que atualmente se encontra na versão V3 
e essas requisições são acessadas através de uma chave de acesso que é gerada pelo console de API. Após realizar estas requisições ele deve 
apresentar pelo layout que segue as regras do Google Material Design em forma de Grid, apresentar estas requisições tanto para Desktop
e para versão mobile. Esta aplicação feita sem nenhum framework, apenas com javascript, css e html puro. 


o index.html deverá ser apresentado deste jeito.

<html lang="pt">
    <head>
        <title>Galeria de Videos </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        
        <style>
            body {
                background: #F0F0F0;
            }
            
            div#janela ul {
                width:480px;
                margin:0 auto;
                padding:0;
            }
            
            div#janela ul li.principal {
                list-style: none;
                display: inline-block;
                margin: 20px;
                cursor:pointer;
                width: 320px;
                height:180px;
            }   

            div#janela ul li.principal div.foto{
                    position:absolute;
                    top:left;
                    width:320px;height:180px;
                    z-index:1;
                    clip: rect( 0 320px 180px 0);
            }

            div#janela ul li.principal div.foto div.legenda{
                    position: absolute;
                    top:150px;left:0;
                    width: 310px; height:150px;
                    padding:5px;
                    z-index:2;
                    cursor:pointer;
                    background-color: rgba(0,0,0,0.7);

                    -webkit-transition: all 0.5s ease-out 0s;
                    -moz-transition: all 0.5s ease-out 0s;
                    -ms-transition: all 0.5s ease-out 0s;
                    -o-transition: all 0.5s ease-out 0s;
                    -webkit-transition: all 0.5s ease-out 0s;
                    transition: all 0.5s ease-out 0s;

            }

            div#janela ul li.principal div.foto div.legenda:hover{
                 top:100px;   
                }

              div#janela ul li.principal div.foto div.legenda h5{
                font-family: sans-serif;
                text-transform: uppercase;
                font-weight: 100;
                color:aqua;
                margin:0;
              }

              div#janela ul li.principal div.foto div.legenda p{
                font-family: sans-serif;
                font-size: 0.7rem;
                color: aliceblue;

              }

            
        </style>
        <script src="js/jquery.js"></script>  
        <!--Scripts do Fancybox-->
        <script src="fancy/jquery.fancybox.js" type="text/javascript"></script>
        <link href="fancy/jquery.fancybox.css" media="screen" rel="stylesheet" type="text/css"/>
        <script src="fancy/jquery.fancybox-media.js" type="text/javascript">

        <script src="js/meuscript.js"></script>

        <script type="text/javascript">
            $(document).ready(function(){
                $('.fancybox').fancybox();
                var fbWidth = 800;
                var fbHeight = 450;

                $('.fancybox-media')
                    .attr('rel', 'media-gallery')
                    .fancybox({
                        arrows: false,
                        'maxWidth':fbWidth,
                        'maxHeight':fbHeight,
                        'width':fbWidth,
                        'height':fbHeight,
                        helpers:{
                            media: {},
                            buttons: {}
                        }
                    });
            });
        </script>
    </head>
    <html>
        <div id="janela">
            <ul>
            
            </ul>
        </div>

        
    
</html>



O script do projeto tem o nome "meuscript.js" ele estará deste jeito

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



Escolhi o canal do Joel Miranda que é um profissional especializado em videos de casamento, já que a empresa que estou realizando este teste 
tem como foco festa de casamentos então por que não fazer algo relacionado ao tema? 


# Rodar a Aplicação

Para que a aplicação rode e os vídeos apareçam é preciso de software que crie um servidor local como XAMP e WAMPP. No meu caso utilizei o XAMP. 












