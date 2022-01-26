import { useEffect, useRef, useState } from "react"
import { firestore } from "../firebase/config"

export const useCollection = (collection, _query,_orderBy) => {
  const [documents, setDocuments] = useState([])
  const [error, setError] = useState(null)
  
  //ref prevents the infinite loop caused by passing an array in use effect dependency array
  const query= useRef(_query).current
  const orderBy= useRef(_orderBy).current

  useEffect(() => {
    let ref = firestore.collection(collection)

    if(query){
      ref=ref.where(...query)
    }
    if(orderBy){
      ref=ref.orderBy(...orderBy).limit(30)
    }

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        //console.log(doc)
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      //console.log(results)
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection,query,orderBy])

  return { documents, error }
}