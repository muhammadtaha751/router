import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import Card from "../components/Card"
function Albums() {
    const navigate = useNavigate()
    const [album, setAlbum] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(res => setAlbum(res))
            .catch((err) => {console.log(err);})
    }, [])

    if (!album) {
        return
        <div>
            ...loading
        </div>
    }

    return <div>
        <h1>ALbums</h1>
        {album.map( (item) => {
            return <Card description={item.title} onClick={() => navigate('/albums/' + item.id)} />
        })}
    </div>
}

export default Albums