import React from "react";
import css from "./News.module.css";
import img1 from "../../assets/newsMabel.svg";
import img2 from "../../assets/mebeltwoo.svg";
import img3 from "../../assets/thriimebel.svg"; // Add the appropriate file extension
import foto1 from "../../assets/img1.svg";
import foto2 from "../../assets/img2.svg";
import foto3 from "../../assets/img3.svg";
import foto4 from "../../assets/img4.svg";

const News = () => {
  return (
    <section className="container">
      <div>
        <div className={css.head}>
          <center>
            <h2>Новости и предложения</h2>
          </center>
        </div>
        <div className={css.porfolio}>
          <div>
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className={css.twoo__porfolio}>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className={css.df_ftot}>
          <div>
            <img src={foto1} alt="" />
          </div>
          <div>
            <img src={foto2} alt="" />
          </div>
          <div>
            <img src={foto3} alt="" />
          </div>
          <div>
            <img src={foto4} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default News;
