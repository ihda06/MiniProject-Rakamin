import axios from "axios"
import { useEffect, useState } from "react"

export function useGetData(endpoint) {
    const [GifData, setGifData] = useState({
        isLoading: true,
        data: [],
        error: false
    })

    const getData = async () => {
        try {
            const data = await axios.get(`https://api.giphy.com/v1/gifs/${endpoint}`, {
                params: {
                    api_key: process.env.REACT_APP_VERCEL_API_KEY,
                    limit: 12
                }
            })
            return data.data
        } catch (error) {
            return error

        }
    }

    useEffect(() => {
        // setLoading(true)

        setGifData({
            isLoading: true,
            data: [],
            error: false
        })
        const fetch = async () => {
            
                const data = await getData()
                setGifData({
                    ...GifData,
                    isLoading: false,
                    data: data,
                })
            
            // setLoading(false)
            // setGifData(data.data)

        }
        fetch()

    }, [])

    return GifData
}