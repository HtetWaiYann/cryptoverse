import { Typography, Row, Col, Statistic } from "antd"
// import millify from "millify"
// import { Link } from "react-router-dom"

import { useGetCryptosQuery } from "../services/cryptoAPI"
import { Stats } from "../types/coinType.d"


const { Title } = Typography


const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery('');
  const globalStats : Stats | undefined = data?.data?.stats;

  if(isFetching || !globalStats) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={globalStats.totalMarketCap} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={globalStats.total24hVolume} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets} /></Col>
      </Row>
    </>
  )
}

export default Homepage