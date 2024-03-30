import { Card, Row, Col } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { useState } from "react";
import { Coin } from "../types/coinType.d";

const Cryptocurrencies = ({simplified = false } : {simplified: boolean}) => {
  console.log('simplified', simplified)

  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, _] = useState<Coin[] | undefined>(cryptoList?.data?.coins);

  if(isFetching) return "Loading...";

  return (
    <>
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
              hoverable
            >
              <p>Price: {millify(parseFloat(currency.price))}</p>
              <p>Market Cap: {millify(parseFloat(currency.marketCap))}</p>
              <p>Daily Change: {millify(parseFloat(currency.change))}</p>
            </Card>
          </Link>
        </Col> 
      ))}
    </Row>
    </>
  );
};

export default Cryptocurrencies;
