'use client'
import Graph from "@/components/overview/graph";
import PortfolioOverview from "@/components/overview/portfolioOverview";
import Value from "@/components/overview/value";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useMoneyStore, useStockStore } from "../store/zustand";
import { getBoughtStocks } from "@/helper/utils";
import { useEffect } from "react";

export default function Login() {
    const {portfolioValue , portfolioHistory} = useMoneyStore();
    const { stocks } = useStockStore();
    const boughtStocks = getBoughtStocks(stocks);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('ping')
        }, 10000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={8}>
                   <Graph portfolioHistory={portfolioHistory}/>
                </Grid>
                <Grid xs={4}>
                    <Value value={portfolioValue}/>
                </Grid>
                <Grid xs={12}>
                    <PortfolioOverview stocks={boughtStocks}/>
                </Grid>
            </Grid>
        </Container>
    );
}
