/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

function useLocalStorage(key,initialValue) {
    
    const prefixKey = PREFIX+key;

    const [value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixKey)
        
        if (jsonValue !== null) {
            try {
                return JSON.parse(jsonValue);
            } catch (error) {
                console.error("Failed to parse JSON:", error);
                // Fallback to initialValue if parsing fails
                return typeof initialValue === 'function' ? initialValue() : initialValue;
            }
        }

        if(typeof initialValue ==='function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixKey,JSON.stringify(value))
    },[prefixKey,value])

    return [value,setValue]
}

export default useLocalStorage