import axios from 'axios';

async function fetchFunction(term1, term2, option) {

    const key = 'FZ81YTLOWRYZWQ1C';
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term1}&apikey=${key}`;
    
    if(option===1){
      url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${term1}&to_currency=${term2}&apikey=${key}`;
    }
  
    try {
        const fetch = await axios.get(url)
        const res = await fetch
        return await res
    } catch (err) {
      console.log(err)
    }
  
  }
  
  export default fetchFunction
  
 

  