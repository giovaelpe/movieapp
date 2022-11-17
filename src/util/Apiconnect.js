let MovieApi = {
    respuestaJSON : null,
    apiKey : "960b9ccf",
    endpoint : "https://www.omdbapi.com/",
    async searchMovie(title){
        if(!title){
            return;
        }
        let request;
        title = title.replace(" ", "+");
        try {
            request = await fetch(this.endpoint+"?apikey="+this.apiKey+"&t="+title);
            if(request.ok){
                this.respuestaJSON = await request.json();
            }
        }catch (error){
            console.log(error);
        }
    }
}

export default MovieApi;