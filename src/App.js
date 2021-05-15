import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";
import { Route } from "react-router";
import NewsPage from "./pages/NewsPage";

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=807fe9037e03442eb54dc14e2abf9fdc"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    // <div className="App">
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
    <>
      <Route path="/:category?" component={NewsPage} />
    </>
  );
};

export default App;
