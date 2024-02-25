"use client";
import {
  Box
} from "@mui/material";
import { Inter } from "next/font/google";
import { useLoginStore } from "./store/zustand";
import LayoutDrawer from "@/components/layout/drawer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loggedIn } = useLoginStore();

  return (
    <html lang="en">
      <body className={inter.className}>
        {loggedIn && <LayoutDrawer />}
        <Box
          component="main"
          sx={{
            marginLeft: loggedIn ? "240px" : "0px",
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
