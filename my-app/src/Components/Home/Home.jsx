import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Home.css";
import studyImage from "../Home/study.jpg";
import { getQuiz } from "../../Services/UseService";

const Home = () => {
  const [quizTitles, setQuizTitles] = useState([]); // Store an array of titles

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuiz();
        if (data?.data?.length > 0) {
          // Use the quiz.id instead of index
          setQuizTitles(data.data); // Store the full quiz objects (not just titles)
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, []);

  return (
    <main className="container">
      <div className="body">
        <div className="card-container">
          {quizTitles.length > 0 ? (
            quizTitles.map((quiz) => (
              <Card className="card" key={quiz.id}>
                {" "}
                {/* Use quiz.id as the key */}
                <Card.Img variant="top" src={studyImage} />
                <Card.Body>
                  <Link to={`/Info/${quiz.id}`} className="card-title">
                    {" "}
                    {/* Use quiz.id here */}
                    <Card.Title>{quiz.title}</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
