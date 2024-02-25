import { create } from 'zustand'

type LoginStore = {
    loggedIn: boolean,
    toggleLogin: () => void,
}

type MoneyStore = {
    availableMoney: number,
    portfolioValue: number,
    portfolioHistory: number[],
    reduceAvailableMoney: (amount:number) => void,
    increaseAvailableMoney: (amount:number) => void,
    setNewPortfolioValue: (value:number) => void,
}

type Stock ={
    id: number,
    name: string,
    value: number,
    bought: number,
}

type StocksStore = {
    stocks: Stock[]
    newValuesForStocks: (stocks:Stock[]) => void,
}

export const useLoginStore = create<LoginStore>((set) => ({
    loggedIn: false,
    toggleLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
}));

export const useMoneyStore = create<MoneyStore>((set) => ({
    availableMoney: 100000,
    portfolioValue: 0,
    portfolioHistory: [0],
    reduceAvailableMoney: (amount:number) => set((state) => ({ availableMoney: state.availableMoney - amount})),
    increaseAvailableMoney: (amount:number) => set((state) => ({ availableMoney: state.availableMoney - amount})),
    setNewPortfolioValue: (value:number) => set((state) => (
        { 
            portfolioValue: value,
            portfolioHistory: [...state.portfolioHistory,value],

        }
    )),
}));

export const useStock = create<StocksStore>((set) => ({
    stocks: [
        {
            id:1,
            name: 'Wiza Group',
            value:0,
            bought:0,
        },
        {
            id:2,
            name: 'Kilback - Wuckert',
            value:0,
            bought:0,
        },
        {
            id:3,
            name: 'Schneider, Vandervort and Tremblay',
            value:0,
            bought:0,
        },
        {
            id:4,
            name: 'Satterfield - Ferry',
            value:0,
            bought:0,
        },
        {
            id:5,
            name: 'Haley and Sons',
            value:0,
            bought:0,
        },
        {
            id:6,
            name: 'Hyatt, Pouros and Lindgren',
            value:0,
            bought:0,
        },
        {
            id:7,
            name: 'Watsica - Langosh',
            value:0,
            bought:0,
        },
        {
            id:8,
            name: 'Hermann, Ullrich and Cummings',
            value:0,
            bought:0,
        },
        {
            id:9,
            name: 'Parisian Group',
            value:0,
            bought:0,
        },
        {
            id:10,
            name: 'Hegmann and Sons',
            value:0,
            bought:0,
        },
    ],
    newValuesForStocks: (stocks:Stock[]) => set((state) => ({
        stocks: [...stocks],
    }))

}));