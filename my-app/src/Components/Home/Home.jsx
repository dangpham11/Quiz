import React from "react";
import { Link } from "react-router-dom"; // Thêm Link từ react-router-dom
import "./Home.css";
import { Card } from "react-bootstrap";
import studyImage from "../Home/study.jpg";

const Home = () => {
  return (
    <main className="container">
      <div className="body">
        <div className="card-container">
          <Card className="card">
            <Card.Img variant="top" src={studyImage} />
            <Card.Body>
              <Link to="/Answer" className="card-title">
                <Card.Title>Chuyên đề tổng hợp</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
