 

//* ====== Dashboard/Sidebar ======

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardText">
      <h1>Dashboard</h1>
      <h2>Widget</h2>
      <h2>Reviews</h2>
      <h2>Online Analysis</h2>
      <h2>Settings</h2>
      </div>
    </div>
  )
}


//* ====== Reviews ========

const Reviews = () => {
  return (
    <div className="reviews">
     <div className="reviewsText">
      <h1>Reviews</h1>
      <h2>1280</h2>
      </div>
    </div>
  )
}


//* ====== Average Rating ========

const AverageRating = () => {
  return (
      <div className="avgRating">
        <div className="avgRatingText">
        <h1>Average Rating</h1>
        <h2>4.6</h2>
        </div>
      </div>
  )
}

//http-server -c-1
const SentimentAnalysis = () => {
  return (
    <div className="sentAnalysis">
      <div className="sentiText">
     <h1>Sentiment Analysis</h1>
      <ul>
        <h3>960</h3>
        <h3>122</h3>
        <h3>321</h3>
  
      </ul>
      </div>
    </div>

  )
}


//* ====== Website visitors =========

const WebsiteVisitors = () => {
  return ( 
          <div className="webVisitors">
            <div className="webText">
          <h1>Website Visitors</h1>
          <h2>821</h2> 
          </div>
          </div>
          )
}


//* ====== App ========

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />

      </div>
    )
  }
}


ReactDOM.render(<App />,
    document.getElementById('main')
  );

