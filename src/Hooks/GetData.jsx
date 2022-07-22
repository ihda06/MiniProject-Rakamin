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
                    api_key: process.env.API_KEY,
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

        const fetch = async () => {
            setGifData({
                isLoading: true,
                data: [],
                error: false
            })
            try {
                const data = await getData()
                setGifData({
                    ...GifData,
                    isLoading: false,
                    data: data,
                })
            } catch (error) {
                setGifData({ ...GifData, error: error })
            }
            // setLoading(false)
            // setGifData(data.data)

        }
        fetch()

    }, [])

    return GifData
}