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


function Home({ products ,product, subTotal }) {
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
            <Script src="/script.js"></Script>
            
            <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal}/>
            <Carousel />
            {/* <span>{myarr}</span> */}
            <div className={styles.main}>
                <div className={styles.topic}>
                    <h1>Our best Sellers</h1>
                    <span>
                        Sanitised, best quality products at affordable rental
                        prices
                    </span>
                    <hr />
                </div>
                <div className={styles.grid}>
                    {products.data.map((item) => {
                        return (
                            <div key={item.attributes.slug}>
                                <Link
                                    href={`/consoles/${item.attributes.slug}`}
                                >
                                    <div className={styles.card}>
                                        <img
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_STRAPI_HOST +
                                                item.attributes.mainImage.data
                                                    .attributes.url
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
                <div className={styles.banner}>
                    <div className={styles.left}>
                        <span>GET</span>
                        <h1>PlayStation 4</h1>
                        <h3>At just Rs. 1,499 for 7 days</h3>
                        <Link href="/">
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
                    <span>Showing {products.data.length} items</span>
                    <hr/>
                    <select name="sort" id="sort">
                        <option value="lowtohigh">Price: Low to high</option>
                        <option value="lowtohigh">Price: High to low</option>
                    </select>
                </div>
                <div className={styles.grid}>
                    {products.data.map((item) => {
                        return (
                            <div key={item.attributes.slug}>
                                <Link
                                    href={`/consoles/${item.attributes.slug}`}
                                >
                                    <div className={styles.card}>
                                        <img
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_STRAPI_HOST +
                                                item.attributes.mainImage.data
                                                    .attributes.url
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
                        <VerifiedOutlinedIcon style={{ fontSize: "4rem" }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec quis enim lacus.
                        </p>
                    </div>
                    <div className={styles.usp_item}>
                        <AutoAwesomeOutlinedIcon style={{ fontSize: "4rem" }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec quis enim lacus.
                        </p>
                    </div>
                    <div className={styles.usp_item}>
                        <SupportAgentOutlinedIcon
                            style={{ fontSize: "4rem" }}
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec quis enim lacus.
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
    let products = await data.json();
    return {
        props: { products }, // will be passed to the page component as props
    };
}

export default Home;
