import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Checkout } from "../pages/Checkout/Checkout"
import { Success } from "../pages/Success/Success"
import { DefaultLayout } from "../layouts/DefalutLayout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Success" element={<Success />} />
            </Route>
        </Routes>
    )
}