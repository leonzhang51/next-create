import React, { useState, useEffect } from 'react';
export default function FetchUser(url) {
    const [userInfo, setUserInfo] = useState();
    
    
    
    useEffect(() => {
        
        if (!url) return
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUserInfo(data.results);
        };
        setTimeout(function(){fetchData();},1000);
        
    },[url]);

    console.log(url);
    
    return userInfo;
}