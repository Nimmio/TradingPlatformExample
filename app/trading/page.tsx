'use client'
import TradingTable from "@/components/trading/tradingTable";
import { Card, Container } from "@mui/material";
import { useMoneyStore, useStockStore } from "../store/zustand";
import { useEffect } from "react";
import { calculateStockValues, getStocksAfterBought, getStocksAfterSelling } from "@/helper/utils";

export default function Trading() {
    const {availableMoney, reduceAvailableMoney,increaseAvailableMoney, portfolioValue, setNewPortfolioValue} = useMoneyStore();
    const {stocks,newValuesForStocks } = useStockStore();
    useEffect(() => {
        const newStocks = calculateStockValues(stocks);
        newValuesForStocks(newStocks);

    }, [])

    const findStockById = (id:number) => stocks.find((stock) => stock.id === id);

    const handleBuyStock = (id:number) => {
        const currentStock = findStockById(id);
        
        //Error Handling
        if (!currentStock) return;
        if(currentStock.value > availableMoney) return;
        
        reduceAvailableMoney(currentStock.value);
        const newStocks = getStocksAfterBought(currentStock, stocks);
        newValuesForStocks(newStocks);

        getPortfolioValue(stocks);

        setNewPortfolioValue(portfolioValue + currentStock.value)

    }

    const handleSellStock = (id:number) => {
        const currentStock = findStockById(id);
        
        //Error Handling
        if (!currentStock) return;
        if (currentStock.bought === 0) return;
        
        increaseAvailableMoney(currentStock.value);
        setNewPortfolioValue(portfolioValue - currentStock.value)
        const newStocks = getStocksAfterSelling(currentStock, stocks);
        newValuesForStocks(newStocks);
    }

    return (
        <Container>
            <Card sx={{
                padding:'2em'
            }}>
                Available Money: {availableMoney} $
            </Card>
            <TradingTable 
                stocks={stocks}
                buyStock={(id:number) => handleBuyStock(id)}
                sellStock={(id:number) => handleSellStock(id)}
            />
        </Container>
    );
}
