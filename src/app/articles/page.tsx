import Link from "next/link";
async function getData() {
    const username = 'chihho.chou';
    const mediumRssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

    try {
        const response = await fetch(mediumRssUrl);
        const data = await response.json();
        console.log(data.items[0]);
        const articles = data.items.slice(0, 5).map((item: any) => ({
          title: item.title,
          link: item.link,
        }));
    
        return {
          props: {
            articles,
          },
          revalidate: 60, // Revalidate every 60 seconds (1 minute)
        };
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
        return {
          props: {
            articles: [],
          },
        };
      }
  }

export default async function IndexPage() {
  const data = await getData();
//   console.log('data', data.props.articles);
  return (
    <>
        <h1>I tried to start writing some technical articles. Here are my published articles. More to come!</h1>
        <br />
        <ul>
            {data.props.articles.map((a: any) => <li><Link className="underline hover:text-gray-300" href={a.link} target="_blank">{a.title}</Link></li>)}
        </ul>
    </>)
};