import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Checkout } from "../pages/Checkout/Checkout"
import { Success } from "../pages/Success/Success"

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Success" element={<Success />} />
        </Routes>
    )
}