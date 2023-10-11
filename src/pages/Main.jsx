import "./Main.style.css";
import moon from "../assets/moon.png";
import Lottie from "lottie-react";
import lotty1 from "../assets/lotty_1.json";
import { Button } from "antd";
import CreateModal from "../components/modal/CreateModal";
import { useEffect, useState } from "react";
import Kratong from "../assets/Kratong";
export default function Main() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [kratongs, setKratongs] = useState([]);
  useEffect(() => {
    console.log(kratongs);
  }, [kratongs]);
  return (
    <div>
      <div className="view-container">
        <section className="city-section">
          <Lottie animationData={lotty1} loop={true} className="lotty1" />
          <img src={moon} alt="moon" className="moon" />
          <div className="city-container">
            <div className="city-background-setting city"></div>
          </div>
        </section>

        <section className="wave-section">
          <div className="wave-container" style={{ zIndex: 1 }}>
            <div className="wave-background-setting wave4"></div>
          </div>
          <div className="wave-container position3" style={{ zIndex: 3 }}>
            <div className="wave-background-setting wave3"></div>
          </div>
          <div className="wave-container position2" style={{ zIndex: 3 }}>
            {kratongs?.map((item) => {
              return < Kratong width="5%" className= "kratong" />;
            })}
            <div className="wave-background-setting wave2"></div>
          </div>
          <div className="wave-container position1" style={{ zIndex: 4 }}>
            <div className="wave-background-setting wave1"></div>
          </div>
        </section>
      </div>
      <div style={{zIndex: 5, position: "relative"}}>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          Create Kratong
        </Button>
      </div>
      <CreateModal
        open={isCreateModalOpen}
        setOpen={setIsCreateModalOpen}
        getData={(e) => {
          setKratongs((prev) => [...prev, e]);
        }}
      />
    </div>
  );
}
