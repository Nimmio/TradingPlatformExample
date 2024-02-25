import { useStockStore } from "@/app/store/zustand";
import Stock from "@/types/stocks";

export function generateStockPrice(name:string)
{
    const hash = name.split("").reduce(
    function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0
    );
    const amplitude = 100;
    const d = new Date();
    const n = d.getTime();
    return Math.abs(3*Math.sin(2*hash*n)+Math.random()*amplitude)
};


export const getBoughtStocks = (stocks:Stock[]) => {
    return stocks.filter((stock) => stock.bought !== 0)
}

export const calculateStockValues = (stocks:Stock[]) => {
    const newStocks:Stock[] = [];
    stocks.forEach(stock => {
        newStocks.push({
            ...stock,
            value: generateStockPrice(stock.name)
        })    
    });
    return newStocks;
}
export const getStocksAfterBought = (currentStock:Stock, stocks:Stock[], amount:number) =>{
    const newStocks:Stock[] = stocks;
    const prevBoughtStocks = newStocks[newStocks.findIndex(stock => stock.id === currentStock.id)].bought;
    newStocks[newStocks.findIndex(stock => stock.id === currentStock.id)].bought = prevBoughtStocks + amount;
    return newStocks;
} 

export const getStocksAfterSelling = (currentStock:Stock, stocks:Stock[], amount:number) =>{
    const newStocks:Stock[] = stocks;
    const prevBoughtStocks = newStocks[newStocks.findIndex(stock => stock.id === currentStock.id)].bought;
    newStocks[newStocks.findIndex(stock => stock.id === currentStock.id)].bought = prevBoughtStocks - amount;
    return newStocks;
} 

export const getPortfolioValue = (stocks:Stock[]) => {
    let value = 0;
    stocks.forEach(stock => {
        value = value + (stock.value * stock.bought)
    });
    return value;
}