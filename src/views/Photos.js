import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Photos() {
    const params = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    if (!data) {
        return <div>
            ...loading
        </div>
    }
    return (
        <>
            <div>
                <p>{params.id}</p>
                <img className="xyz" src={data[params.id].url} />
            </div>

        </>
    )
}

export default Photos