async function videos() {
    const connect = await fetch("http://localhost:3000/videos");
    const connectConverted = await connect.json();

    return connectConverted;
}

async function createVideo(titulo, descricao, url, imagem) {
    const connect = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!connect.ok) {
        throw new Error("Não foi possível enviar o vídeo.");
    }

    const connectConverted = await connect.json();

    return connectConverted;
}

async function searchVideos(searchTerm) {
    const connect = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)
    const connectConverted = connect.json();

    return connectConverted;
}

export const connectApi = {
    videos,
    createVideo,
    searchVideos
}