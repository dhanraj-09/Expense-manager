import "./dashboard.css"
function Dashboard()
{
    return(
        <div className={"container"}>
            <div className={"dashboard"}>
                <div className={"dashboard-text roboto-slab"}>Dashboard</div>
            </div>
            <div className={"blocks"}>
                <div className={"block1"}>
                    <div className={"total-all"}>
                        <div className={"total-balance total"}>
                            <div className={"icon-total"}>
                                <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill={"rgba(111,252,45,0.85)"}
                                        d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                </svg>
                            </div>
                            <div className={"total-text open-sans-text"}>Total Balance</div>
                            <div className={"total-amount open-sans-text"}>$3140</div>
                        </div>
                        <div className={"total-spending total"}>
                            <div className={"icon-total"}>
                                <svg width={400} height={400} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512">
                                    <path fill={"#6ffc2d"}
                                        d="M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"/>
                                </svg>
                            </div>
                            <div className={"total-text open-sans-text"}>Total Spending</div>
                            <div className={"total-amount open-sans-text"}>$100</div>
                        </div>
                        <div className={"total-saved total"}>
                            <div className={"icon-total"}>
                                <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512">
                                    <path fill={"#6ffc2d"}
                                          d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/>
                                    </svg>
                            </div>
                            <div className={"total-text open-sans-text"}>Total Received</div>
                            <div className={"total-amount open-sans-text"}>$3040</div>
                        </div>
                    </div>
                    <div className={"Overview"}></div>
                </div>
                <div className={"block2-activity"}>
                    <div className={"Activity"}></div>
                    <div className={"Comparison"}></div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard