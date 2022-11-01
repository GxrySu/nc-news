import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "../fetch-api";

const ArticleCard = ({ article }) => {
  const { article_id, author, created_at, title, topic, votes } = article;
  const [incVotes, setIncVotes] = useState(0);

  const handleVote = () => {
    setIncVotes((curr) => curr + 1);
    patchVotes(article_id).catch((err) => {
      console.log(err);
      setIncVotes((curr) => curr - 1);
    });
  };

  const myTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  const myDate = created_at.substring(0, 10);

  return (
    <section className="ArticleCard">
      <Link className="ArticleLink" to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <div className="Articles">
        <p>Topic: {myTopic}</p>
        <p>
          Author: <span>{author}</span>
        </p>
        <p>Date: {myDate}</p>
        <ul className="VoteWrapper">
          <li
            className="Vote-Button"
            disabled={incVotes !== 0}
            onClick={handleVote}
          >
            <span className="Vote-Tooltip">Like</span>
            <span>
              <i className="Like-Button">{votes + incVotes}✔</i>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ArticleCard;
