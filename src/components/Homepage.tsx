import { Typography, Row, Col, Statistic } from "antd"
import millify from "millify"

import { useGetCryptosQuery } from "../services/cryptoAPI"
import { Stats } from "../types/coinType.d"
import { Link } from "react-router-dom"
import { Cryptocurrencies, News } from "."


const { Title } = Typography


const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(100);
  const globalStats : Stats | undefined = data?.data?.stats;

  if(isFetching || !globalStats) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage