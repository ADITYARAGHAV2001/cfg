
import React from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import styles from "../styles/Home.module.css";



const About = ( {games, product, subTotal} ) => {
    return (
        <div>
            <Navbar
                KYC={"KYC"}
                About={" About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                product={product}
                subTotal={subTotal}
            />
        <div className="banner">
            {/* <img src="/1.png" alt="" /> */}
        </div>
        <div class="flex flex-wrap m-4">
        {games.data.map((item)=>{
          return(
            <Link href = {`/games/${item.attributes.slug}`}>
            <div class="xl:w-1/4 md:w-1/2 p-4 cursor-pointer card">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6 poster" src={item.attributes.Poster.data.attributes.url}/>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{ item.attributes.gameName}</h2>
              <p class="leading-relaxed text-base">{item.attributes.details.slice(0,130)}</p>
              </div>
          </div>
            </Link>
          )
        })}
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
                    <select name="sort" id="sort">
                        <option value="defualt">Defualt Sorting</option>
                        <option value="lowtohigh">Price: Low to high</option>
                        <option value="lowtohigh">Price: High to low</option>
                    </select>
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search for Product Name or Brand" value={query} onChange={(e) => { setquery(e.target.value) }} />
                        <SearchIcon style={{margin: "0.5rem"}}/>
                    </div>
                </div>
                <div className={styles.grid}>
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
        </div>
    );
};
export async function getServerSideProps(context) {
    let headers={
        Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
    }
    let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*" , {headers : headers});
    let games = await a.json();
    // console.log(games);
    return {
      props: {games},
  }
}
export default About;
