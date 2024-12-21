fetch( 'https://api.github.com/repositories/901565679/releases/latest' )
	.then( function( response )
	{
		if( !response.ok )
		{
			throw new Error( 'Failed to fetch github release' );
		}

		return response.json();
	} )
	.then( function( response )
	{
		for( const asset of response.assets )
		{
			if( asset.name === 'RadGen.exe' )
			{
				document.getElementById( 'js-download' ).href = asset.browser_download_url;
				document.getElementById( 'js-download-header' ).href = asset.browser_download_url;

				const version = document.querySelector( '.download-version' );
				version.href = response.html_url;

				let string = `View release notes for ${response.tag_name}`;

				if( window.innerWidth > 500 )
				{
					const date = new Date( response.published_at );
					string += `, released on ${date.toLocaleDateString()}`;
				}

				version.textContent = string;

				break;
			}
		}
	} );

document.addEventListener("DOMContentLoaded", () => {
	const videos = document.querySelectorAll(".feature-video");
  
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
		const video = entry.target;
  
		if (entry.isIntersecting) {
		  video.play();
		} else {
		  video.pause();
		}
	  });
	});
  
	videos.forEach((video) => observer.observe(video));
  });