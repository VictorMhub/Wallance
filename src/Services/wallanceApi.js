const currencyTags = async () => {
    try {
        const response  = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await response.json();
        const keys = Object.keys(data).filter((moeda) => moeda !== 'USDT')
    return keys;
    } catch (error) {
        console.log(error);
    }
};

export default currencyTags;