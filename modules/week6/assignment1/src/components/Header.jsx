import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img source={logoImg} alt="Quiz logo" />
      <h1>ReqactQuiz</h1>
    </header>
  );
}
