import { useEffect, useState } from 'react'
import './scroll.css'
export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [scrollPrecentage, setScrollPrecentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            seterrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData('https://dummyjson.com/products?limit=100');
    }, [url]);

    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop, 
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howMuchScrolled = 
        document.body.scrollTop || document.documentElement.scrollTop;

        const height = 
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        setScrollPrecentage((howMuchScrolled/height) * 100);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, []);

    console.log(data, scrollPrecentage);

    if (errorMessage) {
        return <div>Error! {errorMessage}</div>;
    }



if(loading) {
    return <div>Loading data! Please wait</div>
}

    return (
    <div>
        <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
            <div 
            className="current-progress-bar" 
            style={{width : `${scrollPrecentage}%`}}
            ></div>
            </div>
        </div>
        
        <div className="data-container">
        {data && data.length > 0
                ? data.map((dataItem) => <p>{dataItem.title}</p>)
                : null}
    </div>
    </div>)
}
