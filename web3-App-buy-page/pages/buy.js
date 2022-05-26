/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { elementInViewport } from "../functions/dom";

export default function BuyPage() {
  const [activeBar, setactiveBar] = useState("first");
  const [mint, setmint] = useState(1);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdref = useRef();
  const contRef = useRef();

  useEffect(() => {
    function onScroll() {
      if (elementInViewport(firstRef.current, contRef.current)) {
        console.log("first");
        setactiveBar("first");
      } else if (elementInViewport(secondRef.current, contRef.current)) {
        console.log("second");
        setactiveBar("second");
      } else {
        console.log("third");
        setactiveBar("third");
      }
    }
    contRef.current.addEventListener("scroll", onScroll);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      contRef.current.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="buy">
      <div className="left">
        <div className="card">
          {/* <div className="bars">
            <div className={`bar ${activeBar === "first" ? "bar-active" : ""}`} />
            <div className={`bar ${activeBar === "second" ? "bar-active" : ""}`} />
            <div className={`bar ${activeBar === "third" ? "bar-active" : ""}`} />
          </div> */}

          <div className="content" ref={contRef}>
            <div className="container" ref={firstRef}>
              <h1>ADDLED</h1>
              <p>
                Web3 clubhouse aspiring to provideacommunity-driven platform.Addled is about fun,networking,investing
                and connecting.
              </p>
              <p>
                10,000 Addled Crocodile backed by Ethereum Smart Contract. Every owner will have sole ownership to the
                commodity. Addled Crocodile doubles as a membership pass to our platform.
              </p>
              <p>
                Addled also appreciates it first customers and so we would be sharing the trade royalty/creator fees
                with the minters.
              </p>
            </div>

            <div className="container" ref={secondRef}>
              <h1>THE TRINITY</h1>
              <p>Addled plans on growing with the community and making it the fore-front of our success.</p>
              <p>
                The Trinity - Creation Center for Addled Project is where all projects will be developed at the
                community&apos;s watch to achieve endless possibilities.
              </p>
              <p>
                Web3 has the power to bring dreams into reality. Come along this journey as we navigate through this
                realm of curiosity.
              </p>
            </div>

            <div className="container" ref={thirdref}>
              <h1>ADDLEDMATES</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-circle"></i>10,000 Unique Crocodiles minted on ETH.Low Gas Fees to make
                  lives easy.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>Fair Launch, Fair distribution.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>All Addled Crocodiles costs 0.08ETH
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>2.5% royalty shared with minters.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>Own the IP.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>Consumer has the sole ownership and commercial rights to the
                  commodity.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>“THE TRINITY”. Members-only think tank to create a platform to
                  achieve new horizons.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>Add incentives via Selling Roadmap Activations.
                </li>
                <li>
                  <i className="fa-solid fa-circle"></i>Earn more while you can.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="card">
          <h1>PRESALE</h1>
          <p>Presale Supply: 2,000</p>
          <p>Presale Price: 0.05 ETH</p>
          <div className="mint">
            <p>Presale Mint:</p>
            <div className="toggle">
              <i className="fa-solid fa-minus br" onClick={() => mint > 1 && setmint(mint - 1)}></i>
              <div>{mint}</div>
              <i className="fa-solid fa-plus bl" onClick={() => setmint(mint + 1)}></i>
            </div>
          </div>
          <button>MINT</button>
        </div>

        <div className="img">
          <img src="/img/hero-croc.svg" alt="img" />
        </div>
      </div>
    </div>
  );
}
