export default function Step({ number, title, text }) { return <div className="step"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>; }
