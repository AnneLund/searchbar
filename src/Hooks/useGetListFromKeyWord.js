import {useState, useEffect} from 'react'
import AppService from '../Appservices/Appservices/Appservice'

const useGetListFromKeyWord = (e, id) => {
    const [state, setState] = useState([])

    useEffect(() => {
        async function fetchData() {
            //fetches and sets data to the response object
            const response = await AppService.GetListFromKeyWord(e, id)
            //sets the data to the variable
            try {
                if (response.data) {
                    console.log("Response Data: ", response.data.countries)
                    setState(response.data)
                }

            } catch(error) {
                console.error(error)
            }
        }

        fetchData()
    },[e, id])

    return {state}
}

export default useGetListFromKeyWord;