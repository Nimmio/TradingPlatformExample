'use client'
import Graph from "@/components/overview/graph";
import PortfolioOverview from "@/components/overview/portfolioOverview";
import Value from "@/components/overview/value";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Login() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={8}>
                   <Graph />
                </Grid>
                <Grid xs={4}>
                    <Value />
                </Grid>
                <Grid xs={12}>
                    <PortfolioOverview />
                </Grid>
            </Grid>
        </Container>
    );
}
