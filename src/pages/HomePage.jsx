import { AboutProduct } from "../components/AboutProduct/AboutProduct";
import { Discount } from "../components/Discount/Discount";
import { Header } from "../components/Header/Header";

export function HomePage() {
    return (
        <>
            <Header />
            <AboutProduct />
            <Discount />
        </>
    )
}