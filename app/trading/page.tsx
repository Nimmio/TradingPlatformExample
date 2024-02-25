"use client";
import TradingTable from "@/components/trading/tradingTable";
import { Card, Container, TextField } from "@mui/material";
import { useLoginStore, useMoneyStore, useStockStore } from "../store/zustand";
import { useEffect, useState } from "react";
import {
  calculateStockValues,
  getPortfolioValue,
  getStocksAfterBought,
  getStocksAfterSelling,
} from "@/helper/utils";
import { useRouter } from "next/navigation";
export default function Trading() {
  const {
    availableMoney,
    reduceAvailableMoney,
    increaseAvailableMoney,
    setNewPortfolioValue,
  } = useMoneyStore();
  const { stocks, newValuesForStocks } = useStockStore();
  const router = useRouter();
  const { loggedIn } = useLoginStore();
  const [amount, setAmount] = useState("1");

  if (!loggedIn) router.push("/login");
  useEffect(() => {
    const newStocks = calculateStockValues(stocks);
    newValuesForStocks(newStocks);
  }, []);

  const findStockById = (id: number) => stocks.find((stock) => stock.id === id);

  const handleBuyStock = (id: number) => {
    const currentStock = findStockById(id);
    const amountNumber = parseInt(amount);
    //Error Handling
    if (!currentStock) return;
    if (currentStock.value * amountNumber > availableMoney) return;

    reduceAvailableMoney(currentStock.value * amountNumber);
    const newStocks = getStocksAfterBought(currentStock, stocks, amountNumber);
    newValuesForStocks(newStocks);

    setNewPortfolioValue(getPortfolioValue(stocks));
  };

  const handleSellStock = (id: number) => {
    const currentStock = findStockById(id);
    const amountNumber = parseInt(amount);

    //Error Handling
    if (!currentStock) return;
    if (currentStock.bought < amountNumber) return;

    increaseAvailableMoney(currentStock.value * amountNumber);
    const newStocks = getStocksAfterSelling(currentStock, stocks, amount);
    newValuesForStocks(newStocks);

    setNewPortfolioValue(getPortfolioValue(stocks));
  };

  return (
    <Container>
      <Card
        sx={{
          padding: "2em",
        }}
      >
        Available Money: {availableMoney} $
        <br />
        <TextField
          type="number"
          sx={{ marginTop: "2em" }}
          id="outlined-basic"
          label="Amount to Buy/Sell"
          variant="outlined"
          value={amount}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (
              !isNaN(parseInt(event.target.value)) &&
              parseInt(event.target.value) >= 0
            )
              setAmount(event.target.value);
          }}
        />
      </Card>
      <TradingTable
        stocks={stocks}
        buyStock={(id: number) => handleBuyStock(id)}
        sellStock={(id: number) => handleSellStock(id)}
      />
    </Container>
  );
}
