'use client'
import Graph from "@/components/overview/graph";
import PortfolioOverview from "@/components/overview/portfolioOverview";
import Value from "@/components/overview/value";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useLoginStore, useMoneyStore, useStockStore } from "../store/zustand";
import { calculateStockValues, getBoughtStocks, getPortfolioValue } from "@/helper/utils";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Login() {
    const {portfolioValue , portfolioHistory, setNewPortfolioValue} = useMoneyStore();
    const { stocks, newValuesForStocks } = useStockStore();
    const boughtStocks = getBoughtStocks(stocks);
    const router = useRouter()
    const {loggedIn} = useLoginStore();

    if(!loggedIn) router.push('/login')

    const intervalCalculateNew = () => {
        const newStocks = calculateStockValues(stocks);
        newValuesForStocks(newStocks);
        setNewPortfolioValue(getPortfolioValue(newStocks));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            intervalCalculateNew()

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
