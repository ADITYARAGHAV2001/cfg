import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";
import console from "../public/console.png";
import Link from "next/link";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";
import Script from "next/script";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Footer from "../components/Footer";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WhatsApp from "@mui/icons-material/WhatsApp";


function Home({ products, product, subTotal, combo, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart}) {
    const [query, setquery] = useState("");
    const [userid, setuserid] = useState(0);
    useEffect(() => {
        try {
            if (localStorage.getItem("userid")) {
                setuserid(JSON.parse(localStorage.getItem("userid")));
                saveuserid(JSON.parse(localStorage.getItem("userid")));
            } else {
                localStorage.setItem("userid", JSON.stringify(userid));
            }
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const saveuserid = (items) => {
        localStorage.setItem("userid", JSON.stringify(items));
    };

    return (
        <div>
            <Head>
                <title>Craving for gaming</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://accounts.google.com/gsi/client" async defer></script>
            </Head>
            <Script src='./script.js'></Script>
            <Navbar  KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} Buy={'Buy'} Sell={'Sell'}/>
            <Carousel />
            {/* <span>{myarr}</span> */}
            <div className={styles.main}>
                <div className={styles.topic} id="combo">
                    <h1>Our Combos</h1>
                    <span>
                        Sanitised, best quality products at affordable rental
                        prices
                    </span>
                    <hr />
                </div>
                <div className={styles.grid}>
                    {combo.data.map((item) => {
                        return (
                            <div key={item.attributes.slug}>
                                <Link
                                    href={`/combos/${item.attributes.slug}`}
                                >
                                    <div className={styles.card}>
                                        <img
                                            src={
                                                item.attributes.mainImage.data.attributes.url
                                            }
                                            height={180}
                                            width={180}
                                        />
                                        <h2>{item.attributes.title}</h2>
                                        <span>
                                            From ₹{item.attributes.consolePrice1}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.banner}>
                    <div className={styles.left}>
                        <span>GET</span>
                        <h1>PlayStation 4</h1>
                        <h3>At just Rs. 1,499 for 7 days</h3>
                        <Link href="/consoles/sony-play-station-4">
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        {" "}
                        <Image src={console} height={400} width={400} />
                    </div>
                </div>
                <div className={styles.topic}>
                    <h1>All consoles</h1>
                    {/* <span>
                    Sanitised, best quality products at affordable rental prices
                </span> */}
                    <hr />
                </div>
                <div className={styles.sorting}>
                    <div className={styles.length}>
                        <span>Showing {products.data.length} items</span>
                        <hr />
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search for Product Name or Brand" value={query} onChange={(e) => { setquery(e.target.value) }} />
                        <SearchIcon style={{margin: "0.5rem"}}/>
                    </div>
                </div>
                <div className={styles.grid}  id="usp">
                    {products.data.filter((val) => {
                        if (query === "") {
                            return val;
                        }
                        else if (val.attributes.title.toLowerCase().includes(query.toLocaleLowerCase())) {
                            return val;
                        }
                    }).map((item) => {
                        return (
                            <div key={item.attributes.slug}>
                                <Link
                                    href={`/consoles/${item.attributes.slug}`}
                                >
                                    <div className={styles.card}>
                                        <img
                                            src={
                                                item.attributes.mainImage.data.attributes.url
                                            }
                                            height={180}
                                            width={180}
                                        />
                                        <h2>{item.attributes.title}</h2>
                                        <span>
                                            From ₹{item.attributes.plan1}/day
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.topic}>
                    <h1>Why rent from Craving for Gaming</h1>
                    {/* <span>
                    Sanitised, best quality products at affordable rental prices
                </span> */}
                    <hr />
                </div>
                <div className={styles.usp}>
                    <div className={styles.usp_item}>
                        <VolunteerActivismIcon style={{ fontSize: "4rem" }} className={styles.icon}/>
                        <p>
                        At Craving for Gaming, we understand the love and passion you have for video games and also how sometimes it can get a little “over-budget”.
                        </p>
                    </div>
                    <div className={styles.usp_item}>
                        <SavingsIcon style={{ fontSize: "4rem" }} className={styles.icon}/>
                        <p>
                        Budget friendly rates 
                        </p>
                        {/* <p>
                        CFG provides gaming consoles on rent at Budget friendly rates along with great combos and games from multiple genres
                        </p> */}
                    </div>
                    <div className={styles.usp_item}>
                        <LocalShippingIcon
                            style={{ fontSize: "4rem" }}
                            className={styles.icon}
                        />
                        <p>
                        Home Delivery
                        </p>
                    </div>
                </div>
                <div className={styles.topic}>
                    <h1>Some Frequently Asked Questions </h1>
                    {/* <span>
                    Sanitised, best quality products at affordable rental prices
                </span> */}
                    <hr />
                </div>
                <Accordion />
            </div>
            <WhatsApp
               style={{
                position:"fixed",
                bottom:"40px",
                right:"20px"
            }}
               />
            <Footer/>
        </div>
    );
}

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    // console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
    // let url =process.env.NEXT_PUBLIC_STRAPI_URL+"/api/products?populate=*";
    let data = await fetch(
        process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/consoles?populate=*`,
        {
            headers: headers,
        }
    );
    let comboData = await fetch(
        process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/combos?populate=*`,
        {
            headers: headers,
        }
    );
    let products = await data.json();
    let combo = await comboData.json();
    return {
        props: { products, combo }, // will be passed to the page component as props
    };
}

export default Home;
