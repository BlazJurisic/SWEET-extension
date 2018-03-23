import

const songCounter = () => {
    const playlist = "PLigwXsybZcHkpfyINfDKSZyhT-8zAs2t9"
    const url = new URL(window.location.href)
    const origin = window.location.origin 
    const songId = url.searchParams.get("v")
    const playlistId = url.searchParams.get("list")
    if(window.location.origin === "https://www.youtube.com" && songId && playlistId === playlist) {
        const numberOfPlays = parseInt(window.localStorage.getItem(songId)) || 0
        window.localStorage.setItem(songId, numberOfPlays + 1)
        alert(`counter: ${numberOfPlays + 1}`)        
    }
}
songCounter()
let currentPage = window.location.href
setInterval(() => {
    if (currentPage != window.location.href) {
        currentPage = window.location.href
        songCounter()
    }
}, 500)
