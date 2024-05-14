"use client"

import {useEffect, useState} from 'react'
import { Character } from '@/types'
import {useInView} from 'react-intersection-observer'
import Spinner from './Spinner'
import api from '@/api'
import CharactersFullContainer from './CharactersFullContainer'
const LoadMore = () => {
    const [characters,setCharacters] = useState<Character[]>([])
    const [pagesLoaded,setPagesLoaded] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const {ref, inView} = useInView()

    const loadMoreCharacters = async()=>{
     const nextPage = pagesLoaded + 1;
     const newCharacters = await api.getAllCharacters(nextPage) ?? []
     if(newCharacters.length == 0){
        setHasMore(false)
     }
     setCharacters( (prevData : Character[]) => [...prevData,...newCharacters] )
     setPagesLoaded(nextPage)
    }


    useEffect(()=>{
        if(inView){
            loadMoreCharacters()
        }
    },[inView])
  return (
    <>
    <CharactersFullContainer characters={characters}/>
    <div ref={ref} className='flex justify-center items-center p-4 col-span-1 sm:col-span-3 md:col-span-5 '>
        
        {hasMore && <Spinner/>} 
    </div>
    </>
  )
}

export default LoadMore