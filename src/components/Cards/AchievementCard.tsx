import React from 'react'
import "../styles/AchievementCard.css";

function AchievementCard(props: any) {
    const cardInfo = props.cardInfo;

    function openUrlInNewTab(url: any) {
        var win = window.open(url, "_blank") as any;
        win.focus();
      }
  return (
    <div className="certificate-card">
    <div className="certificate-image-div">
      <img src={cardInfo.image} alt="PWA" className="card-image"></img>
    </div>
    <div className="certificate-detail-div">
      <h5 className="card-title">{cardInfo.title}</h5>
      <p className="card-subtitle">{cardInfo.description}</p>
    </div>
    <div className="certificate-card-footer">
      {cardInfo.footer.map((v: any, i: number) => {
        return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
      })}
    </div>
  </div>
  )
}

export default AchievementCard