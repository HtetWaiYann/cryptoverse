interface NewsArticle {
    date: string;
    title: string;
    body: string;
    url: string;
    image: string;
    source: string;
}

interface NewsResponse {
    count: number;
    news_source: string;
    region: string;
    safesearch: string;
    time_limit: string;
    query: string;
    news: NewsArticle[];
}

interface NewsBody {
    text: string,
    region: string,
    max_results: number
}
