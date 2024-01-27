import { useState, useEffect } from "react";

export const useFetch = <T,>(
    folder: string
): {
 data: T | undefined;
} => {

const [data, setData] = useState<T | undefined>(undefined);
console.log(folder);

const fetchDatas = async (): Promise<void> => {
    try {
        console.log(folder);
        
    const res = await (await fetch(`http://localhost:3000/api/listLessons?folder=${folder}`)).json();
    
    setData(res);

    } catch (e: any) {
    console.error(e);
    }
};

useEffect(() => {
    fetchDatas();
}, []);

return { data };
};
  