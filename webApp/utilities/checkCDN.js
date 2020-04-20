{/* <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> */}
{/* <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> */}
{/* <script crossorigin src="https://cdn.jsdelivr.net/npm/animejs@3.2.0/lib/anime.min.js"></script> */}

function checkCDNexist(){
    try {
        anime = anime
        React = React
        ReactDOM = ReactDOM
        console.log("All CDNs imported")
    } catch (error) {
        alert("One or more CDNs could not be imported, issues with page may occur")
    }
}

export default checkCDNexist