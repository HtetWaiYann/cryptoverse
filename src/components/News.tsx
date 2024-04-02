import moment from "moment";
import { Card, Col, Row, Typography } from "antd";
import { useGetCryptoNewsMutation } from "../services/cryptoNewsAPI";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;
// const { Option } = Select;

const demoImage = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

const News = ({ simplified = false }: { simplified: boolean }) => {

  const [isFetching, setIsFetching] = useState(true);
  const [cryptoNews, setCryptoNews] = useState<NewsArticle[] | undefined>([]);

  const count = simplified ? 10 : 100;
  const newsBody: NewsBody = {
    text: "cryptocurrency",
    region: "US",
    max_results: count
  }

  const [getCryptoNews] = useGetCryptoNewsMutation(); 
  
  useEffect(() => {
    const fetchNews = () => {
      getCryptoNews(newsBody).then((response) => {
        console.log(response);
        setIsFetching(false);
        if ('data' in response) {
          setCryptoNews(response.data.news);
        }
      });
    }
    fetchNews();
  }, []);
  
  if (isFetching) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news.image || demoImage} alt="" />
              </div>
              <p>{news.body.length > 100 ? `${news.body.substring(0, 100)}...` : news.body}</p>
              <div className="provider-container">
                <Text>{moment(news.date).startOf('second').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
     </Row> 
  );
};

export default News;
